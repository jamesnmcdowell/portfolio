import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';
import ImageZoom from 'react-medium-image-zoom';

import schlotzkysLogo from '../assets/schlotzkys-title-narrow.png';
import taskAnalysis from '../assets/TA_final.png';
import affinityWall from '../assets/affinity-wall-r2.jpg';
import treeTest from '../assets/tree-test-chart.jpg';
import personaAlex from '../assets/Persona-Alex.jpg';
import personaOlivia from '../assets/Persona-Olivia.jpg';
import journeyAlex from '../assets/userjourney-alex.jpg';
import journeyOlivia from '../assets/userjourney-olivia.jpg';


let CaseStudy2 = ({ item }) => {
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <P>The problem area of focus is making Schlotzsky’s online ordering platform more accessible to a wide range of users,  including those with vision impairments, and integrating the design within their main website. This project is in collaboration with Focus Brands, the parent company of Schlotzsky’s.</P>

                        <SubTitle>Users</SubTitle>
                        <P>The target user is anyone who is interested in ordering Schlotzsky's online through a desktop or mobile interface.</P>
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
                <P>Due to the fact that this project is in collaboration with Focus Brands, we have access to some of Schlotzsky’s user data. This helped up to understand the user base and crafting personas.  We extensively researched the Web Content Accessibility Guidelines (WCAG 2.1). These standards included specifications relating to color, contrast, fonts, text, size, ease of use, information flow, structure, and position. We completed a competitive analysis with other products in the market as well as products which are not in direct competition but share similarities with our product. We performed a thorough task analysis to understand the task flow and information flow of the ordering platform.</P>

                <SubTitle>Task Analysis</SubTitle>
                <P>We conducted task analysis to understand users’ goals when they are ordering from the Schlotzsky’s website and how they are able to complete their goal on the site. Conducting task analysis also allowed us to catch navigational issues on the website and understand the navigation process at a more granular level. Performing a task analysis provided us with a baseline for the interactions with the system which helped inform our interview questions and direction with further research methods. </P>
                <ImageZoom
                    image={{
                        src: taskAnalysis,
                        alt: 'task analysis map',
                        style: { width: '100%' }
                    }}
                    zoomImage={{
                        src: taskAnalysis,
                        alt: 'task analysis map'
                    }}
                />
                <SubTitle>Cognitive Walkthrough</SubTitle>
                <P>Our goal for performing a cognitive walkthrough was to understand the user’s expectations and information needs while ordering online from Schlotzsky’s. Although we conducted a task analysis to analyze the steps a user would to take to complete a task, we chose to conduct a cognitive walkthrough as well because the process gives us an understanding of the of user’s expectations throughout the navigation of the website.  </P>

                <SubTitle>Interviewing / Think Aloud Testing</SubTitle>
                <P>The goal of this user research method was to get insights into Schlotzsky's online ordering process. We wanted to understand  strengths and weaknesses within its interface from the perspective of a consumer. We also were interested in examining if different aspects of the interface that seemed problematic to us based on our task analysis led to issues for all of our participants or specific subset of users. In addition, we asked more general questions about users’ online ordering preferences and habits to help us develop a baseline to understand their experience with and perception of online ordering platforms in general.  </P>
                <P>Interviewing was chosen as way to gather rich qualitative data relating to understanding the usability and perceptions of Schlotzsky's current online ordering. This method enables us to elicit specific information that may otherwise not be collected from a method such as observation. It also enables us to get a baseline of data collected for all users that can be used to compare and groups users into categories during analysis. We decided to pair Interviewing with think aloud testing to  help fill in the gap of what the users experience throughout the ordering process. Think aloud testing is excellent for capturing intentions and reasoning as users  goes through the ordering process, which is critical for identifying recurring issues within the interface. </P>
                <P>We interviewed a total of 13 participants that we gathered through convenience sampling but fit within target users based on data provided by Schlotzsky's. </P>
                <BTitle>There were the following four phases within an interview:</BTitle>
                <ol>
                    <li><strong>Introduction -</strong> Introducing who we are, the topic of study, confidentiality of data</li>
                    <li><strong>Pre-questions -</strong> Perception, familiarity, and habits pertaining to online ordering</li>
                    <li><strong>Think aloud testing -</strong> Observing and capturing data related to experience during process</li>
                    <li><strong>Post-questions -</strong> More specific data of experience and challenges with interface</li>
                </ol>
                <GridBox>
                    <div>
                        <P>We took detailed notes on all interviews and then converted participants data into a total of 170 sticky notes in order to perform affinity mapping. We then eventually grouped our stickies into 37 blue groups and then groups these blue groups into 10 overarching categories designated by pink stickies. This process allowed to identify common themes that our participants while navigating the ordering process.   </P>
                    </div>
                    <div>
                        <ImageZoom
                            image={{
                                src: affinityWall,
                                alt: 'affinity mapping',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: affinityWall,
                                alt: 'affinity mapping'
                            }}
                        />
                    </div>
                </GridBox>

                <SubTitle>Competitive Analysis for Accessibility and Usability</SubTitle>
                <P>Here, we wanted to get a baseline of accessibility for Schlotzsky’s competitors’ websites and online ordering processes. Using automated accessibility testing tools we conducted testing on the homepages and online ordering pages of Schlotzsky’s and several of its competitors suggested to us by our industry partner. Through the data obtained about the accessibility scores, we got a good idea of how other online ordering websites compared with Schlotzsky’s in terms of accessibility. We can take note of any differences (if any) amongst the websites rated highly and see if we can incorporate them into our design alternatives.  To take this one step further, we also conducted a task analysis of the online ordering process for the most accessible website among all of the competitors examined.  </P>

                <SubTitle>Tree Testing</SubTitle>
                <GridBox>
                    <div>
                        <P>While conducting Tree testing, out goal was to collect quantitative data about the Information Architecture of the main Schlotzsky's website and the olo website of Schlotzsky's. We hoped to learn about where people became lost throughout the ordering process. We sought to identify any misleading labels and confusing navigation patterns. The method is ultimately a way to inform the redesign of the website in such a way that that the organization of information is logical for our users.  </P>
                        <BTitle>Tree testing should help answer following questions:</BTitle>
                        <ol>
                            <li>Is my website or intranet content hierarchy well structured?</li>
                            <li>Is the taxonomy and navigation labelling appropriate?</li>
                            <li>Can people find what they're looking for?</li>
                        </ol>                    
                    </div>
                    <div>
                        <ImageZoom
                            image={{
                                src: treeTest,
                                alt: 'tree test pie map',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: treeTest,
                                alt: 'tree test pie map'
                            }}
                        />
                    </div>
                </GridBox>
                
                <SubTitle>Research Findings</SubTitle>
                <P>After analyzing the results from our task analysis, cognitive walkthroughs, interviews, and tree testing, we identified 9 common pain points that ran through the findings for all of the methods. </P>
                <ol>
                    <li>The switch to Olo is confusing to users and disrupts the flow of completing the task. </li>
                    <li>Users are frustrated when they lose their progress on Olo because they are not expecting it. </li>
                    <li>Language used on Schlotzsky’s main website and Olo’s ordering page is inconsistent and too jargon-y. </li>
                    <li>There are too many different options presented and users find it difficult to distinguish them from one another </li>
                    <li>Customization is often useful, but is presented in a way that it is confusing.  </li>
                    <li>Users want tailored, concise suggestions at the right moment.  </li>
                    <li>Navigation is tedious and has many redundant steps and loops. </li>
                    <li>There is no way to search or filter items. </li>
                    <li>Appropriate Feedback is not provided </li>
                </ol>

                <SubTitle>Personas</SubTitle>
                <GridBox>
                    <div>
                        <ImageZoom
                            image={{
                                src: personaAlex,
                                alt: 'persona for Alex',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: personaAlex,
                                alt: 'persona for Alex'
                            }}
                        />
                    </div>
                    <div>
                        <ImageZoom
                            image={{
                                src: personaOlivia,
                                alt: 'persona for Olivia',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: personaOlivia,
                                alt: 'persona for Olivia'
                            }}
                        />
                    </div>
                </GridBox>

                <SubTitle>User Journeys</SubTitle>
                <GridBox>
                    <div>
                        <ImageZoom
                            image={{
                                src: journeyAlex,
                                alt: 'user journey for Alex',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: journeyAlex,
                                alt: 'user journey for Alex'
                            }}
                        />
                    </div>
                    <div>
                        <ImageZoom
                            image={{
                                src: journeyOlivia,
                                alt: 'user journey for Olivia',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: journeyOlivia,
                                alt: 'user journey for Olivia'
                            }}
                        />
                    </div>
                </GridBox>
                


                <SecTitle>Next Steps</SecTitle>
                <P>Equipped with the findings derived from our research, we will iteratively design and prototype Schlotzsky’s online ordering platform. We will then perform evaluative testing with the new online platform and compare the results with the initial platform to evaluate relative performance.  In addition to automated accessibility testing, we intend to reach out to several users with vision impairments in order to test usability of the new, accessible ordering platform.</P>

            </GridContainer>
        </Container>
    );
}

export default withRouteData(CaseStudy2);




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
