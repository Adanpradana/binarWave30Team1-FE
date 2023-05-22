import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { errorToast } from "../../../../utils/globalToast";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


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
    <div>
      <Image variant="top" src={games.thumbnail_url} width={1000} />
      <p>Title : {games.Name}</p>
      <p>Player Count : {games.play_count}</p>
      <p>Description Game : {games.Description}</p>
      <Link to={games.Game_url}>
      <Button>Play Now</Button>
      </Link>
    </div>
  )
}

export default GameDetail;
