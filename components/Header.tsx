'use client'

import Link from 'next/link'
import React from 'react'
import AgentPulse from './AgentPulse'

function Header() {
  return (
    <header className='sticky top-0 z-50 left-0 right-0 md:px-0 bg-white/80 backdrop-blur-sm border-gray-200 '>
        <div className='container mx-auto'>
        {/* left */}
            <div className='flex items-center h-16'>
                <Link href="/" className='flex items-center justify-between gap-4'>
                    {/* Agent pulse */}
                    <AgentPulse size='small' color='blue'></AgentPulse>
                    <h1 className='text-xl font-semibold bg-gradient-to-b
                     from-blue-600 to-blue-400 bg-clip-text
                       text-transparent'>AgentTube</h1>
                </Link>
            </div>

            {/* right */}
            <div>
                
            </div>
        </div>
    </header>
  )
}

export default Header