import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  //useStates
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };
