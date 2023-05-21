import React from "react";
import { Button, Card } from "react-bootstrap";
import "./game.css";

export default function CardGame({ title, description, image }) {
  return (
    <Card style={{ width: "100%" }} className="">
      <Card.Img variant="top" src={image} height={200} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  );
}
