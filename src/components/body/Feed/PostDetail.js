import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

const PostDetail = ({ post }) => {
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
                        {post.comments}
                    </CardText>
                </CardBody>
            </Card>

        </div>
    )
}

export default PostDetail