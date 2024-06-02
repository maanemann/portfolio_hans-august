
'use client'

import { useGameContext } from '@/contexts/GameContext';
import Scene from './Scene';

const Game = () => {
  const { currentScene, changeScene, assets } = useGameContext();

  return (
    <div className="game-container">
      <Scene sceneId={currentScene} assets={assets[currentScene]} />
      
      {/* Add navigation arrows */}
      <div className="navigation-arrows">
        {/* Example arrow */}
        <div className="arrow left" onClick={() => changeScene('leftScene')} />
        <div className="arrow right" onClick={() => changeScene('rightScene')} />
        <div className="arrow back" onClick={() => changeScene('backScene')} />
      </div>
    </div>
  );
};

export default Game;
