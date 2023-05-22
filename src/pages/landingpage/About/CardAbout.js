import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import "./About.css";

export const CardAbout = ({Name, Job, description, image}) => {
  return (
    <div className="col-sm-6 col md-4">
            <div className="team-item">
              <img src={image} className="team-img" alt="pic" />
              <h3>{Name}</h3>
              <div className="team-info">
                <p>{Job}</p>
                <p>
                  {description}
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="#" className="LinkedIn">
                      <i>
                        <LinkedInIcon />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="Github">
                      <i>
                        <GithubIcon />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="Instagram">
                      <i>
                        <InstagramIcon />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  )
}
