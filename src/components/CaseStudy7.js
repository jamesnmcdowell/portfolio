import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';

import tot from '../assets/tot_billboard.jpg';
import brandmark from '../assets/logo-concepts-c.jpg';


let CaseStudy7 = ({ item }) => {
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <P>During the course of several months, I iteratively designed branding guidelines for a Toll of Tech — a nonprofit concept that critically examines technology's role in our lives. The following are the steps that were taken during this process:</P>
                        <ol>
                            <li>Initial branding research and development of business model canvas</li>
                            <li>Identification of basic organizational identity elements and touchpoints</li>
                            <li>Logo design as well as choice of color, imagery, and typography</li>
                            <li>Compilation of branding guidelines and design of polished real-life touchpoints</li>
                        </ol>
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> January 2019 - April 2020</li>
                            <li><strong>My Role:</strong> solo project — all work was done independently </li>
                        </ul>
                        
                       
                    </div>
                    <div>
                    <br/>
                    <VertCenter>
                        <Img src={tot} />
                    </VertCenter>
                    <Center>
                        <br/>
                        <br/>
                        <Button target="_blank" href="/static/McDowell_Toll-of-Tech_comp.pdf">
                            <span>View Brand Guidelines</span>
                        </Button>
                    </Center>
                        </div>
                </GridBox>

                
                <SecTitle>Brandmark iteration </SecTitle>
                <GridBox>
                    <div>
                        <P>
                            A goal behind the design of the brandmark was to incorporate initials that makeup the name Toll of Tech — tot. As you can see, a number of design concepts for the logo were developed but the logo in the bottom right is what eventually became the final version. In this version, the initials are arranged in such a way that represents an image of a human being. This is important to the brand because it emphasizes the importance of humanity and people in relation to the brand. The logo can positioned side-by-side the same logo in a grid-like way to represent community and unity among people.
                        </P>  
                    </div>
                    <VertCenter>
                        <Img src={brandmark} />
                    </VertCenter>
                  
                </GridBox>

            </GridContainer>
        </Container>
    );
}

export default withRouteData(CaseStudy7);




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

let Center = styled.div`
    text-align: center;
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