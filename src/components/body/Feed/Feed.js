import React, { useState } from 'react'
import imgArray from '../../../Images'
import ImagePost from './ImagePost'
import PostDetail from './PostDetail'


const Feed = () => {
    const [images] = useState(imgArray)

    //console.log(images)

    const feed = images.map((image) => {
        return (<ImagePost image={image} key={image.id} />)
    })

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    {feed}
                </div>
                <div className='col-7'>
                    <PostDetail />
                </div>

            </div>


        </div>
    )
}

export default Feed