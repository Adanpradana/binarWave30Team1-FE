import { Container } from "react-bootstrap";
import "./style.css";
import logo1 from "../../../assets/games/logo1.png";
import batu from "../../../assets/games/batu1.png";
import gunting from "../../../assets/games/gunting1.png";
import kertas from "../../../assets/games/kertas1.png";
export default function Score() {
  return (
    <Container
      fluid
      style={{
        paddingLeft: "250px",
        paddingTop: "80px",
        backgroundColor: "#f1b85c",
        height: "100%",
      }}
    >
      <section class="containerGame">
        <div class="top">
          <p class="back">{"<"}</p>
          <img src={logo1} alt="" />
          <p class="rock">ROCK PAPER SCISSORS</p>
        </div>
        <div class="bottom">
          <div class="wrapper-1">
            <p class="player">PLAYER 1</p>
            <div class="img-wrapper">
              <div
                id="p-rock"
                class="img-wrapper-gray start"
                onclick="startGame('rock')"
              >
                <img src={batu} alt="" class="rock" />
              </div>
              <div id="p-scissor" class="img-wrapper-gray start">
                <img
                  id="p-scissor"
                  src={gunting}
                  alt=""
                  class="scissor"
                  onclick="startGame('scissor')"
                />
              </div>
              <div id="p-paper" class="img-wrapper-gray start">
                <img
                  src={kertas}
                  alt=""
                  class="paper"
                  onclick="startGame('paper')"
                />
              </div>
            </div>
          </div>
          <div class="wrapper-2">
            <p id="versus">VS</p>
            <div id="winEl"></div>
          </div>
          <div class="wrapper-1">
            <p class="player">COM</p>
            <div class="img-wrapper bot">
              <div class="img-wrapper-gray" id="botRock">
                <img src={batu} alt="" class="rock" />
              </div>
              <div class="img-wrapper-gray" id="botScissor">
                <img src={gunting} alt="" class="scissor" />
              </div>
              <div class="img-wrapper-gray" id="botPaper">
                <img src={kertas} alt="" class="paper" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
