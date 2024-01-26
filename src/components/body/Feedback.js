import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'


const Feedback = ({ onClose, imgId }) => {
    const [feedback, setFeedback] = useState({
        name: '',
        comment: '',
        time: new Date().toLocaleString(),
        imageId: imgId
    })

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


        console.log(feedback)

        if (feedback.comment != '' && feedback.name != '') {
            axios.post("https://photoblog-d4b1f-default-rtdb.firebaseio.com/feedback.json", feedback)
                .then(response => {
                    if (response.status === 200) {
                        console.log('posted')
                        onClose()
                    }
                })
                .catch(err => {
                    console.log(err.response)
                })
        }
        else {
            alert("Feedback can be empty!")
        }
    }






    return (
        <div>
            <h2>Share your feedback</h2>
            <form style={{
                margin: '20px',
                padding: '10px'
            }} onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder='name'
                    value={feedback.name}
                    onChange={handleChange}
                />

                <br />
                <br />

                <textarea
                    name="comment"
                    placeholder='type your comment here...'
                    value={feedback.comment}
                    onChange={handleChange}
                />

                <br />
                <Button type="submit btn btn-primary" color='primary' onClick={handleSubmit}>Submit</Button>
                <Button type='btn btn-danger' onClick={onClose}>Close</Button>
            </form>


        </div>
    )
}

export default Feedback
