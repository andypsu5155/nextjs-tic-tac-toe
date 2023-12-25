import React from 'react'
import TttHeaderButtons from './ttt-header-buttons'

export default function TttHeader() {
  return (
    <section className='text-center p-3'>
        <h1 className='text-6xl font-bold'>Tic Tac Toe</h1>
        <TttHeaderButtons />
    </section>
  )
}
