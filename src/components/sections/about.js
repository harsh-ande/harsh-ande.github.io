import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 600px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Market Research', 'Data Analysis', 'Brand Management', 'Digital Marketing',
  'SPSS', 'Tableau', 'MS Office', 'Python'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I enjoy coding and have a strong fondness for solving technically challenging problems. I believe innovation often stems from the simplest of ideas, and hence I always strive for simplicity and elegance in all my solutions.
            </p>
            <p>
              I did my undergraduate in Computer Science from the esteemed {' '} <a href="https://www.bits-pilani.ac.in/goa/">
              BITS Pilani Goa</a> {' '} in 2019, and developed a keen fascination for subjects like Systems, Databases, Machine Learning and Theoretical Computer Science. During my undergraduate studies, I also completed 2 internships at {' '} <a href="https://www.jio.com/">Reliance Jio</a> {' '} and {' '} <a href="https://www.dbs.com/in/index/default.page">Development Bank of Singapore</a> {' '} for a duration of 6 and 2 months respectively.
            </p>
            <p>
              After graduation, I worked at {' '} <a href="https://www.flipkart.com/">Flipkart</a>{' '} for 4.5 years in the Cloud Platform Engineering team. Among my most notable contributions, I automated operations such as hotstandby promotion, version upgrades, config param updates in MySQL database clusters, resulting in a saving of 400 man-hours weekly across 200+ teams in the organization.
            </p>
            {/*<p>*/}
            {/*  I'm currently in my second semester */}
            {/*</p>*/}
            <p>
            Outside academics and work, I like to read books, listen to podcasts, play the guitar, and cook. Few of my favourite books are Power of Now, Psychology of Money, and The Silent Patient.
            </p>

          </div>

        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={1000}
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
