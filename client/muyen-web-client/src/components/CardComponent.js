import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { formatRupiah } from '../utils/formatRP'

const CardComponent = ({ menu }) => {
    return (
        <Col md={4} xs={6} className="mb-4 mt-2">
            <Card className='shadow'>
                <Card.Img variant="top" src={menu.imgUrl} />
                <Card.Body>
                    <Card.Title>{menu.name}</Card.Title>
                    <Card.Text>
                        description
                        <hr />
                        {menu.description}
                        <hr />
                        Price : <strong>{formatRupiah(menu.price)}</strong>
                        <hr />
                        more at {menu.MainCategory.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardComponent