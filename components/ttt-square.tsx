"use client"

import React from 'react'
import { useTttContext } from '@/context/ttt-context';

export default function TttSquare({children, num}: {children: React.ReactNode, num: number}) {
    const {playerTurn, togglePlayerTurn, updateGameBoard, viewGameBoard, checkForWinner} = useTttContext();

    function updateSquareValue(num: number) {
      if(checkForWinner() === null) {
        if(viewGameBoard(num) !== null) {
          alert("This square has already been taken! Please select another square.")
          return;
        } else {
          updateGameBoard(playerTurn, num);
          togglePlayerTurn();
          return;
        }
      } else {
        alert("The game is over! Please refresh the page to play again.");
        return;
      }
    }

  return (
    <div className='flex items-center justify-center text-[8rem] w-[100%] aspect-square bg-blue-500 border-[10px] border-gray-300'
         onClick={() => updateSquareValue(num)}>
      {children}
    </div>
  )
}
