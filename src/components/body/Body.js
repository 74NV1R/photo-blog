import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Wildlife from './Topics/Wildlife'
import Tech from './Topics/Tech'
import Art from './Topics/Art'
import Automobile from './Topics/Automobile'
import "../../Images"
import Feed from './Feed/Feed'

const Body = () => {

    return (
        <div>
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

export default Body