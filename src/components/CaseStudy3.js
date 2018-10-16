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




let CaseStudy3 = ({ item }) => {
    console.log(item);
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <p>Dengue Fever is a major global public health concern — 40% of the world’s population is at risk for developing Dengue Fever (CDC 2014) and it is  estimated that there are 390 million new cases each year. Additionally, major widespread outbreaks are on the rise and are overwhelming medical and relief services. Thus, forecasting new outbreaks is a critical need for public health officials combating Dengue.</p>
                        <p>Because Dengue is transmitted by mosquitoes, there is a known relationship between climate and outbreaks . But how exactly and to what degree these different variables contribute to outbreaks is not as well known. The goal of this project is to build interactive visualizations to help understand the relationship between complex climate related variables and outbreaks in order to support the task of forecasting future outbreaks. </p>
                        <SubTitle>Users</SubTitle>
                        <p>The users of our interactive visualization would be policy makers, medical staff, relief workers, and researchers. Policy makers and relief workers would be interested in knowing if Dengue cases are on the rise so as to allocate more funding for efforts to combat infections. Researchers and medical staff are interested in better understanding how climate influences outbreaks in order to predict future incidents. Additionally, these individuals would be interested in understanding if there are regular temporal patterns in the outbreaks.</p>
                    </div>
                    <VertCenter>
                        <Img src={poster} />
                    </VertCenter>
                </GridBox>
                <GridBox>
                    <div>
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> August 2018 - Present</li>
                            <li><strong>The Team:</strong> James, Julia, Sijia {"&"} Bryan</li>
                            <li><strong>My Role:</strong> D3.js, Sketching, Low and High-Fidelity Protoype Design, Report Writing</li>
                        </ul>  
                    </div>
                    <div>
                        
                    </div>
                </GridBox>

                <SecTitle>Research {"&"} Results</SecTitle>

                <SubTitle>Exploratory Research</SubTitle>
                <p>We read through an extensive amount of literature related to dengue fever including  biological characteristics of the virus, mathematical models of its transmission in various countries, temporal and geographic transmission trends, and previous prevention efforts. In addition, I was able to conduct an interview with a CDC expert to gain an expert opinion on what insights the interactive data visualization should provide.</p>

                <SubTitle>Research Insights</SubTitle>
                <p>There are factors unrelated to climate that influence the transmission of dengue. These are human created factors and behaviors, such as rain-water collection, which serves as a breeding ground for mosquitos, or housing conditions, which can allow greater exposure to mosquitos.</p>

                <SecTitle>Design Process</SecTitle>
                
                <SubTitle>Brainstorming:</SubTitle>
                <GridBox>
                    <div>
                        <p>We met as a team for an ideation session where we individually came up with as many design ideas as possible that would address our goal in displaying the data. We went around the table and each of us presented our design concepts to each other. After going through all of our ideas, we discussed strengths and weaknesses of the designs and were able to merge some of our smaller design concepts into unified, more compelling ones. </p>
                        <p>Eventually we narrowed down our ideas into four distinct designs. We presented these ideas to other graduate students and faculty to get early feedback and help guide us in our choice of a design idea. </p>
                    </div>
                    <VertCenter>
                        <Img src={datavisBrainstorming} />
                    </VertCenter>
                </GridBox> 
                <br/>
                <br />
                <br />
                <GridBox>
                    <VertCenter>
                        <Img src={holisticView} />
                        <BTitle>Design Idea #1: Holistic View</BTitle>
                    </VertCenter>
                    <VertCenter>
                        <Img src={magnetView} />
                        <BTitle>Design Idea #2: Magnet</BTitle>
                    </VertCenter>
                </GridBox>  
                <br />
                <br />
                <GridBox>
                    <VertCenter>
                        <Img src={comparisonView} />
                        <BTitle>Design Idea #3: Comparison</BTitle>
                    </VertCenter>
                    <VertCenter>
                        <Img src={selectionView} />
                        <BTitle>Design Idea #4: Selection Window</BTitle>
                    </VertCenter>
                </GridBox>  

                <SecTitle>Next Steps</SecTitle>
                <p>We are currently working on bringing our final design to life using D3.js, a JavaScript framework for developing rich, interactive data-visualizations.</p>



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
    text-align:center;
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
