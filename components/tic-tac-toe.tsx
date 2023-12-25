"use client"
import React from 'react'
import TttHeader from './ttt-header'
import TttGameboard from './ttt-gameboard'
import TttContextProvider from '@/context/ttt-context'
import TttFooter from './ttt-footer'

export default function TicTacToe() {

  return (
    <section>
      <TttContextProvider>
        <TttHeader />
        <TttGameboard /> 
        <TttFooter />
      </TttContextProvider>
           
    </section>  
  )
}
