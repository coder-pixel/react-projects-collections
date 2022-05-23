import React from 'react'
import { Link } from 'react-router-dom';
import projectsData from "./projectsData";
// console.log(projectsData)

const Home = () => {



  return (
    <div className='home'>
      <div className="home_landing">
        <div className="landing_text">
          <h1>React projects!</h1>
          <p>Projects are the most practical way to learn any language, and <span>React</span> is no exception.</p>
        </div>
        <div className="landing_img">
          <img src="./images/react.webp" alt="" />
        </div>
      </div>

      <div className="projects_section">
        <h3>Projects</h3>

        <div className="projects_container">
          {projectsData.map(project => {
            const { name, img, url } = project;
            return (
              <Link to={url}>
                <div className="project">
                  <img src={img} alt="" />

                  <h4>{name}</h4>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home