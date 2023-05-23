import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import "./About.css";

export const CardAbout = ({ Name, Job, description, image }) => {
  return (
    <div className="col-sm-6 col md-4">
      <div className="team-item">
        <img src={image} className="team-img" alt="pic" />
        <h3>{Name}</h3>
        <div className="team-info">
          <p>{Job}</p>
          <p>{description}</p>

          <ul className="team-icon">
            <li>
              <a href="#" className="LinkedIn">
                <i>
                  <BsInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="Github">
                <i>
                  <BsLinkedin />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="Instagram">
                <i>
                  <BsGithub />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
