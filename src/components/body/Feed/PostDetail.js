import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal } from 'reactstrap'
import Feedback from '../Feedback'
import axios from 'axios'
import PrintComments from './PrintComments'

const PostDetail = ({ post }) => {

    const [isModalOpen, setModalOpen] = useState(false)

    const [comments, setComments] = useState(null)

    const fetchData = async () => {
        try {
            const response = await axios.get('https://photoblog-d4b1f-default-rtdb.firebaseio.com/feedback.json');
            setComments(response.data)
            console.log(comments)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    /*     const showComments = comments.map((comm) => {
            return (<PrintComments comments={comments} />)
        }) */

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const imgId = post.id

    return (
        <div>
            <Card
                style={{
                    width: '30rem'
                }}
            >
                <img
                    alt="Sample"
                    src={post.image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {post.caption}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {post.topic}
                    </CardSubtitle>
                    <CardText>
                        {post.comments.length} comments <br />
                        {post.comments.map((commentObj, index) => (
                            <span key={index}>
                                {commentObj.comment} - {commentObj.commenter}
                            </span>
                        ))}
                        <br />

                        {/* {showComments} */}
                        <Button className='btn btn-primary' onClick={openModal}>Add a comment</Button>
                    </CardText>




                </CardBody>
            </Card>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Feedback Form"
            >
                <Feedback onClose={closeModal} imgId={imgId} />
            </Modal>

        </div>
    )
}

export default PostDetail