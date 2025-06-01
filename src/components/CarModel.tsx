// src/components/CarModel/CarModel.tsx
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const tintValues = {
  5: 0.95,
  15: 0.85,
  20: 0.80,
  35: 0.65,
  50: 0.50,
  70: 0.30,
  100: 0,
};

const CarModel = () => {
  const { scene } = useGLTF('./bmw_g80_m4_competition.glb');
  const [tint, setTint] = useState(100);

  const applyTint = (object) => {
    object.traverse((child) => {
      if (child.isMesh && (
        child.name.toLowerCase().includes('window')
      )) {
        const tintMaterial = new THREE.MeshStandardMaterial({
          color: 'black',
          transparent: true,
          opacity: tintValues[tint],
        });
        child.material = tintMaterial;
      }
    });
  };

  const logMeshNames = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        console.log('Mesh Name:', child.name);
      }
    });
  };

  useEffect(() => {
    applyTint(scene);
    logMeshNames(scene);
  }, [tint, scene]);

  const boundingBox = new THREE.Box3().setFromObject(scene);
  const center = boundingBox.getCenter(new THREE.Vector3());
  const size = boundingBox.getSize(new THREE.Vector3());

  const cameraPosition = [center.x, center.y + size.y / 2, center.z + size.z];

  return (
    <div style={{ width: "1300px", height: "800px" }}>
      <Canvas camera={{ position: cameraPosition, fov: 65 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <primitive object={scene} scale={[1.4, 1.4, 1.4]} rotation={[0, Math.PI / 0.6, 0]} />
        <OrbitControls />
      </Canvas>
      <div className="controls">
        <label style={{ marginRight: '10px' }}>Window Tint:</label>
        {Object.keys(tintValues).map((key) => (
          <button 
            key={key} 
            onClick={() => setTint(Number(key))} 
            style={{ 
              margin: '5px', 
              padding: '10px', 
              width: '60px',
              height: '40px',
              backgroundColor: '#1CAAD9', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            {key}%
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarModel;