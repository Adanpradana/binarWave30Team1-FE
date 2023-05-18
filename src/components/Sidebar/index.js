import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className={sidebar ? null : "body-pd snippet-body"}>
      <header className={sidebar ? "header" : "header body-pd"}>
        <div className="header_toggle" onClick={() => setSidebar(!sidebar)}>
          {sidebar ? <BiMenu /> : <BiMenuAltLeft />}
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
              <span className="nav_logo-name">BBBootstrap</span>
            </Link>
            <div className="nav_list">
              <Link className="nav_link active">
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </Link>
              <Link className="nav_link">
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">Users</span>
              </Link>
              <Link className="nav_link">
                <i className="bx bx-message-square-detail nav_icon"></i>
                <span className="nav_name">Messages</span>
              </Link>
              <Link className="nav_link">
                <i className="bx bx-bookmark nav_icon"></i>
                <span className="nav_name">Bookmark</span>
              </Link>
              <Link className="nav_link">
                <i className="bx bx-folder nav_icon"></i>
                <span className="nav_name">Files</span>
              </Link>
              <Link className="nav_link">
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                <span className="nav_name">Stats</span>
              </Link>
            </div>
          </div>
          <Link className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </Link>
        </nav>
      </div>
      <div className="height-100 bg-light">
        <h4>Main Components</h4>
      </div>
    </div>
  );
}
