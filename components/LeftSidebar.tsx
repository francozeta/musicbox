"use client"

import { sidebarLinks } from '@/constants'
import { SignedIn, SignOutButton } from '@clerk/nextjs'
import { LogOut } from '@geist-ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {
  const pathname = usePathname()
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route
          /* if(link.route === '/profile') link.route = `${link.route}/${userId}` */

          return (
            <Link
              key={link.label}
              href={link.route}
              className={`leftsidebar_link ${isActive && 'bg-primary-500'}`} // Active Color link
            >
              <link.icon color='white' size={24} />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          )
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          {/* Modified */}
          <SignOutButton redirectUrl='/sign-in'>
            <div className="flex cursor-pointer gap-4 px-4">
              <LogOut size={24} color='white' />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar