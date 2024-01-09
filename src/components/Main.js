import React, { useState } from 'react'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './footer/Footer'

const Main = () => {
    return (
        <div>
            <div className='row'>
                <Header />
            </div>
            <div className='row'>
                <Body />
            </div>

            <Footer />



        </div>
    )
}

export default Main