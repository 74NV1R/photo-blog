import React from 'react';

const Feedback = ({ onClose }) => {

    return (
        <div>
            <h2>Feedback Form</h2>

            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default Feedback
