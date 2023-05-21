import React, { useState, useEffect } from "react";
import { Nav, Col, Row } from "react-bootstrap";
import CardGame from "./CardGame";
import "./game.css";
import api from "../../../utils/services/api";
import axios from "axios";
import { errorToast } from "../../../utils/globalToast";
import { ToastContainer } from "react-toastify";

export default function Games() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [games, setGames] = useState([]);

  const getGamesData = async () => {
    try {
      const response = await api.get("/games/rooms");
      setGames(response.data.rooms);
    } catch (error) {
      errorToast(error.code);
    }
  };

  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <div>
      <Nav className="bg">
        <Row>
          <Col className="left">
            <p className="tittle">Enjoy Every Game In Virtual</p>
            {/* <Button className="btn-ply" href="/games">
            View More Game
          </Button>      */}
          </Col>
          <Col className="right"> </Col>
        </Row>
      </Nav>
      <main className="pt-5">
        <Row style={{ margin: "0px 50px", width: "100%" }}>
          <Col md={4} sm={2}>
            {games.map((game, key) => (
              <CardGame
                key={key}
                title={game.Name}
                image={
                  "https://binarwave30team1-be-production-deb9.up.railway.app/images/2.webp"
                }
                description={game.Description}
              />
            ))}
          </Col>
        </Row>
      </main>
    </div>
  );
}
