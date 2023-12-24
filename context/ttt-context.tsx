"use client"
import React, { createContext, useContext, useState} from 'react'

type GameMode = 'sp' | 'mp' | null;
type playerTurn = 'X' | 'O' | null;

type TttContextProviderProps = {
    children: React.ReactNode
}

type TttContextType = {
    gameMode: GameMode;
    setGameMode: (mode: GameMode) => void;
    playerTurn: playerTurn
    togglePlayerTurn: () => void;
    updateGameBoard: (playerTurn: playerTurn, num: number) => void; 
}

const TttContext = createContext<TttContextType | null>(null);

let gameBoard: (playerTurn)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export function updateGameBoard(playerTurn: playerTurn, num: number) {  
  if (playerTurn === 'X') {
    gameBoard[Math.floor(num / 3)][num % 3] = 'X';
  } else {
    gameBoard[Math.floor(num / 3)][num % 3] = 'O';
  }
}


export default function TttContextProvider({ children }: TttContextProviderProps) {
  const [currentMode, setCurrentMode] = useState<GameMode>(null);
  const [playerTurn , setPlayerTurn] = useState<playerTurn>('X');

  
  const setGameMode = (mode: GameMode) => {
    setCurrentMode(mode);
  }

  const togglePlayerTurn = () => {
    if (playerTurn === 'X')
        setPlayerTurn('O');
    else
        setPlayerTurn('X');
  }

  return (
    <TttContext.Provider value={{gameMode: currentMode, setGameMode, playerTurn, togglePlayerTurn, updateGameBoard}}>
      {children}
    </TttContext.Provider>
  )
}

export function useTttContext() {
  const context = useContext(TttContext);
  if (context === null) {
    throw new Error('useTttContext must be used within a TttContextProvider');
  }
  return context;
}