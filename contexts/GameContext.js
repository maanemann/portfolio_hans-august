
'use client'

import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentScene, setCurrentScene] = useState('scene1');
  const [assets, setAssets] = useState({});

  const changeScene = (scene) => {
    setCurrentScene(scene);
  };

  const updateAssets = (newAssets) => {
    setAssets((prevAssets) => ({ ...prevAssets, ...newAssets }));
  };

  return (
    <GameContext.Provider value={{ currentScene, changeScene, assets, updateAssets }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
