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
          <Project>
            <ProjectImage src={process.env.PUBLIC_URL + '/path/to/project-image-1'} alt="Project 1" />
            <ProjectDetails>
              <ProjectTitle>Project 1</ProjectTitle>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo risus a cursus ultricies.
              </ProjectDescription>
            </ProjectDetails>
          </Project>
          <Project>
            <ProjectImage src={process.env.PUBLIC_URL + '/path/to/project-image-2'} alt="Project 2" />
            <ProjectDetails>
              <ProjectTitle>Project 2</ProjectTitle>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo risus a cursus ultricies.
              </ProjectDescription>
            </ProjectDetails>
          </Project>
          {/* Add more projects */}
        </ProjectsList>
      </div>
    </ProjectsSection>
  );
}

export default Projects;
