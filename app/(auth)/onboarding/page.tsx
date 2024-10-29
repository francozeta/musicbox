import AccountProfile from '@/components/forms/AccountProfile'
import { currentUser } from '@clerk/nextjs/server'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding | MusicBox',
  description: 'Make your first steps into the MusicBox world',
}
async function Page() {
  const user = await currentUser()

  const userInfo = {}

  const userData = {
    id: "",
    objectId: "",
    username: "",
    name: "",
    bio: "",
    image: ""
  }
  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-center items-center min-h-screen px-10 py-20'>
      <h1 className='head-text text-center'>Onboarding</h1>
      <p className='mt-3 text-base-regular text-light-2 text-center'>
        Complete your profile now, to use MusicBox.
      </p>

      <section className='mt-9 bg-dark-2 p-10 w-full max-w-lg border border-zinc-800 rounded-xl'>
        <AccountProfile
          user={userData}
          btnTitle='continue'
        />
      </section>
    </main>
  )
}

export default Page