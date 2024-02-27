import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import GridSignos from '../components/GridSignos';
import Head from 'next/head';


const signos = () => {
  return (
    <div className='bg-[#1c212e]'>
    <Head>
        <title>Signos - Astroblog</title>
      </Head>
    <Header />
    <div className="relative min-h-screen">
      <GridSignos />
    </div>
    <Footer />
  </div>
  )
}

export default signos