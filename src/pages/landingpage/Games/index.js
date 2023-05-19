import React from 'react'
import { Nav, Col, Row } from "react-bootstrap";
import CardGame from './CardGame';
import './game.css';


export default function games() {
  return (
    <>
      <Nav className='bg-game'>
        <Row>
          <Col className="left">
            <p className="tittle">Enjoy Every Game In Virtual</p>
          {/* <Button className="btn-ply" href="/games">
            View More Game
          </Button>      */}
          
          </Col> 
          <Col className="right"> </Col>
        </Row>

        <Row style={{margin:'0px 50px'}}>
          <Col>
            <CardGame />
          </Col>
          <Col>
            <CardGame />
          </Col>
          <Col>
            <CardGame />
          </Col>
          <Col>
            <CardGame />
          </Col>
          <Col>
            <CardGame />
          </Col>
        </Row>
      </Nav>
    
    </>
  )
}
