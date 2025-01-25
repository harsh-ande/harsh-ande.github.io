import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }
  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 540px;
  }
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hey there! My name is</h1>;
  const two = <h2 className="big-heading">Harsh Vardhan Ande</h2>;
  const three = <h3 className="medium-heading">Software Engineer | B.E. CS | M.S. in SE (ongoing)</h3>;
  const four = (
    <>
      <p>
        <b>Glad to e-meet you!</b>
      </p>

      <p>
        I'm an alumnus of {' '} <a href="https://www.bits-pilani.ac.in/goa/">
        BITS Pilani Goa</a> {' '} with 4+ years of experience working at {' '} <a href="https://www.flipkart.com/">Flipkart</a>{' '}. I'm currently pursuing my master's degree in Software Engineering at {' '}
        <a href="https://www.sjsu.edu/">San Jose State University</a>.
      </p>


      {/*<p>*/}
      {/*  When not decoding the customer journey, you can find me sketching on {' '}*/}
      {/*  <a href="https://pin.it/4W1Rxtj">Pinterest</a> {' '} or writing technical blogs for {' '}*/}
      {/*  <a href="https://www.lambdatest.com">LambdaTest</a> {' '} and other freelance clients.*/}
      {/*</p>*/}
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://drive.google.com/drive/folders/19_Zu-qe_q8Iszy6fpWRScSkCD7T4LEWO?usp=sharing"
      target="_blank"
      rel="noreferrer">
      Check out my work samples!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
