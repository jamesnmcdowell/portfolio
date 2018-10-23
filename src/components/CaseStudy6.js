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
    console.log(item);
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
let Button = styled.a`
    font-size: 16px;
    font-weight: 600;
    border: 5px solid #1B67AB;
    padding: 1rem;
    text-transform:uppercase;
    &:hover {
        background-color: #1B67AB;
        color: white;
    }
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
    ${media.tablet`
    font-size: 60px; 
    `}  
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
