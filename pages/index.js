
//import React, { Component } from 'react'

import Head from "next/head"

export default () => {
  return (
    <div>
      <Head>
        <title>Mini projecto para cryptoanalisis</title>
      </Head>
      
      <main>
        <h1 className="title">
          Welcome to <button onClick={()=>{this.setState({is_pressed:!this.state.is_pressed})}}> Next.js! </button>
        </h1>
        <h3>
          {"PRESSED!"}
        </h3>
      </main>

    </div>
  )
}
