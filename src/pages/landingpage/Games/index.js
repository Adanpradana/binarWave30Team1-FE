import React from 'react'
import { Nav, Col, Row, CardGroup } from "react-bootstrap";
import CardGame from './CardGame';
import './game.css';

export default function games() {
  return (
    <>
      <Nav className='bg'>
        <Row>
          <Col className="left">
            <p className="tittle">Enjoy Every Game In Virtual</p>
          {/* <Button className="btn-ply" href="/games">
            View More Game
          </Button>      */}
          
          </Col> 
          <Col className="right"> </Col>
        </Row>
          <CardGroup>
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
          </CardGroup>
      </Nav>
    
    </>
  )
}
