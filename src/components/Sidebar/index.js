import { Link } from "react-router-dom";
import "./style.css";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import TokenService from "../../utils/services/token";
import jwtDecode from "jwt-decode";
export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const requestLogout = () => {
    TokenService.removeToken();
    window.location.href = "/";
  };

  const token = TokenService.getToken("access_token");
  const user = jwtDecode(token);
  const username = user.Username; // Assign the username directly

  localStorage.setItem("username", username);
  // let user = null;
  // if (localStorage.getItem("token")) {
  //   user = jwtDecode(localStorage.getItem("token"));
  //   localStorage.setItem("username", user.Username);
  //   localStorage.setItem("iat", user.iat);
  // }
  // console.log(user);

  return (
    <div className={sidebar ? null : "body-pd snippet-body"}>
      <header className={sidebar ? "header" : "header body-pd"}>
        <div className="header_toggle" onClick={() => setSidebar(!sidebar)}>
          {sidebar ? <BiMenu /> : <BiMenuAltLeft />}
        </div>
        <div>
          {" "}
          welcome back <span style={{ fontWeight: "bold" }}>{username}</span>
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
      <div className={sidebar ? "l-navbar" : "l-navbar show"}>
        <nav className="nav">
          <div>
            <Link className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">lalaeyeyey</span>
            </Link>
            <div className="nav_list">
              <Link className="nav_link active text-decoration-none">
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </Link>
              <Link className="nav_link text-decoration-none">
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">Users</span>
              </Link>
            </div>
          </div>
          <Link
            className="nav_link text-decoration-none"
            onClick={requestLogout}
          >
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
