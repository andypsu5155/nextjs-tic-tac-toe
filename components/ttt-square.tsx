"use client"

import React from 'react'
import { useState } from 'react';
import { useTttContext } from '@/context/ttt-context';


export default function TttSquare({ num }: { num: number }) {
    const {playerTurn, togglePlayerTurn, updateGameBoard} = useTttContext();
    type squareValueTypes = 'X' | 'O' | null;

    const [squareValue, setSquareValue] = useState<squareValueTypes>(null);

    function updateSquareValue(value: squareValueTypes, num: number) {
        if (squareValue === null) { 
            setSquareValue(playerTurn);
            updateGameBoard(playerTurn, num);
            togglePlayerTurn();
        } else
            return;
    }

  return (
    <div className='flex items-center justify-center text-[10rem] w-[100%] aspect-square bg-blue-500 border-[10px] border-gray-300'
        onClick={() => updateSquareValue('X', num)}>{squareValue != null ? squareValue : null}</div>
  )
}
