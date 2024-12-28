import React from 'react';
import styled from 'styled-components';

import javaIcon from '../assets/java-svgrepo-com.svg';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html-5-svgrepo-com.svg';
import cssIcon from '../assets/css-3-svgrepo-com.svg';
import jsIcon from '../assets/js-svgrepo-com.svg';
import mysqlIcon from '../assets/sql-server-icon-png-11359.png';
import kotlinIcon from '../assets/kotlin.svg'; 
import firebaseIcon from '../assets/firebase.svg'; 
import reactIcon from '../assets/react.svg';
import postmanIcon from '../assets/postman.svg';

const TechStackSection = styled.section`
  background-color: #000000;
  padding: 100px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #03fffb;
`;

const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const TechItem = styled.div`
  width: 200px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #040303;
  border-radius: 4px;
  background-color: #060606;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TechIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const TechName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #20d62f;
`;

const TechProgress = styled.div`
  height: 10px;
  background-color: #ddd;
  border-radius: 4px;
`;

const TechBar = styled.div`
  height: 100%;
  background-color: #00af91;
  border-radius: 4px;
  transition: width 0.3s ease;
  width: ${({ progress }) => progress}%;
`;

function TechStack() {
  return (
    <TechStackSection id="skills">
      <div className="container">
        <SectionTitle>Tech Stack</SectionTitle>
        <TechStackList>
          <TechItem>
            <TechIcon src={javaIcon} alt="Java" />
            <TechName>Java</TechName>
            <TechProgress>
              <TechBar progress={90}></TechBar>
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={pythonIcon} alt="Python" />
            <TechName>Python</TechName>
            <TechProgress>
              <TechBar progress={60}></TechBar>
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={htmlIcon} alt="HTML" />
            <TechName>HTML</TechName>
            <TechProgress>
              <TechBar progress={80}></TechBar>
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={cssIcon} alt="CSS" />
            <TechName>CSS</TechName>
            <TechProgress>
              <TechBar progress={80}></TechBar>
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={jsIcon} alt="JavaScript" />
            <TechName>JavaScript</TechName>
            <TechProgress>
              <TechBar progress={50}></TechBar>
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={mysqlIcon} alt="MySQL" />
            <TechName>MySQL</TechName>
            <TechProgress>
              <TechBar progress={75}></TechBar>
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={kotlinIcon} alt="Kotlin" />
            <TechName>Kotlin</TechName>
            <TechProgress>
              <TechBar progress={70}></TechBar> {/* Adjust the progress */}
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={firebaseIcon} alt="Firebase" />
            <TechName>Firebase</TechName>
            <TechProgress>
              <TechBar progress={80}></TechBar> {/* Adjust the progress */}
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={reactIcon} alt="React" />
            <TechName>React</TechName>
            <TechProgress>
              <TechBar progress={50}></TechBar> {/* Adjust the progress */}
            </TechProgress>
          </TechItem>
          <TechItem>
            <TechIcon src={postmanIcon} alt="Postman" />
            <TechName>Postman</TechName>
            <TechProgress>
              <TechBar progress={70}></TechBar> {/* Adjust the progress */}
            </TechProgress>
          </TechItem>
        </TechStackList>
      </div>
    </TechStackSection>
  );
}

export default TechStack;
