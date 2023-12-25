"use client"
import React, { createContext, useContext, useState} from 'react'
import { GameMode, playerTurn } from '@/types/types';

type TttContextProviderProps = {
    children: React.ReactNode
}

type TttContextType = {
    gameMode: GameMode;
    setGameMode: (mode: GameMode) => void;
    playerTurn: playerTurn
    togglePlayerTurn: () => void;
    updateGameBoard: (playerTurn: playerTurn, num: number) => void; 
    viewGameBoard: (num: number) => playerTurn;
    checkForWinner: () => playerTurn;
}

const TttContext = createContext<TttContextType | null>(null);

let gameBoard: (playerTurn)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// this function updates the gameBoard array
export function updateGameBoard(playerTurn: playerTurn, num: number) {  
  gameBoard[Math.floor(num / 3)][num % 3] = playerTurn;

  console.log(gameBoard);
}

// this function views the gameBoard array
export function viewGameBoard(num: number) {  
  return gameBoard[Math.floor(num / 3)][num % 3];
}

// this function checks for a winner
export function checkForWinner() {
  // check rows
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2])
      return gameBoard[i][0];
  }

  // check columns
  for (let i = 0; i < 3; i++) {
    if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i])
      return gameBoard[0][i];
  }

  // check diagonals
  if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2])
    return gameBoard[0][0];
  if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0])
    return gameBoard[0][2];

  return null;
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
    <TttContext.Provider value={{gameMode: currentMode, setGameMode, playerTurn, togglePlayerTurn, updateGameBoard, viewGameBoard, checkForWinner}}>
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