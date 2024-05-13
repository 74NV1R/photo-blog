import React, { useState } from 'react'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './footer/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'

import Wildlife from './body/Topics/Wildlife'
import Tech from './body/Topics/Tech'
import Art from './body/Topics/Art'
import Automobile from './body/Topics/Automobile'
import Auth from './Auth/Auth'
import PrintComments from './body/Feed/PrintComments'
import Login from './Auth/Login'

const Main = () => {
    return (
        <div>
            <div className='row'>
                <Header />
            </div>
            <div className='container'>
                <Routes>
                    <Route path='/wildlife' element={<Wildlife />} />
                    <Route path='/automobile' element={<Automobile />} />
                    <Route path='/art' element={<Art />} />
                    <Route path='/tech' element={<Tech />} />
                    <Route path="/login" element={<Auth />} />
                    <Route path="/comm" element={<PrintComments />} />

                    <Route path="/" element={<Navigate to="/" />} />

                </Routes>
            </div>


            <div className='row'>
                <Footer />
            </div>




        </div>
    )
}

export default Main