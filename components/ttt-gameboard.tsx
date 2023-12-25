"use client"

import React from 'react'
import { useTttContext } from '@/context/ttt-context'
import TttSquare from './ttt-square';

export default function TttGameboard() {
  const {gameMode, viewGameBoard} = useTttContext();

  return (
    <section className={`grid grid-cols-3 text-center w-[25%] mx-auto ${gameMode === null ? 'hidden' : ''}`}>
        <TttSquare num={0}>{viewGameBoard(0)}</TttSquare>
        <TttSquare num={1}>{viewGameBoard(1)}</TttSquare>
        <TttSquare num={2}>{viewGameBoard(2)}</TttSquare>
        <TttSquare num={3}>{viewGameBoard(3)}</TttSquare>
        <TttSquare num={4}>{viewGameBoard(4)}</TttSquare>
        <TttSquare num={5}>{viewGameBoard(5)}</TttSquare>
        <TttSquare num={6}>{viewGameBoard(6)}</TttSquare>
        <TttSquare num={7}>{viewGameBoard(7)}</TttSquare>
        <TttSquare num={8}>{viewGameBoard(8)}</TttSquare>
    </section>
  )
}
