import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { resume } from '../db.json';
import ResumeBlock from './ResumeBlock';
import { media, Container, Container2 } from './Media';
import resumePDF from '../assets/JMcDowell_2018.pdf';

// import employment from '../assets/employment.svg';
// import education from '../assets/education.svg';
// import award from '../assets/award.svg';

let ResumeScreen = () =>
<div>
    <Container2 >
    <GridTop>
        <Button target="_blank" href={resumePDF}>
            <span>Download PDF</span>
        </Button>
    </GridTop>
    </Container2>
     <GridDesign>
        <Line>
        </Line>
       
        <TopContent >
            <Container > 
                <GridContainer>
                    {/* <ResumeTitle> James McDowell </ResumeTitle> */}
                    <div>
                        <ResumeBlock item={resume.experience}/>
                    </div>
                    <div>
                        <ResumeBlock item={resume.education} />
                    </div>
                    </GridContainer>
            </Container>
        </TopContent>
        <Line2>
        </Line2>
        <Line3>
        </Line3>
        <BottomContent>
            <Container2 vert >
                <GridContainer>
                    <div>
                        <ResumeBlock item={resume.projects} />
                        <ResumeBlock item={resume.awards} />
                    </div>
                    <div>
                        <ResumeBlock item={resume.skills} />
                    </div>
                </GridContainer>
            </Container2>
        </BottomContent>
            
        </GridDesign>    
</div>
export default ResumeScreen;

let GridDesign = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-template-rows: auto 50px auto;
    ${media.tablet`
    
    `}  
`;

let TopContent = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    ${media.tablet`
    margin-left: 4rem;
    `}  
`;
let BottomContent = styled.div`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    ${media.tablet`
    margin-left: 4rem;
    `}  

`;
let Line = styled.div`
    background-color: #1B67AB;
    padding-left: 2rem;
    grid-row: 1 / 4;
    grid-column: 1 / 2;
    ${media.tablet`
    margin-left: 4rem;
    `}  
`;
let Line2 = styled.div`
    background-color: white;
    grid-row: 2 / 3;
    grid-column: 1 / 3;
`;
let Line3 = styled.div`
    background-color: #C21717;
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    margin: 15px 0;
    height:20px;
`;

let GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    ${media.tablet`
    grid-template-columns: 6fr 4fr;
    grid-gap: 1em;
    `}  
`;

let GridTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

 

//  grid-template-areas: "experience education"
//                          "projects  skills"
//                          "awards  ";

