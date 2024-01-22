import React, { useState, useEffect } from 'react'
import imgArray from '../../../Images'
import ImagePost from './ImagePost'
import PostDetail from './PostDetail'




const Feed = ({ category }) => {

    const [images] = useState(imgArray)
    const carImages = images.filter(image => image.topic === category);

    const [selectedPost, setSelectedPost] = useState(null)




    const onSelect = (image) => {
        setSelectedPost(image)
    }
    /* 
        const feed = carImages.map((image) => {
            return (<ImagePost image={image} onSelect={onSelect} key={image.id} />)
        }) */


    const feed = carImages.map((image) => (
        <ImagePost image={image} onSelect={onSelect} key={image.id} />
    ))

    /*     const postDetail = selectedPost ? <PostDetail post={selectedPost} /> : null
     */

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    {feed}
                </div>
                <div className='col-7'>
                    {/* {postDetail} */}
                    {selectedPost && <PostDetail post={selectedPost} />}

                </div>

            </div>


        </div>
    )
}

export default Feed