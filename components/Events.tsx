import Navbar from '../components/Navbar'

import { useWallet } from '../services/providers/MintbaseWalletContext'

import Link from 'next/link'
import Image from 'next/image'

const Events = () => {
  const { wallet, isConnected, details } = useWallet()
  return (
    <>
      <div
        className="w-full md:py-36 lg:py-72  bg-cover bg-no-repeat bg-bottom relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwyOTY4MjV8MHwxfGFsbHx8fHx8fHx8fDE2NDM3NDg3MTc\u0026ixlib=rb-1.2.1')",
        }}
      >
        <div className="container py-36 max-w-4xl mx-auto text-center">
          <h1 className="text-xl font-black md:text-3xl text-center text-white mb-3">
            Tired of 20% fees on secondary ticket purchases? Us too.
          </h1>
          <p className="text-md font-bold md:text-lg text-center text-white ">
            Welcome to 3ntry: Your Web3 Ticket to the World
          </p>

          <a
            href="https://mintbase.io/developers"
            className="mt-6 inline-block rounded bg-white text-black no-underline px-4 py-3 hover:shadow-2xl"
          >
            Browse events
          </a>
        </div>
      </div>
    </>
  )
}

export default Events
