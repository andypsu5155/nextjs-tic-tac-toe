"use client"

import React from 'react'
import { useTttContext } from '@/context/ttt-context'
import TttSquare from './ttt-square';

export default function TttGameboard() {
  const {gameMode, setGameMode} = useTttContext();

  return (
    <section className={`grid grid-cols-3 text-center w-[60%] mx-auto ${gameMode === null ? 'hidden' : ''}`}>
        <TttSquare num={0} />
        <TttSquare num={1} />
        <TttSquare num={2} />
        <TttSquare num={3} />
        <TttSquare num={4} />
        <TttSquare num={5} />
        <TttSquare num={6} />
        <TttSquare num={7} />
        <TttSquare num={8} />
    </section>
  )
}
