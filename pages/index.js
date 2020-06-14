
//import React, { Component } from 'react'
import Head from "next/head"


//custom components
import MainBanner from "./components/MainBanner"

export default () => {
  return (
    <div>
      <Head>
        <title>Mini projecto para cryptoanalisis</title>
      </Head>
      
      <MainBanner/>
    </div>
  )
}
