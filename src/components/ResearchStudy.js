import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container } from './Media';
// import jamesProfile from '../assets/profilecropnormfinaltransp.png';
import gatechLogo from '../assets/gatechlogo.png';

let AboutScreen = () =>
    <Container vert>
        <Text>November 16, 2019</Text>
        <GridContainer>
            <div>
                <Title>Recruitment for Research Project </Title>
                <Text>Hi my name is James McDowell and I am a master’s student studying Human-Computer Interaction at Georgia Tech. If you are an older adult who is aging in place, or you care for one, I would greatly appreciate your help.</Text>
            </div>
            <Img src={gatechLogo} />
          
        </GridContainer>
        <Text>I am currently working on my thesis that explores how the use of communication technology impacts the relationship between older adults who are aging in place and their caregiver(s). The goal is to identify gaps or opportunities where technology could be better designed to improve the quality of communication and relationships between these individuals. </Text>
        <Text>I am looking to recruit participants from two groups: older adults who are aging in place and their caregiver(s). For each of the groups there is both a survey and interview. Research for both groups will be conducted separately. The survey should take no more than 8-10 minutes and the interview should last no more than 45 minutes.</Text>
        <Text>If you are interested in participating but are unable to commit the time to participate in both the survey and the interview, you are more than welcome to participate solely in the survey, which can be completed online or can be mailed to you as a paper survey with return postage included. </Text>
        <Text>I am looking to set up interviews and send out surveys ASAP so feel free to reach out to me if you are interested in participating or have any questions. Thanks!</Text>
        <Text>email: jamesmcdowell@gatech.edu <br/> cell: 770-609-5080</Text>
        <div>
        </div>
    </Container>

export default AboutScreen;

let GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 2rem;
  ${media.tablet`
    grid-template-columns: 4fr 1fr;
  `}

`;
let Title = styled.h3`
  font-size: 2.5rem; 
  color:#1B69AB;
  margin-bottom: 0;
  text-transform: uppercase;
  margin-top: 2rem;;
  &:first-child {
    margin-top: 0;
  }

`;
let Text = styled.p`
  font-size: 1.7rem; 
`;
let Img = styled.img`
  width: 100%; 
`;
let A = styled.a`
border-bottom: 3px solid #F1E639 ;
`;