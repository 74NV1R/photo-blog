import React, { useState, useEffect, useReducer } from "react"
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Modal,
} from "reactstrap"
import Feedback from "../Feedback"
import axios from "axios"

const initialState = {
    n: [],
    c: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "updateFeedback":
            return {
                ...state,
                n: action.payload.names,
                c: action.payload.comments,
            }

        default:
            return state
    }
}

const PostDetail = ({ post }) => {
    const [isModalOpen, setModalOpen] = useState(false)
    let v = []
    let names = []
    console.log(post)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: "addComment", payload: [] })
        dispatch({ type: "addName", payload: [] })
        axios
            .get("https://photoblog-d4b1f-default-rtdb.firebaseio.com/feedback.json")
            .then((response) => {
                const filteredFeedback = Object.values(response.data).filter(
                    (feedback) => post.id === feedback.imageId
                )
                dispatch({
                    type: "updateFeedback",
                    payload: {
                        comments: filteredFeedback.map((item) => item.comment),
                        names: filteredFeedback.map((item) => item.name),
                    },
                })
            })
            .catch((error) => console.log(error));
    }, [post])

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const imgId = post.id;

    return (
        <div>
            <Card
                style={{
                    width: "30rem",
                }}
            >
                {console.log("this is being triggered with id=", post.id)}
                <img alt="Sample" src={post.image} />
                <CardBody>
                    <CardTitle tag="h5">{post.caption}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {post.topic}
                    </CardSubtitle>
                    <CardText>
                        Comments:
                        <ul>
                            {state.n.map((name, index) =>
                                state.c[index] ? (
                                    <li key={index}>
                                        {name} : {state.c[index]}
                                    </li>
                                ) : null
                            )}

                        </ul>


                        <Button className="btn btn-primary" onClick={openModal}>
                            Add a comment
                        </Button>
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

export default PostDetail;