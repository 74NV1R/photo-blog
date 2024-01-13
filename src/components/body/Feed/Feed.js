import React, { useState } from 'react'
import imgArray from '../../../Images'
import ImagePost from './ImagePost'
import PostDetail from './PostDetail'



const Feed = ({ category }) => {

    const [images] = useState(imgArray)
    const carImages = images.filter(image => image.topic === category);

    const [selectedPost, setSelectedPost] = useState(null)


    //console.log(category, carImages)

    const onSelect = (image) => {
        setSelectedPost(image)
        //console.log(image)
    }


    const feed = carImages.map((image) => {
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