import React, { useState } from 'react';
import { CarCanvas, CarControls, CarModelContext } from './Car Model/CarModel';

// Create context provider wrapper
const CarModelProvider = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </CarModelContext.Provider>
  );
};

export default function Models() {

    return (
        <CarModelProvider>
            <div className="models-page">
                <div className="models-container">
                    <div className="models-header">
                        {/* <h1>3D Модели</h1> */}
                        <p>Разгледайте нашите интерактивни 3D модели и визуализирайте различни опции за фолиране на стъкла</p>
                    </div>
                    
                    <div className="models-layout">
                        <div className="models-frame">
                            <div className="frame-header">
                                <div className="frame-controls">
                                    <div className="control-dot red"></div>
                                    <div className="control-dot yellow"></div>
                                    <div className="control-dot green"></div>
                                </div>
                            </div>
                            <div className="frame-content">
                                <CarCanvas />
                            </div>
                        </div>

                        <div className="models-controls">
                            <CarControls />
                        </div>
                    </div>

                    <div className="models-info">
                        <div className="info-grid">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fa-solid fa-hand-pointer"></i>
                                </div>
                                <h3>Интерактивни контроли</h3>
                                <p>Кликнете и плъзнете за въртене на модела. Превъртете за мащабиране.</p>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fa-solid fa-car"></i>
                                </div>
                                <h3>Множество модели</h3>
                                <p>Изберете от различни модели коли включително BMW, VW и други.</p>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fa-solid fa-palette"></i>
                                </div>
                                <h3>Персонализирано фолиране</h3>
                                <p>Изберете различни зони на стъклата и приложете персонализирани проценти фолиране.</p>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                                <h3>Преглед в реално време</h3>
                                <p>Вижте незабавна визуална обратна връзка при настройване на нивата на фолиране.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CarModelProvider>
    );
};