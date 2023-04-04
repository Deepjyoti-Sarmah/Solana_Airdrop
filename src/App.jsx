import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-black min-h-screen text-white flex flex-col">
      <div className=" container mx-auto max-w-7xl md:pt-64 px-4 text-center flex-grow">
        <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
          Solana Faucet Devnet  
        </h1>
      </div>
      <div className='w-11.12 md:w-6/12 mx-auto mb-3 text-gray-900'>
        <input type="text" placeholder="Enter Solana account address..." class="px-3 py-3 placeholder-blueGray-300 relative bg-white rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-full" value="">
          
        </input>
      </div>

    </div>
  )
}

export default App
