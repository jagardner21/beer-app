import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, CardImg, CardBody, CardSubtitle, CardText, CardTitle, Button, Container, Row, Col } from 'reactstrap'
import axios from 'axios'

const RandomBeer = (props) => {

    const [randomBeer, setRandomBeer] = useState({})

    const handleGetRandomBeer = () => {
        axios.get("https://sandbox-api.brewerydb.com/v2/beer/random?key=********", 
        { params: {hasLabels: "Y", withBreweries: "Y"}})
        .then(res => {
            setRandomBeer(res.data.data)
        })
        console.log(randomBeer)
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col xs='3'>
                </Col>
                <Col>
                    <Card className="p-5">
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{randomBeer.name}</CardTitle>
                            <CardSubtitle>{}</CardSubtitle>
                            <CardText></CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs='3'>
                </Col>
            </Row>
            <Button onClick={handleGetRandomBeer}>Pour Another!</Button>
    </Container>
  )
}


export default RandomBeer