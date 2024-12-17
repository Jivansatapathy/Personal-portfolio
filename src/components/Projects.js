import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/krishi.png";
import projImg2 from "../assets/img/Quote.png";
import projImg3 from "../assets/img/sakhyam.jpg";
import projImg4 from "../assets/img/Medibot.png";
import blogImg1 from "../assets/img/Ludo.png"; // Replace with your blog preview image
import blogImg2 from "../assets/img/Scholarship.png"; // Replace with your blog preview image
import blogImg3 from "../assets/img/Haryana.png"; // Replace with your blog preview image
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Plant Disease Detection",
      description: "Machine Learning Model",
      imgUrl: projImg1,
    },
    {
      title: "Quote Generator app",
      description: "JS & API integration",
      imgUrl: projImg2,
    },
    {
      title: "Nukkad Natak Webpage",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Medibot Kiosk Chat-Bot",
      description: "Javascript (Design & Development)",
      imgUrl: projImg4,
    },
  ];

  const blogs = [
    {
      imgUrl: blogImg1,
      link: "https://wordpress.com/page/jivansatapathy.wordpress.com/113",
    },
    {
      imgUrl: blogImg2,
      link: "https://jivansatapathy.wordpress.com/2024/11/02/transforming-careers-the-ritchie-jennings-scholarship/",
    },
    {
      imgUrl: blogImg3,
      link: "https://jivansatapathy.wordpress.com/2024/11/16/kaushal-rozgar-nigam-haryana-revolution-in-transparent-employment-management/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>My projects reflect a perfect blend of creativity, innovation, and technical expertise. From award-winning solutions like the Medi-Bot Kiosk and Plant Disease Detection Website to collaborative efforts in IoT and web development, each project is crafted to solve real-world problems and deliver impactful results. With a focus on scalability, user experience, and cutting-edge technology, these projects showcase my dedication to pushing boundaries and creating solutions that matter.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Developer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Content Writer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Python Developer</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Explore some of my blog articles and creative content on WordPress:</p>
                        <Row>
                          {
                            blogs.map((blog, index) => (
                              <Col key={index} sm={6} md={4}>
                                <div className="blog-card">
                                  <img src={blog.imgUrl} alt={blog.title} className="img-fluid" />
                                  <h5>{blog.title}</h5>
                                  <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary mt-2"
                                  >
                                    Click to See
                                  </a>
                                </div>
                              </Col>
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Check for the projects in web development, and more projects are on the way. Loading.....</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Decorative Shape"></img>
    </section>
  )
}
