//importing child component for projects and media
import Layout from '../components/Layout'
import cartPic from "../images/cart.jpg"
import memoryPic from "../images/memory.jpg"
import portPic from "../images/portfolio.jpg"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import TrackVisibility from 'react-on-screen';

export default function Projects() {
//info of my projects are stored here
  const projects = [
    {
      title: "React Developer Portfolio",
      description: "Developer Portfolio I built with React",
      imgUrl: portPic,
      link: "https://juanbiljoen.github.io/my-portfolio/"
    },

    {
      title: "Functional e-commerce cart",
      description: "One of my first more advanced JavaScript projects",
      imgUrl: cartPic,
      link: "https://github.com/JuanBiljoen/e-commerce-Shopping-cart"
    },
    {
      title: "Memory game",
      description: "a Card memory game built with React (build phase)",
      imgUrl: memoryPic,
      link: "https://github.com/JuanBiljoen/memory-game"
    },
  ];
//displaying projects and inline jsx
  return (
    <Layout>
      <div className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Projects</h2>
                    <p>Here are a couple of projects I have worked on thus far.</p>

                    {projects.map((project, index) => {
                      return (
                        <div key={index} className={'project-card'}>
                          <ProjectCard {...project} />
                        </div>
                      )
                    })}

                    <style jsx>{`
                    .project {
                      text-align: center;
                    }
                    h2,h4 {
                      margin-bottom: 20px;
                      text-align: center;
                    }
                    p {
                      margin-bottom: 40px;
                      text-align: center;
                    }
                    .project-card {
                      display: inline-block;
                      margin-right: 20px;
                    }
                    @media (max-width: 600px) {
                      .project {
                        background: blue;
                      }
                      *{
                        justify-content: center;
                        text-align: center; 
                      }
                    }
                  `}</style>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>


  )
}