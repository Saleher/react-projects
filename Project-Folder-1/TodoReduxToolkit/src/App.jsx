import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
     <main className='bg-gradient-to-r from-[#387DCD] to-[#E697DD] h-screen flex items-center'>
        <div className="div w-6/12 mx-auto">
          <h1 className='text-center text-3xl font-bold text-white'>Redux toolkit</h1>
          <div className="bg-white p-4 mt-4">
            <AddTodo />
          </div>
          <Todos />
        </div>
     </main>
    </>
  )
}

export default App
