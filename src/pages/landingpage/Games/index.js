import React, { useState, useEffect } from "react";
import { Nav, Col, Row } from "react-bootstrap";
import CardGame from "./CardGame";
import "./game.css";
import api from "../../../utils/services/api";
import { errorToast } from "../../../utils/globalToast";

export default function Games() {
  const [games, setGames] = useState([]);

  const getGamesData = async () => {
    try {
      const response = await api.get("https://binarwave30team1-be-production-deb9.up.railway.app/games/rooms");
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
      <main className="pt-5 w-100 m-0 list-game">
        <Row className="px-3 gap-3 m-0 justify-content-center">
          {games.map((game, key) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className=" d-flex justify-content-center p-0 m-0"
            >
              <CardGame
                key={key}
                title={game.Name}
                image={game.thumbnail_url}
                description={game.Description}
                url={game.id}
              />
            </Col>
          ))}
        </Row>
      </main>
    </div>
  );
}
