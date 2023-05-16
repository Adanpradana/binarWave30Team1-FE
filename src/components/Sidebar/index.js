import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
export default function Sidebar() {
  return (
    <>
      <header className="header">
        <div className="header_toggle">
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
      <div class="l-navbar" id="nav-bar">
        <nav class="nav">
          <div>
            <Link class="nav_logo">
              <i class="bx bx-layer nav_logo-icon"></i>
              <span class="nav_logo-name">BBBootstrap</span>
            </Link>
            <div class="nav_list">
              <Link class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Dashboard</span>
              </Link>
              <Link class="nav_link">
                <i class="bx bx-user nav_icon"></i>
                <span class="nav_name">Users</span>
              </Link>
              <Link class="nav_link">
                <i class="bx bx-message-square-detail nav_icon"></i>
                <span class="nav_name">Messages</span>
              </Link>
              <Link class="nav_link">
                <i class="bx bx-bookmark nav_icon"></i>
                <span class="nav_name">Bookmark</span>
              </Link>
              <Link class="nav_link">
                <i class="bx bx-folder nav_icon"></i>
                <span class="nav_name">Files</span>
              </Link>
              <Link class="nav_link">
                <i class="bx bx-bar-chart-alt-2 nav_icon"></i>
                <span class="nav_name">Stats</span>
              </Link>
            </div>
          </div>
          <Link class="nav_link">
            <i class="bx bx-log-out nav_icon"></i>
            <span class="nav_name">SignOut</span>
          </Link>
        </nav>
      </div>
      <div class="height-100 bg-light">
        <h4>Main Components</h4>
      </div>
    </>
  );
}
