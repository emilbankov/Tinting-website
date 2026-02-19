// src/components/CarModel/CarModel.tsx
import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Create context for shared state
export const CarModelContext = createContext<{
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  tint: number;
  setTint: (tint: number) => void;
  selectedCategories: {
    front_windows: boolean;
    back_windows: boolean;
    windshield: boolean;
    rear_windshield: boolean;
    headlights: boolean;
    taillights: boolean;
  };
  setSelectedCategories: React.Dispatch<React.SetStateAction<{
    front_windows: boolean;
    back_windows: boolean;
    windshield: boolean;
    rear_windshield: boolean;
    headlights: boolean;
    taillights: boolean;
  }>>;
}>({
  selectedModel: '/models/bmw_g20.glb',
  setSelectedModel: () => {},
  tint: 100,
  setTint: () => {},
  selectedCategories: {
    front_windows: false,
    back_windows: true,
    windshield: false,
    rear_windshield: true,
    headlights: false,
    taillights: false,
  },
  setSelectedCategories: () => {},
});

const tintValues = {
  5: 0.95,
  15: 0.85,
  20: 0.80,
  35: 0.65,
  50: 0.50,
  70: 0.30,
  100: 0,
};

const ClickHandler = ({ scene }: { scene: THREE.Group }) => {
  const { camera, gl } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  const handleClick = (event: MouseEvent) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.current.setFromCamera(mouse.current, camera);
    const intersects = raycaster.current.intersectObject(scene, true);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object as THREE.Mesh;
      const material = clickedObject.material;
      console.log('=== CLICKED MESH INFO ===');
      console.log('Mesh Name:', clickedObject.name);
      console.log('Material:', material);
      if (Array.isArray(material)) {
        console.log('Material Type:', material[0]?.type);
        console.log('Material Name:', material[0]?.name);
      } else {
        console.log('Material Type:', material?.type);
        console.log('Material Name:', material?.name);
      }
      console.log('UUID:', clickedObject.uuid);
      console.log('Position:', clickedObject.position);
      console.log('========================');
    }
  };

  useEffect(() => {
    gl.domElement.addEventListener('click', handleClick);
    return () => {
      gl.domElement.removeEventListener('click', handleClick);
    };
  }, [gl, camera, scene]);

  return null;
};

// Canvas component for 3D model
export const CarCanvas = () => {
  const { selectedModel, tint, selectedCategories } = useContext(CarModelContext);
  
  // Debug: Log the current model path
  console.log('Loading model:', selectedModel);
  
  const { scene, nodes } = useGLTF(selectedModel);
  const originalMaterials = useRef<Map<string, THREE.Material>>(new Map());

  console.log('=== GLTF NODES ===');
  console.log('All nodes:', nodes);
  console.log('Scene children:', scene.children);
  console.log('==================');

  const applyTint = (object: THREE.Object3D) => {
    // Order matters! Put more specific names first
    const tintCategories = ['rear_windshield', 'windshield', 'front_windows', 'back_windows', 'headlights', 'taillights'];

    object.traverse((child: THREE.Object3D) => {
      // More specific matching to avoid conflicts
      let categoryName = null;
      
      if (child.name.toLowerCase().includes('rear_windshield') && child.type === 'Object3D') {
        categoryName = 'rear_windshield';
      } else if (child.name.toLowerCase().includes('windshield') && child.type === 'Object3D' && !child.name.toLowerCase().includes('rear_windshield')) {
        categoryName = 'windshield';
      } else if (child.name.toLowerCase().includes('front_windows') && child.type === 'Object3D') {
        categoryName = 'front_windows';
      } else if (child.name.toLowerCase().includes('back_windows') && child.type === 'Object3D') {
        categoryName = 'back_windows';
      } else if (child.name.toLowerCase().includes('headlights') && child.type === 'Object3D') {
        categoryName = 'headlights';
      } else if (child.name.toLowerCase().includes('taillights') && child.type === 'Object3D') {
        categoryName = 'taillights';
      }

      if (categoryName) {
        child.traverse((meshChild: THREE.Object3D) => {
          if ((meshChild as THREE.Mesh).isMesh) {
            const mesh = meshChild as THREE.Mesh;
            const meshKey = `${categoryName}_${mesh.uuid}`;

            // Store original material if not already stored
            if (!originalMaterials.current.has(meshKey)) {
              const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
              if (material) {
                originalMaterials.current.set(meshKey, material.clone());
              }
            }

            if (selectedCategories[categoryName as keyof typeof selectedCategories]) {
              // Apply tint
              const tintMaterial = new THREE.MeshStandardMaterial({
                color: 'black',
                transparent: true,
                opacity: tintValues[tint as keyof typeof tintValues],
                side: THREE.DoubleSide,
              });
              mesh.material = tintMaterial;
            } else {
              // Restore to 100% tint (0 opacity) instead of original material
              const clearMaterial = new THREE.MeshStandardMaterial({
                color: 'black',
                transparent: true,
                opacity: 0, // 100% tint = 0 opacity
                side: THREE.DoubleSide,
              });
              mesh.material = clearMaterial;
            }
          }
        });
      }
      // Also check for other glass objects
      else if ((child as THREE.Mesh).isMesh && (
        // child.name.includes('Object_149') ||
        // child.name.includes('Object_171') ||
        // child.name.includes('Object_174') ||
        // child.name.includes('Object_210') ||
        // child.name.includes('Object_213') ||
        // child.name.includes('Object_216') ||
        // child.name.includes('Object_219') ||
        // child.name.includes('Object_238') ||
        // child.name.includes('Object_241') ||
        // child.name.includes('Object_244') ||
        // child.name.includes('Object_247') ||
        // child.name.includes('Object_250') ||
        child.name.includes('Object_253')
      )) {
        const mesh = child as THREE.Mesh;
        const meshKey = `glass_${mesh.uuid}`;

        // Store original material if not already stored
        if (!originalMaterials.current.has(meshKey)) {
          const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
          if (material) {
            originalMaterials.current.set(meshKey, material.clone());
          }
        }

        // Apply tint to all glass objects (since they're not controlled by checkboxes)
        const tintMaterial = new THREE.MeshStandardMaterial({
          color: 'black',
          transparent: true,
          opacity: tintValues[tint as keyof typeof tintValues],
          side: THREE.DoubleSide,
        });
        mesh.material = tintMaterial;
      }
    });
  };

  const logSceneStructure = (object: THREE.Object3D, level = 0) => {
    const indent = '  '.repeat(level);
    console.log(`${indent}📁 ${object.name || 'unnamed'} (type: ${object.type})`);

    object.children.forEach((child) => {
      if (child.type === 'Group' || child.type === 'Scene') {
        logSceneStructure(child, level + 1);
      } else if ((child as THREE.Mesh).isMesh) {
        console.log(`${indent}  🧊 ${child.name} (Mesh)`);
      } else {
        console.log(`${indent}  ${child.name} (${child.type})`);
      }
    });
  };

  useEffect(() => {
    applyTint(scene);
    logSceneStructure(scene);
  }, [scene, tint, selectedModel, selectedCategories]);

  const boundingBox = new THREE.Box3().setFromObject(scene);
  const center = boundingBox.getCenter(new THREE.Vector3());
  const size = boundingBox.getSize(new THREE.Vector3());

  // Model-specific adjustments
  let cameraPosition = [center.x, center.y + size.y / 2, center.z + size.z];
  let modelScale = [1.4, 1.4, 1.4];
  let modelRotation = [0, Math.PI / 0.6, 0];

  if (selectedModel === '/models/e46.glb') {
    // E46 specific adjustments
    cameraPosition = [center.x, center.y + size.y * 0.8, center.z + size.z * 1.5];
    modelScale = [1.2, 1.2, 1.2];
    modelRotation = [0, Math.PI / 0.8, 0];
  }

  return (
    <div className="car-canvas-wrapper">
      <Canvas camera={{ position: cameraPosition, fov: 65 }}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={1.0} />
        <directionalLight position={[0, 5, 10]} intensity={0.8} />
        <directionalLight position={[0, 10, 0]} intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, 10, -10]} intensity={0.9} />
        <pointLight position={[0, 2, 5]} intensity={0.7} />
        <pointLight position={[5, 0, 5]} intensity={0.5} />
        <primitive object={scene} scale={modelScale} rotation={modelRotation} />
        <ClickHandler scene={scene} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

// Controls component
export const CarControls = () => {
  const { selectedModel, setSelectedModel, tint, setTint, selectedCategories, setSelectedCategories } = useContext(CarModelContext);

  const handleModelChange = (modelPath: string) => {
    setSelectedModel(modelPath);
    setSelectedCategories({
      front_windows: false,
      back_windows: true,
      windshield: false,
      rear_windshield: true,
      headlights: false,
      taillights: false,
    });
  };

  const carModels = [
    { name: 'BMW G20', path: '/models/bmw_g20.glb' },
    { name: 'BMW E92 M3', path: '/models/bmw_m3_e92.glb' },
    { name: 'BMW F82 M4', path: '/models/bmw_m4_f82.glb' },
    { name: 'BMW G82 M4', path: '/models/bmw_m4_g82.glb' },
    { name: 'VW Golf 5', path: '/models/vw_golf_5.glb' },
    { name: 'VW Golf 6', path: '/models/vw_golf_6.glb' },
    { name: 'BMW E46 M3 CSL', path: '/models/e46.glb' },
  ];

  return (
    <div className="car-controls">
      <div className="controls-section">
        <h3>Изберете модел кола</h3>
        <div className="model-buttons">
          {carModels.map((model) => (
            <button 
              key={model.path} 
              onClick={() => handleModelChange(model.path)} 
              className={selectedModel === model.path ? 'active' : ''}
            >
              {model.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="controls-section">
        <h3>Категории фолиране</h3>
        <div className="category-buttons">
          {Object.keys(selectedCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategories(prev => ({
                ...prev,
                [category]: !prev[category as keyof typeof prev]
              }))}
              className={selectedCategories[category as keyof typeof selectedCategories] ? 'active' : ''}
            >
              {category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
      
      <div className="controls-section">
        <h3>Фолиране на стъкла</h3>
        <div className="tint-buttons">
          {Object.keys(tintValues).map((key) => (
            <button 
              key={key} 
              onClick={() => setTint(Number(key))}
              className={tint === Number(key) ? 'active' : ''}
            >
              {key}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component with context provider
const CarModel = () => {
  const [selectedModel, setSelectedModel] = useState('/models/bmw_g20.glb');
  const [tint, setTint] = useState(100);
  const [selectedCategories, setSelectedCategories] = useState({
    front_windows: false,
    back_windows: true,
    windshield: false,
    rear_windshield: true,
    headlights: false,
    taillights: false,
  });

  return (
    <CarModelContext.Provider value={{
      selectedModel,
      setSelectedModel,
      tint,
      setTint,
      selectedCategories,
      setSelectedCategories,
    }}>
      <CarCanvas />
      <CarControls />
    </CarModelContext.Provider>
  );
};

export default CarModel;