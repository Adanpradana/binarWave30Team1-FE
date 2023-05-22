import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { errorToast } from "../../../../utils/globalToast";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./gamedetail.css";

function GameDetail() {

  const [games, setGames] = useState({});
  const params = useParams();

  const getGamesData = async () => {
    try {
      const response = await axios.get(`https://binarwave30team1-be-production-deb9.up.railway.app/games/rooms/${params.id}`);
      setGames(response.data.data);
      // console.log('ini hasil response', response.data.data)
    } catch (error) {
      errorToast(error.code);
    }
  };

  useEffect(() => {
    getGamesData();
  }, []);

// console.log(games)
  return (
    <div className="bg-gamedetail">
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width:"100 %"}} >
            <Card.Img variant="top" src={games.thumbnail_url} width={1000} />
            <Card.Body>
              <Card.Title style={{color:'black'}}>{games.Name}</Card.Title>
              <Card.Text>{games.Description}</Card.Text>
              <Card.Text>Player Count : {games.play_count}</Card.Text>
              <Link to={games.Game_url}>
                <Button className="btn-play-now">Play Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    
    </div>
  )
}

export default GameDetail;
