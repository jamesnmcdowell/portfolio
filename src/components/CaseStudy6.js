import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';

import llamaScreen from '../assets/llama-screenshot.jpg';
import llamaLogo from '../assets/llama.png';


let CaseStudy6 = ({ item }) => {
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <P>This is a simple ecommerce website that is built with React and Redux. It is dedicated to the beauty and awesomeness of Llamas. Feel free to browse through an awesome assortment of Llama paraphernalia. Add whatever you want to your cart and watch your bill rise.</P>
                        <br/>
                        <Button target="_blank" href="https://inspiring-poincare-dab459.netlify.com/">
                            <span>View Site</span>
                        </Button>
                    </div>
                    <VertCenter>
                        <Img src={llamaScreen} />
                    </VertCenter>
                </GridBox>
            </GridContainer>
        </Container>
    );
}

export default withRouteData(CaseStudy6);




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