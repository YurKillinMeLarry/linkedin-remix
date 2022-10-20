import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import HeaderLink from '../components/HeaderLink'
import Hero from '../public/linkedin_Hero.svg'
import Logo from '../public/LI-Logo.png'
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded'
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded'
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded'
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { getProviders, signIn } from 'next-auth/react'

function Home({ providers }) {
  console.log(providers)
  return (
    <div className='relative space-y-10'>
      <Head>
        <title>LinkedIn</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex items-center justify-around py-4'>
        <div className='relative h-10 w-36'>
          <Image src={Logo} alt='Logo' layout='fill' objectFit='contain' />
        </div>
        <div className='flex items-center divide-gray-600 sm:divide-x'>
          <div className='hidden pr-4 space-x-8 sm:flex'>
            <HeaderLink Icon={ExploreRoundedIcon} text='Discover' />
            <HeaderLink Icon={PeopleOutlineRoundedIcon} text='People' />
            <HeaderLink Icon={OndemandVideoRoundedIcon} text='Learning' />
            <HeaderLink Icon={BusinessCenterRoundedIcon} text='Jobs' />
          </div>

          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className='pl-4'>
                <button
                  className='text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2'
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                  Sign In
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className='flex flex-col items-center max-w-screen-lg mx-auto xl:flex-row'>
        <div className='space-y-6 xl:space-y-10'>
          <h1 className='text-3xl md:text-5xl font-thin text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0'>
            Welcome to your professional community
          </h1>
          <div className='space-y-4'>
            <div className='action'>
              <h2 className='text-xl'>Search for a job</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
            <div className='action'>
              <h2 className='text-xl'>Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
            <div className='action'>
              <h2 className='text-xl'>Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
          </div>
        </div>

        <div className='relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5'>
          <Image src={Hero} layout='fill' alt='Hero Image' priority={true} />
        </div>
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}
