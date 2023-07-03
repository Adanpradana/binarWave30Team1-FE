import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./game.css";

const CardGame = ({ title, description, image, url }) => {
  return (
    <Card style={{ width: "100%" }} className="">
      <Card.Img variant="top" src={image} height={200} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/games/details/${url}`}>
        <Button variant="primary">Learn More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardGame
