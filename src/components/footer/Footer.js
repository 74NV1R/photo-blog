import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-auto'>
                        <p>
                            Photo Blog
                            <br />
                            &#169; Tanvir Hasan
                            <br />
                            <Link to='https://github.com/74nv1r'>
                                GitHub
                            </Link>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer