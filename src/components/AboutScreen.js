import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container } from './Media';
import jamesProfile from '../assets/james-profile.jpg';

let AboutScreen = () =>
  <Container vert>
    <GridContainer>
      <img src={jamesProfile} />
      <div>
        <p>
          hi welcome to my site
        </p>
      </div>
    </GridContainer>
  </Container>

export default AboutScreen;

let GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    ${media.tablet`
    grid-template-columns: 6fr 4fr;
    grid-gap: 1em;
    `}  
`;