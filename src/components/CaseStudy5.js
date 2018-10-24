import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';
import ImageZoom from 'react-medium-image-zoom';

import foodstashSquare from '../assets/foodstash-title-square.png';
import foodstashWireframe from '../assets/foodstash-wireframe.JPG';

let CaseStudy5 = ({ item }) => {
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <P>Recipe sharing at present is a cumbersome and disconnected process, offering little visibility or potential for collaboration among amatuer cooks and chefs. There are a variety of ways that recipes are shared including through websites and blogs. Despite the prevalence of recipe sharing, there are currently no platforms designed with power users in mind that offer advanced features such as collaboration and version control. Foodstash’s goal is to provide people with a robust platform for recording, preserving, sharing, and collaborating on recipes.</P>
                        <SubTitle>Users</SubTitle>
                        <P>Kitchen power-users and cooking enthusiasts who enjoy collaboration, experimentation, and preservation of recipes. </P>

                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> April 2018</li>
                            <li><strong>The Team:</strong> James, Chris, {"&"} Robby</li>
                            <li><strong>My Role:</strong> Research, Design, Development</li>
                        </ul>
                    </div>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: foodstashSquare,
                                alt: 'foodstash mobile interface',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: foodstashSquare,
                                alt: 'foodstash mobile interface'
                            }}
                        />
                    </VertCenter>
                </GridBox>
                <SecTitle>Research {"&"} Results</SecTitle>
                <P>To get a better understanding of the current tools and means by which recipe sharing takes place online, I researched a variety of online recipe platforms and looked through cooking blogs. In order to develop a deeper understanding of the strengths and weaknesses of these platforms and understand how users interact with them, I interviewed a variety of individuals who enjoy cooking and often use online resources to locate recipes. Many people that I interviewed reported that blogs played a significant role in how they discovered new recipes and often shared them with other friends. People often curated a collection of blogs and recipes to preserve their favorite ones through a variety of ways. In addition, my research also found that people typically made slight modifications of their favorite recipes over time. </P>
            
                <SecTitle>Design</SecTitle>

                <P>Based on my research, I identified a compelling opportunity that was lacking in other platforms— a version control system for recipes. This system for would enable people to freely experiment with both collaboratively and alone while preserving previous iterations.</P> 

                                
                <GridBox>
                    <div>
                        <BTitle>I came up with a series of core tasks that users in the platform should be able to achieve.</BTitle>

                        <ul>
                            <li>Add recipes to recipe database</li>
                            <li>Search for recipes by name, category, and required ingredients</li>
                            <li>Rate recipes</li>
                            <li>Make derived version of recipes within recipe page to iterate on an existing recipe</li>
                            <li>Select and view previous iteration of a recipe</li>
                            <li>Select two iterations of a recipes and select compare to view a summary of the differences between the recipes</li>
                            <li>Create and add recipes to a virtual cookbook</li>
                        </ul>
                        <P>Following this I made a series of wireframes to plot out the various screens and their relationships that would exist within the platform.</P>
                    </div>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: foodstashWireframe,
                                alt: 'foodstash wireframe',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: foodstashWireframe,
                                alt: 'foodstash wireframe'
                            }}
                        />
                    </VertCenter>
                </GridBox>

                <SecTitle>Implementation</SecTitle>
                <P> I created the application in a fairly short time-frame (~ 1 week) using React.</P> 
                    
                <BTitle> The following are the technologies powering the application. </BTitle> 

                <ul>
                    <li>State management with Redux</li>
                    <li>Authentication using JSON web tokens and bcrypt</li>
                    <li>Client-side routing with React Router</li>
                    <li>Responsive mobile-first CSS Grid/ Flexbox Layout</li>
                </ul>


            </GridContainer>
        </Container>
    );
}

export default withRouteData(CaseStudy5);




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
    font-size:3.2rem;
    ${media.phone`
    font-size:3.5rem;
    `}
    ${media.bigPhone`
    font-size:3.7rem;
    `}
     ${media.tablet`
    font-size:3.9rem;
    `}
`;
let SecTitle = styled.h2`
    border-bottom: 4px #C21717 solid;
    font-size:2.5rem;
    ${media.phone`
    font-size:2.8rem;
    `}
    ${media.bigPhone`
    font-size:3rem;
    `}
     ${media.tablet`
    font-size:3.2rem;
    `}
    
`;
let SubTitle = styled.h3`
    font-weight: 600;
    font-size:2rem;
    ${media.phone`
    font-size:2.3rem;
    `}
    ${media.bigPhone`
    font-size:2.5rem;
    `}
     ${media.tablet`
    font-size:2.7rem;
    `}
   
`;
