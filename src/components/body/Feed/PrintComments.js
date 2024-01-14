import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PrintComments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get("https://photoblog-d4b1f-default-rtdb.firebaseio.com/feedback.json")
            .then(response => {
                setComments(response.data)
                //console.log(typeof (response.data))
                //console.log(response.data)
                console.log(...comments)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div>

        </div>
    )
}

export default PrintComments