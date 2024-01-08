import React, { useState } from 'react'
import imgArray from '../../../Images'
import ImagePost from './ImagePost'
import PostDetail from './PostDetail'


const Feed = () => {
    const [images] = useState(imgArray)
    const [selectedPost, setSelectedPost] = useState(null)

    //console.log(images)

    const onSelect = (image) => {
        setSelectedPost(image)
        console.log(image)
    }

    const feed = images.map((image) => {
        return (<ImagePost image={image} onSelect={onSelect} key={image.id} />)
    })



    const postDetail = selectedPost ? <PostDetail post={selectedPost} /> : null

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    {feed}
                </div>
                <div className='col-7'>
                    {postDetail}
                </div>

            </div>


        </div>
    )
}

export default Feed