import React from 'react'
import './PopularGame.css';
import {Nav, Card, Row, Col} from "react-bootstrap/";
import game1 from "../../../assets/game1.jpg"
import game2 from "../../../assets/game2.jpg"
import game3 from "../../../assets/game3.jpg"
import game4 from "../../../assets/game4.jpg"


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
                    <p className='tittle-game'> KUDA LUMPING</p>
                </Col>
                <Col>
                    <Card style={{ width:'18rem'}}>
                        <Card.Img 
                        variant="top" 
                        src={game2}
                        className="list-game"
                        />
                    </Card>
                    <p className='tittle-game'> KUDA LUMPING</p>
                </Col>
                <Col>
                    <Card style={{ width:'18rem'}}>
                        <Card.Img 
                        variant="top" 
                        src={game3}
                        className="list-game"
                        />
                    </Card>
                    <p className='tittle-game'> KUDA LUMPING</p>
                </Col>
                <Col>
                    <Card style={{ width:'18rem'}}>
                        <Card.Img 
                        variant="top" 
                        src={game4}
                        className="list-game"
                        />
                    </Card>
                    <p className='tittle-game'> KUDA LUMPING</p>
                </Col>
            </Row>
           
    </div>
  )
}
