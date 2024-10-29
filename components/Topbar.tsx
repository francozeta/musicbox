
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <svg aria-label='Vercel Logo' viewBox='0 0 75 65' height='22'>
          <path d='M37.59.25l36.95 64H.64l36.95-64z' fill='white' />
        </svg>
        <span className='text-heading-3-bold text-light-1 max-xs:hidden'>MusicBox</span>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          {/* <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <LogOut size={24} color='white' />
              </div>
            </SignOutButton>
          </SignedIn> */}
        </div>
        <UserButton />
      </div>
    </nav>
  )
}

export default Topbar