import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import './../../../App.css'

const ImagePost = ({ image, onSelect }) => {
    return (
        <div>
            <Card onClick={() => onSelect(image)} className='Card'
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {image.topic}
                    </CardTitle>

                </CardBody>
                <img
                    alt="Card cap"
                    src={image.image}
                    width="100%"
                />
                <CardBody>
                    <CardText>
                        {image.caption}
                    </CardText>

                </CardBody>
            </Card>
            <br />

        </div>
    )
}

export default ImagePost