import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://example.com/project1", // Add a link property to each project object
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://example.com/project2", // Add a link property to each project object
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://example.com/project3", // Add a link property to each project object
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://example.com/project4", // Add a link property to each project object
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://example.com/project5", // Add a link property to each project object
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://example.com/project6", // Add a link property to each project object
    },
  ];

  // Return the JSX for the Projects component
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* Render the TrackVisibility component */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Welcome to my Projects section! Here, you'll discover a
                    showcase of my main project, Quotes Corner, alongside a
                    collection of other projects highlighting my expertise in
                    UI/UX design. Dive into the world of innovative designs and
                    captivating user experiences crafted by me.
                  </p>
                  {/* Render the Tab.Container component */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* Render the Nav.Item and Nav.Link components */}
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    {/* Render the Tab.Content component */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* Render the Tab.Pane components */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {/* Render the ProjectCard component for each project */}
                          {projects.map((project, index) => {
                            return (
                              <a
                                key={index}
                                href={project.link} // Add a link to each ProjectCard
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ProjectCard {...project} />
                              </a>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Explore the Projects section to discover a range of
                          exciting tabs showcasing my work. While one tab
                          currently has no projects, the other tabs highlight my
                          expertise in UI/UX design and development. Stay tuned
                          for updates and new projects coming soon!
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Explore the Projects section to discover a range of
                          exciting tabs showcasing my work. While one tab
                          currently has no projects, the other tabs highlight my
                          expertise in UI/UX design and development. Stay tuned
                          for updates and new projects coming soon!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
