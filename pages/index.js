import React from 'react'
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>LinkedIn</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <button>Sign out</button>
    </div>
  )
}
