import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

const PostDetail = ({ post }) => {

    let comment = null
    const postCommnents = (post) => {
        for (let i = 0; i < post.comments.length; i++) {
            comment = comment + `<br> ${post.comments[i]} <br>`
        }
        console.log(comment)
        return comment
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
                        {post.comments}
                        {postCommnents}
                    </CardText>
                </CardBody>
            </Card>

        </div>
    )
}

export default PostDetail