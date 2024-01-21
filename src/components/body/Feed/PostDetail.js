import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal } from 'reactstrap'
import Feedback from '../Feedback'
import axios from 'axios'

const PostDetail = ({ post }) => {

    const [isModalOpen, setModalOpen] = useState(false)
    let v = []
    let names = []
    let feeds = []

    const [comments, setComments] = useState(null)
    const [name, sentName] = useState(null)

    useEffect(() => {
        axios.get("https://photoblog-d4b1f-default-rtdb.firebaseio.com/feedback.json")
            .then(response => {
                //console.log(response.data)
                for (let key in response.data) {
                    (post.id == response.data[key].imageId ? v.push(response.data[key]) : console.log())
                }

                for (let key in v) {
                    feeds.push(v[key].comment)
                    names.push(v[key].name)
                    setComments((comments) => [...comments, v[key].comment])
                    sentName((name) => [...name, v[key].name])
                }

                //console.log(name)

                console.log(name, comments)



            })
            .catch(error => console.log(error))
    }, [])



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
                        {names.length} comments <br />
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

                <Feedback onClose={closeModal} imgId={imgId} />

            </Modal>

        </div>
    )
}

export default PostDetail