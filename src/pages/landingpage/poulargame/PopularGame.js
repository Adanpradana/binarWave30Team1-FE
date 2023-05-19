import React from 'react'
import './PopularGame.css';
import {Nav, Card, Row, Col} from "react-bootstrap/";
import game1 from "../../../asset/game1.jpg"
import game2 from "../../../asset/game2.jpg"
import game3 from "../../../asset/game3.jpg"
import game4 from "../../../asset/game4.jpg"


export const PopularGame = () => {
  return (
    <div className='bg-popular-game'>
        <Nav className='tittle-popular-game'> Most popular products</Nav>
            <Row>
                <Col>
                    <Card style={{ width:'18rem'}}>
                        <Card.Img 
                        variant="top" 
                        src={game1}
                        className="list-game"
                        />
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width:'18rem'}}>
                        <Card.Img 
                        variant="top" 
                        src={game2}
                        className="list-game"
                        />
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width:'18rem'}}>
                        <Card.Img 
                        variant="top" 
                        src={game3}
                        className="list-game"
                        />
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width:'18rem'}}>
                        <Card.Img 
                        variant="top" 
                        src={game4}
                        className="list-game"
                        />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='tittle-game'>Kuda Tomplok</Col>
                <Col className='tittle-game'>Kuda Lumping</Col>
                <Col className='tittle-game'>Tepok Nyamuk</Col>
                <Col className='tittle-game'>Cat Cat</Col>
            </Row>
    </div>
  )
}
