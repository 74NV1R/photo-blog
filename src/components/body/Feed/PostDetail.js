import React, { useState, useEffect, useReducer } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal } from 'reactstrap'
import Feedback from '../Feedback'
import axios from 'axios'


const initialState = {
    n: [],
    c: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addComment':
            return { ...state, c: [...state.c, action.payload] }
        case 'addName':
            return { ...state, n: [...state.n, action.payload] }

        default:
            return state
    }
}

const PostDetail = ({ post }) => {

    const [isModalOpen, setModalOpen] = useState(false)
    let v = []
    let names = []

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://photoblog-d4b1f-default-rtdb.firebaseio.com/feedback.json")
            .then(response => {
                for (let key in response.data) {
                    (post.id == response.data[key].imageId ? v.push(response.data[key]) : console.log())
                }
                for (let key in v) {
                    dispatch({ type: 'addComment', payload: v[key].comment });
                    dispatch({ type: 'addName', payload: v[key].name });
                }

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
                        Comments:
                        <ul>
                            {state.n.map((name, index) => (
                                <li key={index}>{name} : {state.c[index]}</li>
                            ))}
                        </ul>

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