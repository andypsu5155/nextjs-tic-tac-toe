import React from 'react'
import TttHeader from './ttt-header'
import TttGameboard from './ttt-gameboard'
import TttContextProvider from '@/context/ttt-context'

export default function TicTacToe() {
  return (
    <section>
      <TttContextProvider>
        <TttHeader />
        <TttGameboard /> 
      </TttContextProvider>
           
    </section>  
  )
}
