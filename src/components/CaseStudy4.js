import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';

import schlotzkysLogo from '../assets/schlotzkys-title-narrow.png';
import holisticView from '../assets/holistic-view.png';
import selectionView from '../assets/selection-view.png';
import comparisonView from '../assets/comparison-view.png';
import magnetView from '../assets/magnet-view.png';
import datavisBrainstorming from '../assets/dataviz-brainstorming-crop.jpg';
import poster from '../assets/poster.jpg';
import farmfreshNarrow from '../assets/farmfresh-title.jpg';
import farmfreshWireframe from '../assets/farmfresh-wireframe2.jpg';


let CaseStudy4 = ({ item }) => {
    console.log(item);
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <P>Often smaller farms do not have the resources to sell their products to a larger audience. It is expensive and complicated to build and maintain a sophisticated platform for connecting with customers to sell their products. There are of course a variety of avenues for farmers to reach consumers such as seasonal farmers markets but their location and frequency is highly variable. <strong>The goal is to empower local farmers to connect directly with customers on their own terms.</strong></P>
                        <P>This project was inspired by from my personal experiences. I had been buying unpasteurized milk and other hard to find products from a local farm for quite some time and began to really value having access to unique products from a local farm rather than solely being dependent on traditional retail grocery chains or farmers markets. The farm that I purchase from has a mobile trailer which is parked multiple times throughout the week at different locations during regular time slots  in order to reach a wide variety of customers. The goal of this project is to create a platform to enable this coordination between local farmers and customers that is both extremely easy to operate and free for farmers. </P>
                        <SubTitle>Users</SubTitle>
                        <P>The target user group is local farmers interested in reaching more customers and customers who are interested in buying from local farms.</P>
                    </div>
                    <div>
                        <Img src={farmfreshNarrow} />                
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> May 2018 </li>
                            <li><strong>The Team:</strong> James {"&"} Chris</li>
                            <li><strong>My Role:</strong> Design, Development</li>
                        </ul>
                    </div>
                </GridBox>
                <SecTitle>Research {"&"} Results</SecTitle>

                <SubTitle>Exploratory Research</SubTitle>
                <P>To get a better understanding of the local farmers user group, I extensively searched through websites of smaller farmers to research into how they currently were selling their products to consumers. There were a variety of existing ways but there I couldn’t find any platform that would enable a farmer to register to easily have a means for connecting with and potential customers nearby. I spoke with several farmers in the form of unstructured interviews so simply get a understanding of their needs and how my platform could best serve them.</P>

                <SecTitle>Design</SecTitle>

                <GridBox>
                    <div>
                        <P>Based on my research collected from conducting a competitive analysis and conversations with local farmers, I came up with a series of core tasks that the platform should be able to achieve.</P>
                        <ul>
                            <li>Customers can use predictive search bar to query for products</li>
                            <li>Customers can search for products based on category filtering</li>
                            <li>Customers search results return closest location to them</li>
                            <li>Vendors can create a homepage to display their information</li>
                            <li>Vendors can add both products and selling locations to database</li>
                        </ul>
                        <P>Following this I made a series of wireframes to plot out the various screens and their relationships that would exist within the platform.</P>
                    </div>
                    <VertCenter>
                        <Img src={farmfreshWireframe} />
                    </VertCenter>
                </GridBox>  
                <SecTitle>Implementation</SecTitle>
                <P>I created the application in a fairly short time-frame (~ 1 week) using React.  I wanted to challenge myself to become familiar with newer technologies so I specifically choose build my node server with Koa.js rather than Express.js and  GraphQl rather than REST.</P>
                <BTitle>The following are the technologies powering the application:</BTitle>
                <ul>
                    <li>Client-side routing with React Router</li>
                    <li>Authentication using JSON web tokens and bcrypt</li>
                    <li>GraphQL server that enables sophisticated client-side querying</li>
                    <li>State management with Redux</li>
                    <li>Responsive mobile-first CSS Grid/ Flexbox Layout</li>
                </ul>

            </GridContainer>
        </Container>
    );
}

export default withRouteData(CaseStudy4);




let GridContainer = styled.div`
    
`;

let BTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
`;
let P = styled.p`
    font-size: 1.7rem;
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
