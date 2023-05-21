import React from "react";
import { Button, Card } from "react-bootstrap";
import "./game.css";
import game1 from "../../../assets/game1.jpg";

export default function CardGame({ title, description, image }) {
  return (
    <Card style={{ width: "18rem", margin: "0px 25px 0px 25px" }}>
      <Card.Img variant="top" src={image} height={250} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
