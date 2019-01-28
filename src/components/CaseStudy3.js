import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';
import ImageZoom from 'react-medium-image-zoom';

import schlotzkysLogo from '../assets/schlotzkys-title-narrow.png';
import holisticView from '../assets/holistic-view.png';
import selectionView from '../assets/selection-view.png';
import comparisonView from '../assets/comparison-view.png';
import magnetView from '../assets/magnet-view.png';
import datavisBrainstorming from '../assets/dataviz-brainstorming-crop.jpg';
import poster from '../assets/finalmockup-dengue.jpg';
import dengueFinal from '../assets/dengue-final.jpg';
import dengueFinal2 from '../assets/dengue-final2.jpg';




let CaseStudy3 = ({ item }) => {
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <P>Dengue Fever is a major global public health concern — 40% of the world’s population is at risk for developing Dengue Fever (CDC 2014) and it is  estimated that there are 390 million new cases each year. Additionally, major widespread outbreaks are on the rise and are overwhelming medical and relief services. Thus, forecasting new outbreaks is a critical need for public health officials combating Dengue.</P>
                        <P>Because Dengue is transmitted by mosquitoes, there is a known relationship between climate and outbreaks . But how exactly and to what degree these different variables contribute to outbreaks is not as well known. The goal of this project is to build interactive visualizations to help understand the relationship between complex climate related variables and outbreaks in order to support the task of forecasting future outbreaks. </P>
                    </div>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: dengueFinal2,
                                alt: 'poster presentation of designs',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: dengueFinal2,
                                alt: 'poster presentation of designs'
                            }}
                        />
                        <Center>
                            <Button target="_blank" href="https://infovis-denguefever.netlify.com/">
                                <span>View Site</span>
                            </Button>
                        </Center>
                    </VertCenter>
                </GridBox>
                <GridBox>
                    <div>
                        <SubTitle>Users</SubTitle>
                        <P>The users of our interactive visualization would be policy makers, medical staff, relief workers, and researchers. Policy makers and relief workers would be interested in knowing if Dengue cases are on the rise so as to allocate more funding for efforts to combat infections. Researchers and medical staff are interested in better understanding how climate influences outbreaks in order to predict future incidents. Additionally, these individuals would be interested in understanding if there are regular temporal patterns in the outbreaks.</P>
                    </div>
                    <div>
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> August 2018 - Present</li>
                            <li><strong>The Team:</strong> James, Julia, Sijia {"&"} Bryan</li>
                            <li><strong>My Role:</strong> D3.js, Sketching, Low and High-Fidelity Protoype Design, Report Writing</li>
                        </ul>
                    </div>
                </GridBox>

                <SecTitle>Research {"&"} Results</SecTitle>

                <SubTitle>Exploratory Research</SubTitle>
                <P>We read through an extensive amount of literature related to dengue fever including  biological characteristics of the virus, mathematical models of its transmission in various countries, temporal and geographic transmission trends, and previous prevention efforts. In addition, I was able to conduct an interview with a CDC expert to gain an expert opinion on what insights the interactive data visualization should provide.</P>

                <SubTitle>Research Insights</SubTitle>
                <P>There are factors unrelated to climate that influence the transmission of dengue. These are human created factors and behaviors, such as rain-water collection, which serves as a breeding ground for mosquitos, or housing conditions, which can allow greater exposure to mosquitos.</P>

                <SecTitle>Design Process</SecTitle>
                
                <SubTitle>Brainstorming</SubTitle>
                <GridBox>
                    <div>
                        <P>We met as a team for an ideation session where we individually came up with as many design ideas as possible that would address our goal in displaying the data. We went around the table and each of us presented our design concepts to each other. After going through all of our ideas, we discussed strengths and weaknesses of the designs and were able to merge some of our smaller design concepts into unified, more compelling ones. </P>
                        <P>Eventually we narrowed down our ideas into four distinct designs. We presented these ideas to other graduate students and faculty to get early feedback and help guide us in our choice of a design idea. </P>
                    </div>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: datavisBrainstorming,
                                alt: 'brainstorming session for designs',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: datavisBrainstorming,
                                alt: 'brainstorming session for designs'
                            }}
                        />
                    </VertCenter>
                </GridBox> 
                <br/>
                <br />
                <br />
                <GridBox>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: holisticView,
                                alt: 'holistic view visualization',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: holisticView,
                                alt: 'holistic view visualization'
                            }}
                        />
                        <BTitle>Design Idea #1: Holistic View</BTitle>
                    </VertCenter>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: magnetView,
                                alt: 'magnet view visualization',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: magnetView,
                                alt: 'magnet view visualization'
                            }}
                        />
                        <BTitle>Design Idea #2: Magnet</BTitle>
                    </VertCenter>
                </GridBox>  
                <br />
                <br />
                <GridBox>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: comparisonView,
                                alt: 'comparison view visualization',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: comparisonView,
                                alt: 'comparison view visualization'
                            }}
                        />
                        <BTitle>Design Idea #3: Comparison</BTitle>
                    </VertCenter>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: selectionView,
                                alt: 'selection view visualization',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: selectionView,
                                alt: 'selection view visualization'
                            }}
                        />
                        <BTitle>Design Idea #4: Selection Window</BTitle>
                    </VertCenter>
                </GridBox>  

                <SecTitle>Final Design</SecTitle>
                <GridBox>
                    <div>
                        <P>Inspired by visual analytics systems, our tool gives users a way to manipulate the clusters of outbreaks and uncover the importance of certain aspects of the data. Additionally, through the use of tooltips and side panels, users can dig into the data to see the fine-grain details and form conclusions.   </P>
                        <P> Take a look at the walkthrough of the visualization on the right to learn more. </P>
                    </div>
                    <div>
                        <Frame>
                            <iframe
                                src={`https://player.vimeo.com/video/313723577?title=0&byline=0&portrait=0`}
                                allowFullScreen="true"
                                webkitallowfullscreen="true"
                                mozallowfullscreen="true"
                            />
                        </Frame>
                    </div>
                </GridBox>

                


            </GridContainer>
        </Container>
    );
}

export default withRouteData(CaseStudy3);




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

let Center = styled.div`
    text-align: center;
`;

let Button = styled.a`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border: 5px solid #1B67AB;
    padding: 1rem;
    &:hover {
        background-color: #1B67AB;
        color: white;
    }
    span {
        text-transform: uppercase;
    }
`;

let Frame = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding-bottom: 58%;
    iframe {
        width: 100%;
        min-height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
        
    }
`;