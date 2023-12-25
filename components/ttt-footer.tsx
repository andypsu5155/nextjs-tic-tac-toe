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
                <>
                    <h2 className = 'text-5xl'>The winner is:</h2>
                    <p className='text-8xl'>{winner}</p>
                </>
            )}
        </section>
    )
}
