"use client"

import React from 'react'
import { useTttContext } from '@/context/ttt-context'

export default function TttHeaderButtons() {
  const {gameMode, setGameMode} = useTttContext();

  return (

    <div className={`flex items-center justify-center gap-10 p-10 ${gameMode !== null ? 'hidden' : ''}`}>
        <button className='flex text-4xl bg-blue-400 p-10 rounded-3xl text-gray-800 hover:bg-blue-600 hover:text-gray-950 transition-all'
                onClick={() => setGameMode('sp')}>Single Player</button>
        <button className='flex text-4xl bg-blue-400 p-10 rounded-3xl text-gray-800 hover:bg-blue-600 hover:text-gray-950 transition-all'
                onClick={() => setGameMode('mp')}>Two Player</button>
    </div>
  )
}


