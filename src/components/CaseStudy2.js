import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';
import ImageZoom from 'react-medium-image-zoom';
import ixda from '../assets/talk_idxa.jpeg';
import schlotzkysLogo from '../assets/schlotzkys-title-narrow.png';
import taskAnalysis from '../assets/TA_final.png';
import affinityWall from '../assets/affinity-wall-r2.jpg';
import treeTest from '../assets/tree-test-chart.jpg';
import personaAlex from '../assets/Persona-Alex.jpg';
import personaOlivia from '../assets/Persona-Olivia.jpg';
import journeyAlex from '../assets/userjourney-alex.jpg';
import journeyOlivia from '../assets/userjourney-olivia.jpg';
import website from '../assets/website-wireframe.jpg';
import voice from '../assets/voice-assistant-map.jpg';
import chatbot from '../assets/chatbot.jpg';
import prototype  from '../assets/prototype-ordering.jpg';
import cw from '../assets/cognitive-walkthrough.jpg';
import interviewing from '../assets/interviewing.jpg';
import researchProccess from '../assets/research-process.svg';
import designChart from '../assets/design-chart.svg';


let CaseStudy2 = ({ item }) => {
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                <BTitleA> *Presented at 2019 World Information Architecture Day in Atlanta </BTitleA>
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <P>The problem area of focus is making Schlotzsky’s online ordering platform more accessible to a wide range of users,  including those with vision impairments, and integrating the design within their main website. This project is in collaboration with Focus Brands, the parent company of Schlotzsky’s.</P>

                        <SubTitle>Users</SubTitle>
                        <P>The target user is anyone who is interested in ordering Schlotzsky's online through a desktop or mobile interface.</P>
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> August 2018 - December 2018</li>
                            <li><strong>The Team:</strong> James, Rishma, Shubhangi {"&"} Tanuja</li>
                            <li><strong>My Role:</strong> Inteviewing, Sketching, Low and High-Fidelity Protoype Design, Report Writing</li>
                        </ul>
                    </div>
                    <div>
                        <Img src={ixda} />
                    </div>
                </GridBox>

                <SecTitle>Research {"&"} Results</SecTitle>

                <ImageZoom
                    image={{
                        src: researchProccess,
                        alt: 'research proccess map',
                        style: { width: '100%' }
                    }}
                    zoomImage={{
                        src: researchProccess,
                        alt: 'research proccess map'
                    }}
                />
                <SubTitle>Exploratory Research</SubTitle>
                <GridBox>   
                    <div>
                        <P>Due to the fact that this project is in collaboration with Focus Brands, we have access to some of Schlotzsky’s user data. This helped up to understand the user base and crafting personas.  We extensively researched the Web Content Accessibility Guidelines (WCAG 2.1). These standards included specifications relating to color, contrast, fonts, text, size, ease of use, information flow, structure, and position. We completed a competitive analysis with other products in the market as well as products which are not in direct competition but share similarities with our product. We performed a thorough task analysis to understand the task flow and information flow of the ordering platform.</P>
                    </div>
                    <div>
                        <Blockquote>Automated testing tools ≠ accessibility</Blockquote>

                    </div>
                </GridBox>  
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

                <SecTitle>Design Concepts</SecTitle>
				<p>During the design phase, we strived to incorporate insights into the design of the ordering process in order to create robust, accessible interfaces. We began this phase of the project by brainstorming three design concepts for online ordering.</p>


				<GridBox>
					<div>
						<BTitle>Concept #1: Website</BTitle>
						<P>In order to faithfully validate the accessibility of the website’s ordering process, it is essential to have fine-grained control over the code because this is is how how the interface communicates with screen readers. Therefore we opted to immediately code a barebones working prototype using web technologies to gain valuable insights from our users.</P>
					</div>
					<div>
						<ImageZoom
							image={{
								src: website,
								alt: 'website wireframe',
								style: { width: '100%' }
							}}
							zoomImage={{
								src: website,
								alt: 'website wireframe'
							}}
						/>
					</div>
				</GridBox>
				<br/>

				<GridBox>
					<div>
						<BTitle>Concept #2: Chatbot</BTitle>
						<P>Chatbots have a great potential of being accessible interfaces because users with vision impairments can easily carry out a text conversation with a screen reader and navigate through/ select given options presented by a chatbot. </P>
					</div>
					<div>
						<ImageZoom
							image={{
								src: chatbot,
								alt: 'chatbot concept',
								style: { width: '100%' }
							}}
							zoomImage={{
								src: chatbot,
								alt: 'chatbot concept'
							}}
						/>
					</div>
				</GridBox>
				<br />


				<GridBox>
					<div>
						<BTitle>Concept #3: Voice Interface</BTitle>
						<P>We chose the voice interface as a design alternative from our pool of brainstormed ideas because it is accessible for those with or without vision impairments. Moreover, owing to its conversational nature, we hypothesized that customers would find it usable as it would feel similar to talking to a waiter at a restaurant. </P>
					</div>
					<div>
						<ImageZoom
							image={{
								src: voice,
								alt: 'voice concept',
								style: { width: '100%' }
							}}
							zoomImage={{
								src: voice,
								alt: 'voice concept'
							}}
						/>
					</div>
				</GridBox>

		
				

				

                <SubTitle> Concept Evaluation & Findings  </SubTitle>
                <P>We took feedback from our participants and continually iterated on our design, which was critical because of our initial lack of practical understanding of people with visual impairments and how they may interact with our interfaces.  We used the Wizard of Oz method to simulate the chatbot and voice interface. To test the website, we developed a prototype using a web-application framework, React.js, to quickly and accurately test the accessibility of the website with a screen reader.</P>
               

				<SecTitle>Final Prototype Design & Evaluation </SecTitle> 

				<GridBox>
					<div>

						<ImageZoom
							image={{
								src: prototype,
								alt: 'website prototype',
								style: { width: '100%' }
							}}
							zoomImage={{
								src: prototype,
								alt: 'website prototype'
							}}
						/>
					</div>
					<div>
						<p>We moved forward to the next phase with the website concept. We incorporated previous research findings and expanded upon its features for the final evaluation sessions. We conducted a total of nine evaluation sessions with three experts and six users.</p>
						<br/>
						<Button target="_blank" href="https://order-accessible.netlify.com/#/">
							<span>View Prototype</span>
						</Button>
					</div>
				</GridBox>
				<br/>
				<GridBox>
					<div>
						<SubTitle>Cognitive Walkthrough</SubTitle>
						<P>Our goal for the cognitive walkthrough was to understand the user’s expectations and information needs while ordering online from Schlotzsky’s specifically in regards to accessibility. Conducting cognitive walkthroughs also gave us a clear understanding about users’ considerations as they go through the entire online ordering process. </P>
						<SubTitle>Heuristic Evaluation</SubTitle>
						<P>Our goal with heuristic evaluation is to ensure that our design meets holistic usability standards. We decided to use heuristic evaluation with our usability experts because it would provide feedback on a number of aspects of our design in one feedback session. Additionally, the heuristics provided us with a framework with which we could discuss our design and references with the expert. </P>

					</div>
					<VertCenter>
						<ImageZoom
							image={{
								src: cw,
								alt: 'cognitive walkthrough with a visually impaired expert',
								style: { width: '100%' }
							}}
							zoomImage={{
								src: cw,
								alt: 'cognitive walkthrough with a visually impaired expert'
							}}
						/>
					</VertCenter>
				</GridBox>

				<SubTitle>Interviewing / Think Aloud Testing</SubTitle>
				<GridBox>
					<div>
						<P>The goal of this user research method was to gain insights into the strengths and weaknesses of the interface from the perspective of a consumer. It was also critical to gain insights into how the screen reader worked in practice on participants’ with visual impairments own computers to identify any technical issues with the code. In addition, we asked more general questions about users’ online ordering preferences and habits to help us develop a baseline to understand their experience with and perception of online ordering platforms in general. We decided to pair Interviewing with think aloud testing to help fill in the gap of what the users experience throughout the ordering process. </P>
					</div>
					<VertCenter>
						<ImageZoom
							image={{
								src: interviewing,
								alt: 'interviewing a user',
								style: { width: '100%' }
							}}
							zoomImage={{
								src: interviewing,
								alt: 'interviewing a user'
							}}
						/>
					</VertCenter>
				</GridBox>
				<SubTitle>Benchmark Testing </SubTitle>
				<p>Our goal for benchmark testing was to compare how accessible our design is compared to one of Schlotzsky’s competitors, Hopdoddy. We chose Hopdoddy because their website was found to be the most accessible by automated testing tools during our competitive analysis of five Schlotzsky’s competitors that we previously conducted. Because we gave users the same basic task on each website (ordering an item for lunch online), we were able to see parallels and differences between the online ordering processes. We were able to see how the two websites differed in terms of how well screen readers navigated pages, links, and other web components. </p>
				
				<SubTitle>System Usability Scale (SUS) </SubTitle>
				<p>Our goal for using SUS was to obtain a baseline score of the usability of our prototype. We choose to evaluate the system with SUS because it a quick, convenient statistically-proven way to gain a sense of usability. SUS is also quite flexible because the 10 questions are able to evaluate anything from a traditional website interface to a experimental interface.  </p>
				
				<SecTitle>Research Findings from Evaluation </SecTitle> 
				<p> </p>

				<SubTitle>Cognitive Walkthrough</SubTitle>
				<p>From our cognitive walkthroughs, we found that our website met overarching accessibility goals in that it is easily navigable by a variety of screen readers (it’s operable, robust) and that it is predictable and understandable in terms of language and overall structure (understandable and perceivable). </p>

				<SubTitle>Heuristic Evaluation</SubTitle>
				<p>We incorporated the following changes to our prototype based on the expert’s feedback, and the team’s discussion. </p>
				<ul>
					<li>Added feature for ‘Website Feedback’ at the end of the home page</li>
					<li>Displayed an empty cart from the initial phase of the ordering process for consistency. The cart then fills up as the user adds items. </li>
					<li>Removed the Promo picture from the home page to avoid distraction </li>
					<li>Added Favorites option to save the item for later.  </li>
				</ul>

				<SubTitle>Interviewing / Think Aloud Testing</SubTitle>
				<ul>
					<li>The website was intuitive and easy to use.</li>
					<li>Navigation through the website is intuitive and guided.</li>
					<li>The summaries provided throughout the website are helpful.</li>
					<li>I like images and colors to supplement information shown in text.</li>
					<li>The system should save payment information.</li>
					<li>Parts of customization and checkout were tedious.</li>
				</ul>

				<SubTitle>Benchmark Testing</SubTitle>
				<ul>
					<li>Users prefer seeing all important details of a dish upfront (price, ingredients, dietary restrictions, etc.) as displayed in our design.</li>
					<li>Important interface elements should not be hidden inside menus because they are inaccessible for users with or without screen readers.</li>
					<li>We should incorporate personal touches like emotive language and suggestions because they draw users in.</li>
					<li>Users need feedback for actions that they have taken and how to navigate throughout a website. We have achieved this in our design.</li>
					<li>Users find it helpful to be guided through the ordering process by the design itself.</li>
					<li>Users find the options to customize pickup time and date and to add custom notes to a dish helpful.</li>
				</ul>

				<SubTitle>System Usability Scale (SUS)</SubTitle>
				<BTitle>Average score: 90.83 </BTitle>
                <SecTitle>Project Reflection </SecTitle>

                <GridBox>
                    <div>
                        <p>This was overall an extremely ambitious and rewarding project. Entering into the area of accessible design initially feels nearly overwhelming due to the complexities that exist within this set of users that most designers don’t really understand. The challenge of this project, however, is what largely contributed to what made it so exciting to work on.  Due to the poor state of accessible design within food ordering platforms and the digital space at large, we were able to make a large impact within this space and create experiences for users that were superior to their typical alternatives.  </p>
                        <p>Accessible design is only truly realized by working through the user-centered design process. We need to design for differences in abilities and offer stunning experiences no matter how users interact with an interface. Ultimately, accessible designs make intefaces more usable for everyone. When you’re designing for accessibility for those with visual impairments, you can’t fall back on visual design. This forces you to focus on information architecture at its core. Users of screen readers typically read through a website linearly so if there’s a giant list of things to read through, it becomes a mess. This forces the designer to break down the process and information into logical, digestible chunks in order to streamline the user’s experience. </p>
                    </div>
                    <div>
                        <Blockquote>Accessible design makes interfaces more usable for everyone.</Blockquote>
                        <Img src={designChart} />
                    </div>
                </GridBox>
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

let BTitleA = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #C21717;
`;

let Blockquote = styled.p`
    position: relative;
    margin: 40px auto;
    width: 400px;
    font-size: 42px;
    line-height: 50px;
    padding-left: 34px;
    border-left: 2px solid #C21717;
`;