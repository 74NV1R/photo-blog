import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal } from 'reactstrap'
import Feedback from '../Feedback'

const PostDetail = ({ post }) => {

    let comment = null


    const [isModalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }


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


                        <Button className='btn btn-primary' onClick={openModal}>Add a comment</Button>
                    </CardText>




                </CardBody>
            </Card>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Feedback Form"
            >
                <Feedback onClose={closeModal} />
            </Modal>

        </div>
    )
}

export default PostDetail