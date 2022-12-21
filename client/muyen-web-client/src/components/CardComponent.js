import React from 'react'
import { Card } from 'react-bootstrap'

const CardComponent = () => {
    return (
        <Card style={{ width: '18rem', margin: "1rem" }}>
            <Card.Img variant="top" src="https://media-cdn.yummyadvisor.com/store/d1faaee9-d5d4-4828-9733-d510f735d557.jpg" />
            <Card.Body>
                <Card.Title>Coffee</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent