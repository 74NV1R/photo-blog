import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Wildlife from './body/Topics/Wildlife'
import Tech from './body/Topics/Tech'
import Art from './body/Topics/Art'
import Automobile from './body/Topics/Automobile'
import Header from './header/Header'

const Main = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/wildlife' element={<Wildlife />} />
                    <Route path='/automobile' element={<Automobile />} />
                    <Route path='/art' element={<Art />} />
                    <Route path='/tech' element={<Tech />} />
                    <Route path="/" element={<Navigate to="/" />} />
                </Routes>
            </div>

        </div>
    )
}

export default Main