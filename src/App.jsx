import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Connection, PublicKey } from "@solana/web3.js";

function App() {

  const [solanaPublicKey, setSolanaPublicKey] = useState("");
  const [solAmount, setSolAmount] = useState(1);
  const [txnHash, setTxnHash] = useState("");
  // const [isAirdropped, setIsAirdropped] = useState(false);

  const solanaAirdrop = async (e) => {
    e.preventDefault();
    //connection 
    const connection = new Connection("http://api.devnet.solana.com");
    let publicKeyObject;
    try {
      publicKeyObject = new PublicKey(solanaPublicKey);
    } catch (err) {
      alert("Invalid address");
      return;
    }
    // 1e9 lamports = 10^9 lamports = 1 SOL
    const lamports = Math.min(solAmount, 500) * 1e9;
    const txnhash = await connection.requestAirdrop(publicKeyObject, lamports);
    setTxnHash(txnhash);
    // setIsAirdropped(true);
  };
  console.log(`txhash: ${txnHash}`);

  return (
    <>
      <div className='bg-gradient-to-b from-gray-600 to-gray-950 min-h-screen text-white flex flex-col'>
        <form onSubmit={solanaAirdrop}>

          <div className='container mx-auto max-w-7xl pt-20 md:pt-64 pb-12 px-4 text-center flex-grow-0'>
            <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-blue-500'>
                Sol Faucet for Devnet
              </span>
            </h1>
          </div>
          <div className='w-11/12 md:w-6/12 mx-auto mb-3 text-gray-900'>
            {
              /* !isAirdropped && ( */
              <input type="text" placeholder="Enter Solana account address..."
                value={solanaPublicKey} onChange={(e) => setSolanaPublicKey(e.target.value)}
                className='px-3 py-3 placeholder-blueGray-300 relative bg-white rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-full' />
              // )
            }
          </div>
          <div className='w-full mt-3 flex flex-col md:flex-row md:justify-center md:items-baseline'>
            <div className='m-1'>
              <span className='text-xl font-bold'>Airdrop</span>
              <input type="number" min='0'
                value={solAmount} onChange={(e) => setSolAmount(e.target.value)}
                className='rounded mx-2 w-16 text-center text-gray-900 font-extrabold' />
              <span className='text-xl font-bold'>SOL to</span>
            </div>
            <div className='m-1'>
              <button type="submit"
                className='bg-blue-600 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Airdrop</button>
            </div>
          </div>
        </form>
      </div>
      <footer className='bg-gray-900 w-full pb-4 px-2 py-2 md:px-4'>
        <p className='text-center text-base text-gray-400 font-semibold'>
          Made by {" "}
          <a className="underline text-blue-300 hover:text-blue-500" target="_blank" href="https://github.com/Deepjyoti-Sarmah">
            @Deepjyoti Sarmah
          </a>
        </p>
      </footer>
    </>

  )
}

export default App

