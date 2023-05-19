import React from 'react'
import { Card } from "react-bootstrap";
import game1 from '../../asset/game1.jpg';

export default function CardGame (props){
  return (
    <div>
      <Card style={{ width:'18rem'}}>
          <Card.Img 
          variant="top" 
          src={game1}
          className="list-game"
          />
      </Card>
    </div>        
  )
}
