"use client"

import React from 'react'
import { useTttContext } from '@/context/ttt-context';

export default function TttFooter() {
    const {checkForWinner, playerTurn, gameMode} = useTttContext();
    const winner = checkForWinner();

    if(gameMode === null) {
        return null;
    }

    return (
        <section className='text-center p-10'>
            {winner === null ? (
                <>
                    <h2 className='text-3xl'>Player Turn</h2>
                    <p className='text-6xl'>{playerTurn}</p>
                </>
            ) : (
                <div className='flex flex-col items-center justify-center'>
                    <h2 className = 'text-5xl'>The winner is:</h2>
                    <p className='text-8xl'>{winner}</p>
                    <a href='/' className='text-4xl bg-blue-400 p-10 rounded-3xl text-gray-800 hover:bg-blue-600 hover:text-gray-950 transition-all'>Start a New Game!</a>
                </div>
            )}
        </section>
    )
}
