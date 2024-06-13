import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSkillsSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 5fr;
    grid-gap: 80px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(6, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      //font-family: var(--font-mono);
      //font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        //font-size: var(--fz-sm);
        //line-height: 12px;
      }
    }
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const languageSkills = ['C', 'C++', 'Go', 'Python', 'Bash', 'Java', 'JavaScript', 'NodeJS', 'React', 'HTML', 'CSS', 'GraphQL'];
  const frameworks = ['gRPC', 'Django', 'Spring Boot', 'Nginx', 'Angular', 'Helm', 'Junit']
  const dataStorage = ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'etcd', 'Zookeeper', 'TiDB', 'Ceph', 'RabbitMQ', 'Kafka']
  const tools = ['Ansible', 'Jenkins', 'GitHub Actions', 'Git', 'Jira', 'Prometheus', 'Grafana']
  const cloud = ['AWS', 'GCP', 'Linux', 'Docker', 'Kubernetes', 'Salt stack']
  const concepts = ['Object Oriented Design', 'Data Modelling', 'Application development', 'MVC', 'Agile', 'Scrum', 'QA', 'REST']
  const softSkills = ['Problem solver', 'Adaptive', 'Creative', 'Proactive', 'Detail oriented', 'Team player', 'Ownership', 'Analytical']

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Technical Skills</h2>

      <div className="inner">
        <StyledText>
          <div>
            <b>
              <p>Languages</p>
            </b>
          </div>
          <ul className="skills-list">
            {languageSkills && languageSkills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <br/>
          <div>
            <b>
              <p>Frameworks</p>
            </b>
          </div>
          <ul className="skills-list">
            {frameworks && frameworks.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <br/>
          <div>
            <b>
              <p>Data Storage</p>
            </b>
          </div>
          <ul className="skills-list">
            {dataStorage && dataStorage.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <br/>
          <div>
            <b>
              <p>Automation, Version Control & Tools</p>
            </b>
          </div>
          <ul className="skills-list">
            {tools && tools.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <br/>
          <div>
            <b>
              <p>Cloud & Container Orchestration</p>
            </b>
          </div>
          <ul className="skills-list">
            {cloud && cloud.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          {/*<br/>*/}
          {/*<div>*/}
          {/*  <p>Concepts</p>*/}
          {/*</div>*/}
          {/*<ul className="skills-list">*/}
          {/*  {concepts && concepts.map((skill, i) => <li key={i}>{skill}</li>)}*/}
          {/*</ul>*/}
          {/*<br/>*/}
          {/*<div>*/}
          {/*  <p>Soft Skills</p>*/}
          {/*</div>*/}
          {/*<ul className="skills-list">*/}
          {/*  {softSkills && softSkills.map((skill, i) => <li key={i}>{skill}</li>)}*/}
          {/*</ul>*/}
        </StyledText>

      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
