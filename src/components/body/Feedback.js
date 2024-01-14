import React, { useState } from 'react'
import axios from 'axios'


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

        axios.post("https://photoblog-d4b1f-default-rtdb.firebaseio.com/feedback.json", feedback)
            .then(response => {
                if (response.status === 200) {
                    console.log('posted')
                }
            })
            .catch(err => {
                console.log(err.response)
            })
    }




    return (
        <div>
            <h2>Share your feedback</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={feedback.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Comment:
                    <textarea
                        name="comment"
                        value={feedback.comment}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={onClose}>Close</button>

        </div>
    )
}

export default Feedback
