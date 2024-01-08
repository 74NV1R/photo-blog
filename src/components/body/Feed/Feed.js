import React, { useState } from 'react'
import imgArray from '../../../Images'
import ImagePost from './ImagePost'

const Feed = () => {
    const [images] = useState(imgArray)

    //console.log(images)

    const feed = images.map((image) => {
        return (<ImagePost image={image} key={image.id} />)
    })

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    {feed}
                </div>

            </div>


        </div>
    )
}

export default Feed