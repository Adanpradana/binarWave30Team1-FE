import React from 'react'
import { Button, Card } from "react-bootstrap";
import './game.css';
import game1 from '../../asset/game1.jpg';

export default function CardGame (){
  return (
    <Card style={{ width: '18rem', margin:'0px 25px 0px 25px' }}>
    <Card.Img variant="top" src={game1} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}
