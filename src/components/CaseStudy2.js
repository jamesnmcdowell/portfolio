import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';

import schlotzkysLogo from '../assets/schlotzkys-title-narrow.png';



let CaseStudy = ({ item }) => {
    console.log(item);
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <p>The problem area of focus is making Schlotzsky’s online ordering platform more accessible to a wide range of users,  including those with vision impairments, and integrating the design within their main website. This project is in collaboration with Focus Brands, the parent company of Schlotzsky’s.</p>

                        <SubTitle>Users</SubTitle>
                        <p>The target user is anyone who is interested in ordering Schlotzsky's online through a desktop or mobile interface.</p>
                    </div>
                    <div>
                        <Img src={schlotzkysLogo} />
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> August 2018 - Present</li>
                            <li><strong>The Team:</strong> James, Rishma, Shubhangi {"&"} Tanuja</li>
                            <li><strong>My Role:</strong> Inteviewing, Sketching, Low and High-Fidelity Protoype Design, Report Writing</li>
                        </ul>
                    </div>
                </GridBox>

                <SecTitle>Research {"&"} Results</SecTitle>

                <SubTitle>Exploratory Research</SubTitle>
                <p>Due to the fact that this project is in collaboration with Focus Brands, we have access to some of Schlotzsky’s user data. This helped up to understand the user base and crafting personas.  We extensively researched the Web Content Accessibility Guidelines (WCAG 2.1). These standards included specifications relating to color, contrast, fonts, text, size, ease of use, information flow, structure, and position. We completed a competitive analysis with other products in the market as well as products which are not in direct competition but share similarities with our product. We performed a thorough task analysis to understand the task flow and information flow of the ordering platform.</p>

                <SubTitle>Observations:</SubTitle>
                <p>Based on the task analysis of the current online ordering platform and WCAG guidelines, we designed observation studies. We are currently in the process of collecting data through recording observations of users’ screens and faces as they navigate the ordering process. We will use the thinking-aloud method to capture users’ thoughts throughout the process and follow up each observation session with several predefined questions. In addition, we also plan to conduct a number of eye-tracking observation sessions for a limited number of additional participants that will give us a more granular understanding of the online ordering process, including any unexpected pain points. </p>

                <SecTitle>Next Steps</SecTitle>
                <p>Equipped with the data collected through our research, we will iteratively design and prototype Schlotzsky’s online ordering platform. We will then perform evaluative testing with the new online platform and compare the results with the initial platform to evaluate relative performance.  In addition to automated accessibility testing, we intend to reach out to several users with vision impairments in order to test usability of the new, accessible ordering platform.</p>

            </GridContainer>
        </Container>
    );
}

export default withRouteData(CaseStudy);




let GridContainer = styled.div`
    
`;

let BTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
`;


let Img = styled.img`
    width: 100%;
`;
let GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1.5em;
`;
let VertCenter = styled.div`
    display: grid;
    align-items: center;
`;
let MainTitle = styled.h1`
    font-size: 60px; 
`;
let SecTitle = styled.h2`
    font-size: 40px;
    border-bottom: 4px #C21717 solid;
`;
let SubTitle = styled.h3`
    font-size: 25px;
    font-weight: 600;
   
`;
let BlueLine = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1B67AB;
    grid-column: 2 / 3

`;

//    border: 4px #F2E818 solid;
//     border: 4px #1B67AB  solid;
//     border-bottom: 4px #C21717 solid;
//     border-right: 4px #C21717 solid;
