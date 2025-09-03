import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  background-color: #000;
  padding: 100px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #03fffb;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  margin-bottom: 50px;
`;

const Project = styled.div`
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectDetails = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #07d20d;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>
        <ProjectsList>
          {/* Budget Management project card */}
          <Project>
            <ProjectImage
              src={process.env.PUBLIC_URL + '/assets/budget-management.png'}
              alt="Budget Management"
              loading="lazy"
            />
            <ProjectDetails>
              <ProjectTitle>Budget Management</ProjectTitle>
              <ProjectDescription>
                Spring Boot web app for creating budget categories, tracking allocations,
                transactions, and visualizing spending in an interactive dashboard.
              </ProjectDescription>
              <a
                href="https://github.com/Mandip77/Budget_Management"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </ProjectDetails>
          </Project>

          {/* Simple Text Editor project card */}
          <Project>
            <ProjectImage
              src={process.env.PUBLIC_URL + '/assets/text-editor-demo.gif'}
              alt="Text Editor Demo"
              loading="lazy"
            />
            <ProjectDetails>
              <ProjectTitle>Simple Text Editor</ProjectTitle>
              <ProjectDescription>
                Lightweight Java Swing text editor with open/save, cut/copy/paste and
                custom formatting.
              </ProjectDescription>
              <a
                href="https://github.com/Mandip77/Simple-TextEditor-Java"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </ProjectDetails>
          </Project>
        </ProjectsList>
      </div>
    </ProjectsSection>
  );
}

export default Projects;
