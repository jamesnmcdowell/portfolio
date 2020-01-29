import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import ImageZoom from 'react-medium-image-zoom';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';
import mainImage from '../assets/housetracker-title.png';
import affinityWall1 from '../assets/affinitywall1.jpg';
import affinityWall2 from '../assets/affinitywall2.jpg';
import wireframes1 from '../assets/wireframes2.png';
import mobile1 from '../assets/mobile1-HH.png';
import boardDesign from '../assets/board-design-HH.jpg';
import boardgame from '../assets/HomeHelper.jpg';
import storyBoardHH from '../assets/storyboard3-HH.jpg';
import storyBoardBG2 from '../assets/storyboard2-BG.png';
import storyBoardBG1 from '../assets/storyboard1-BG.png';
import Carousel from 'nuka-carousel';
import slide0 from '../assets/smartscheduler-homescreen.jpg';
import slide1 from '../assets/tutorial2-page-001.jpg';
import slide2 from '../assets/tutorial2-page-002.jpg';
import slide3 from '../assets/tutorial2-page-003.jpg';
import slide4 from '../assets/tutorial2-page-004.jpg';
import slide5 from '../assets/tutorial2-page-005.jpg';
import slide6 from '../assets/tutorial2-page-006.jpg';
import slide7 from '../assets/tutorial2-page-007.jpg';
import slide8 from '../assets/tutorial2-page-008.jpg';
import slide9 from '../assets/tutorial2-page-009.jpg';
import slide10 from '../assets/tutorial2-page-010.jpg';
import mobileApp from '../assets/Scheduler-mobile-app.jpg';
import systemsMap from '../assets/systems-map.jpg';
import analytics from '../assets/analytics-view.jpg';

let CaseStudy = ({item}) => {
    return (
    <Container vert>
        <GridContainer>
           
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview</SecTitle>  
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <P>To enable stay-at-home parents to manage their time effectively so that they have more time for themselves.</P>

                        <SubTitle>Users</SubTitle>
                        <P>The target user group is stay-at-home parents (SAHP) in the United States who have minor children living at home with them.</P> 
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> August 2018 - December 2018</li>
                            <li><strong>The Team:</strong> James, Rishma, Shubhangi {"&"} Tanuja</li>
                            <li><strong>My Role:</strong> Inteviewing, Sketching, Low and High-Fidelity Protoype Design, Report Writing</li>
                        </ul>
                    </div>
                    <VertCenter>
                        <Img src={boardDesign}/>
                    </VertCenter>
                </GridBox>  

                <SecTitle>Research {"&"} Results</SecTitle>

                <SubTitle>Exploratory Research</SubTitle>  
                <P>To get a better understanding of our user group, we initially reviewed  a variety of online sources. We read through a variety of blogs and websites where stay-at-home parents commonly expressed need for alone time for personal hobbies. In addition, we read through many forums such as reddit and quora that discussed challenges faced by both stay-at-home moms/dads.</P>

                <SubTitle>Interviews</SubTitle> 
                <P>After gaining a solid understanding of the user group through informal online research, we came up with a set of semi-structured interview questions which helped us to identify patterns and trends among stay-at-home parents and the challenges that they face. The development of the interview questions was an iterative process in which we initially ran a pilot interview to evaluate the estimated time and quality of the questions. Apart from the pilot study, we interviewed 10 stay-at-home parents,  which included 7 stay-at-home moms and 3 stay-at-home dads. The focus of our interviews was to learn about the following aspects of their lives: </P> 
                <ol>
                    <li>Shopping/purchasing practices</li>
                    <li>Social lives and related expectations</li> 
                    <li>Hobbies and interests</li>
                    <li>Greatest joys and challenges of being a stay-at-home parent</li>
                </ol>

                <GridBox>
                    <div>
                        <SubTitle>Affinity Diagram</SubTitle>
                        <P>In order to make sense of the significant amount of qualitative data that we collected through interviews, we choose to create an affinity map. We converted our data from all 10 participants into 150 data points on individual sticky notes and mapped them into 43 groups based on specific user tasks and goals. We then arranged these 43 groups into 5 distinct, overarching categories:</P>
                    </div>
                    <VertCenter>
                        <Img src={affinityWall1} />
                    </VertCenter>
                </GridBox>  
                
                <SubTitle>Research Insights</SubTitle>
                <P>Through our affinity diagram, we identified a number of user goals for stay-at-home parents:</P>
                <ol>
                    <li>I want to shop efficiently and conveniently</li>
                    <li>I want to spend more time with my family</li> 
                    <li>I want more time for myself</li>
                    <li>I don't have enough time for my household responsibilities.</li>
                    <li>I want to keep track of my life</li>
                </ol>

                <P>Many stay-at-home parents reported the difficulty of keeping up with these tasks especially because often they are simultaneously supervising their children. This frequently resulted in little to no personal time for stay-at-home parents whether that be for pursuing hobbies, workouts, walks, or simply relaxing.  Our research led us to define what problem should be addressed in our design. We came up with the following goal: enabling stay-at-home parents to manage their time effectively so that they have more time for themselves.</P> 

                <SecTitle>Design Process</SecTitle>
                <GridBox>
                    <div>
                        <SubTitle> Brainstorming</SubTitle>
                        <P>We walked the affinity mapping wall as a team and came up with 33 design ideas. We then went through multiple brainstorming sessions to clarify and sort through our design ideas. We then choose 3 ideas to explore in greater depth. We chose design ideas that both clearly met the objectives of our goal, yet were distinctive and unique from a design perspective.</P>
                    </div>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: affinityWall2,
                                alt: 'affinity mapping',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: affinityWall2,
                                alt: 'affinity mapping'
                            }}
                        />
                    </VertCenter>
                </GridBox>

                <SubTitle>Design Idea 1 - Digital wall calendar + wellness tracker</SubTitle>
                
                <GridBox>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: mainImage,
                                alt: 'image of smartscheduler interface',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: mainImage,
                                alt: 'image of smartscheduler interface'
                            }}
                        />
                    </VertCenter>
                    <div>
                        <P>The SmartScheduler is a touchscreen interface that is mounted to the wall taking the place of a traditional wall calendar with additional features pertinent to stay-at-home parents. Because of its integration into the home,  stay-at-home parents are able to view and interact with the interface naturally as they go about their daily tasks at home.</P>
                        <P>What really sets the smart scheduler apart from other systems is its emphasis on self-care. Through our research we discovered that stay-at-home parents severely lack time for relaxation or hobbies and that they are not able to fulfill these needs due to their hectic schedules and the effort it takes to find events or activity groups. The smart scheduler allows stay-at-home parents to be cognizant of the amount time they are actually spending on themselves and encourages them to set and maintain goals for their personal health. It also provides suggestions for local events related to parents’ interests so that they don’t have to spend their own time searching.</P> 
                    </div>
                </GridBox>

                <GridBox>
                    <div>
                        <BTitle>The main features of the system are:</BTitle>
                        <ul>
                            <li>Smart pencil for scheduling  events on digital sticky notes (OCR recognition)</li>
                            <li>Voice interface for scheduling and looking up events</li>
                            <li>Expandable footer that shows monthly calendar, user’s goal of the month, analytics dashboard for tracking self-care, and daily suggestions</li>
                            <li>A mobile companion app that allows users to schedule on the go and get reminders about tasks</li>
                        </ul>
                    </div>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: storyBoardHH,
                                alt: 'storyboard for smartscheduler',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: storyBoardHH,
                                alt: 'storyboard for smartscheduler'
                            }}
                        />
                    </VertCenter>
                </GridBox>

                <GridBox>
                    <div>
                        <BTitle>Pros:</BTitle>
                        <ul>
                            <li>Integrated into the home so that parents can interact with it naturally when moving around the house.</li>
                            <li>Flexible in how users can enter event details such as writing on digital sticky notes and by using voice.</li>
                            <li>Offers a unique capability to track and promote stay-at-home parents’ health.</li>
                        </ul>
                    </div>
                    <div>
                        <BTitle>Cons:</BTitle>
                        <ul>
                            <li>System depends on users to be consistent with scheduling for the suggestion system to work properly. If a user has a task or event to do but doesn’t enter it into the calendar, the system will read the time slot as free and suggest activities to do during that time.</li>
                        </ul>
                    </div>
                </GridBox>

                <SubTitle>Design Idea 2 - Mobile app for locating/ reviewing child-friendly locations</SubTitle>
                
                <GridBox>
                    <div>
                        <P>In our interviews, many stay-at-home parents mentioned the challenge of finding activities for their kids. The idea behind this application is that if a stay-at-home parent could spend less time searching and planning activities for their children, they could have more time for themselves. Additionally, the ability to quickly identify locations that are appropriate for children would reduce the cognitive load and stress that takes place when a parent is taking their kids to a new place or going through a new, potentially stressful experience with them.</P>
                        <P>Kindly is a mobile application that enables people to find kid-friendly locations based on user ratings. Users can also post the location of any particularly kid-friendly places to share with others. Kindly also enables parents to share information relating to kid-friendly businesses, such as airlines, in order to help other parents plan outings.  Although other user-review apps for finding places exist, we identified that no other applications offered a child-focused reviewing system and considered this to be a significant enough task to warrant a separate application.</P>
                    </div>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: wireframes1,
                                alt: 'wireframes for mobile app',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: wireframes1,
                                alt: 'wireframes for mobile app'
                            }}
                        />
                    </VertCenter>
                </GridBox>

                <GridBox>
                    <div>
                        <BTitle>Pros:</BTitle>
                         <ul>
                            <li>Offers straightforward information on how suitable and convenient a location/business is for children and provides a standardized metric by which locations can be rated.</li>      
                            <li>Promotes a more kid-friendly society where businesses are encouraged to take steps to make sure that their place is suitable for kids and convenient for the parents.</li> 
                        </ul>
                    </div>
                    <div>
                        <BTitle>Cons:</BTitle>
                        <ul>
                            <li>This application generally saves parents time indirectly rather than directly.</li>
                            <li>Potentially unforeseen issues when businesses are driven to compete to adopt child-friendly services.</li>
                        </ul>
                    </div>
                </GridBox>
          
                <SubTitle>Design Idea 3 - board game for encouraging chores</SubTitle>

                <GridBox>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: boardgame,
                                alt: 'wireframes for mobile app',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: boardgame,
                                alt: 'wireframes for mobile app'
                            }}
                        />
                    </VertCenter>
                    <div>
                        <P>From early on, we had a concept of a physical, non-digital scheduler in mind. It was difficult to achieve the purpose of our user’s goal within the context of a physical calendar — our ideas simply felt either overly complex/crowded or too conventional.</P>
                        <P>At this point we began to think in new directions and instead diverged away from scheduling ideas. Given the limited physical space we had to work with, we decided that it would be more appropriate to solve the users' goal in a more general, holistic way. We brainstormed collaborative systems that can distribute the workload across all family members and decided that we need to ensure that our design motivates family members to take a more active role in completing chores.</P>
                        <P>This is where we came up with the idea to make a board game. We saw this as an opportunity to motivate the family and leverage a natural sense of competition in order to reduce the workload of a stay-at-home parent. Unlike conventional board games, we envisioned this game to be continuously played in the background of the family’s everyday life.</P> 
                    </div>
                </GridBox>

                <BTitle>The core concept of the game is as follows:</BTitle> 
                <P>A  player completes a household chore. Every chore is assigned a particular point value. The player moves ahead as many points as the task is worth after completing a task. The player that reaches the finish line first wins and is able to win a prize that is determined by the stay-at-home-parent. The game can then be immediately reset and played from the beginning. In order to counter short attention spans of children and maintain motivation, there are many chance (star) spaces along the way that can lead to small prizes and interesting twists and turns within the game.</P>

                
                <GridBox>
                    <div>
                        <BTitle>Pros:</BTitle>
                         <ul>
                            <li>Lower cost than electronic hardware</li>
                            <li>Potentially more robust and can handle wear and tear of household</li>
                            <li>Directly reduces workload for a stay-at-home parent</li>
                            <li>Promotes social, interactive activity between family members</li>
                            <li>Trains children to take responsibility around the house for their adult life</li>
                        </ul>
                    </div>
                    <div>
                        <BTitle>Cons:</BTitle>
                        <ul>
                            <li>It is difficult to know if kids will always be motivated to play the game.</li>
                            <li>It's difficult to prevent players from cheating during such a long-term game by either drawing multiple cards and/or moving forwards an arbitrary number of spaces to benefit them.</li>
                        </ul>
                    </div>
                </GridBox>
                <GridBox>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: storyBoardBG1,
                                alt: 'first storyboard for boardgame',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: storyBoardBG1,
                                alt: 'first storyboard for boardgame'
                            }}
                        />
                    </VertCenter>
                    <VertCenter>
                        <ImageZoom
                            image={{
                                src: storyBoardBG2,
                                alt: 'second storyboard for boardgame',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: storyBoardBG2,
                                alt: 'second storyboard for boardgame'
                            }}
                        />
                    </VertCenter>
                </GridBox>

                <SecTitle>Evaluation of Design Concepts</SecTitle>
                <GridBox>
                    <VertCenter>
                        <p>Out of the three designs created, we decided to move forward with the <St>Smart Scheduler digital wall calendar </St> . This was based on our own analysis of the three systems as well as semi-structured interviews with stay-at-home parents.  During interview parents remarked that they cannot access paper calendars them when they are out of the house and even when they are in the house, paper-based methods have no form of alerts. In addition parents within a single household don’t always both use the paper-based calendar leading to miscommunication. In addition, a majority of the parents interviewed liked the Smart Scheduler because it is “in your face” versus mobile calendar reminders that are easy to miss or ignore. Because the system is on the wall but has the capabilities of a traditional mobile calendar, parents said that they were more likely to check it.  </p>
                    </VertCenter>
                    <div>
                        <I>“I end up using my phone’s calendar a lot. I get notifications that pop up but I don’t look at them. I don’t check my calendar that often. But if it's there on the wall I would check it more often.”</I>
                        <I>“I love the post-its [on the Smart Scheduler] because it reflects how I currently manage my time.” </I>
                        <I>“I don’t like to have to open up an app and type in it vs being able to write in it. It feels like you almost don’t have to even think as much.” </I>
                        <I>“When you forget stuff and are not efficient, it creates stress. You end up doubling up on efforts.” </I>
                    </div>
                </GridBox>


                <SecTitle>System Design & Prototype</SecTitle>
                
                <GridBox>
                    <VertCenter>
                        <SubTitle>Systems Map</SubTitle>
                        <ImageZoom
                            image={{
                                src: systemsMap,
                                alt: 'systems map for prototype',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: systemsMap,
                                alt: 'systems map for prototype'
                            }}
                        />
                    </VertCenter>
                    <VertCenter>
                        <P>The Systems Map gives us a good idea about the number and type of stakeholders involved in order to make the system robust. It reflects the numerous interactions that take place between the stakeholders in order to enable a smoothly functioning system. Making the system’s map helped us identify the design gaps in our system. (For eg. How will the system be mounted on the wall). It greatly helped us to think about all aspects of the system as a whole which led us to make a robust system. </P>
                    </VertCenter>
                </GridBox>
                <br />
                <SubTitle>Prototype Design</SubTitle>
                <GridBox>
                    <VertCenter>
                    <BTitle>The following are six key features of the Smart Scheduler:</BTitle>
                    <ol>
                        <li>Daily schedule view</li>
                        <li>Weekly schedule preview</li>
                        <li>Scheduling events</li>
                        <li>Expandable footer
                        <ul>
                                <li>Monthly calendar</li>
                                <li>Analytics dashboard</li>
                                <li>Activity Suggestions</li>
                                <li>Motto of the month</li>
                            </ul>
                        </li>
                        <li>Mobile app</li>
                        <li>Settings</li>
                    </ol>
                    </VertCenter>
                    <VertCenter>

                        <ImageZoom
                            image={{
                                src: mobileApp,
                                alt: 'mobile app for prototype',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: mobileApp,
                                alt: 'mobile app for prototype'
                            }}
                        />
                    </VertCenter>
                </GridBox>
                <br/>
                <SubTitle>Prototype Walkthrough</SubTitle>

                <Carousel wrapAround ={true} 
                    renderBottomCenterControls={null} dragging >
                    <img src={slide0} />
                    <img src={slide1} />
                    <img src={slide2} />
                    <img src={slide3} />
                    <img src={slide4} />
                    <img src={slide5} />
                    <img src={slide6} />
                    <img src={slide7} />
                    <img src={slide8} />
                    <img src={slide9} />
                    <img src={slide10} />
                
                </Carousel>
                <br />
                <br />
                <Button target="_blank" href="https://xd.adobe.com/embed/87402818-88fe-4ce2-7a58-a74fb92a99a6-f171/">
                    <span>View Interactive Prototype</span>
                </Button>
                <br />
                <br />
                <br />
                
                <SecTitle>Evaluation of Prototype</SecTitle>
                <GridBox>
                    <div>
                        <P>We conducted moderated usability testing by giving 6 participants the following 2 tasks:</P>
                        <ol>
                            <li>Add and delete a task on the Smart Scheduler.</li>
                            <li>View and interpret the footer & expanded self-care graphs.</li>
                        </ol>          
                        <P>Our system was tested through paper prototyping to quickly obtain feedback. We printed key screens of the interface on large sheets of paper to accurately represent the size of the system and used sticky notes for user take notes on and place into a timeslot. The screens were then placed on the wall to simulate a realistic interaction with the system. We  switched paper components in order to show changes in the interface’s state. </P>          
                    </div>
                    <VertCenter>

                        <ImageZoom
                            image={{
                                src: analytics,
                                alt: 'analytics dashboard',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: analytics,
                                alt: 'analytics dashboard'
                            }}
                        />
                    </VertCenter>
                </GridBox>

                <SubTitle>Semi-structured Interview/ Think Aloud</SubTitle>
                <GridBox>
                    <div>
                        <BTitle> Description </BTitle>
                        <P>Our questions were spaced throughout the evaluation of the two benchmark tasks and can be broken down into the following groups:</P>
                        <ol>
                            <li>Initial questions to gain general information about the user</li>
                            <li>Questions about impression of system after its introduction</li>
                            <li>Follow-up questions after completion of first evaluation task</li>
                            <li>Follow-up questions after completion of second evaluation task</li>
                            <li>Final questions to understand overall experience of the user</li>
                        </ol>
                    </div>
                    <div>
                        <BTitle> Findings </BTitle>
                        <ol>
                            <li>This system is better than existing processes users use to schedule things.</li>
                            <li>Existing features of the system make scheduling more efficient.</li>
                            <li>The system is useful because of its ubiquity.</li>
                            <li>Some parts of the system are tedious.</li>
                            <li>This system will allow the users to save time.</li>
                            <li>The self-care graphs are useful but the graphs do not function how users expect them to.</li>
                        </ol>
                    </div>
                </GridBox>

                <SubTitle>Desirability Testing</SubTitle>
                <GridBox>
                    <div>
                        <BTitle> Description </BTitle>
                        <P>Following the completion of the benchmark tasks users selected 5-10 words that most aligned with their perceptions / experiences.</P>
                    </div>
                    <div>
                        <BTitle> Findings </BTitle>
                        <P>Most selected adjectives:</P>
                        <ol>
                            <li>Organized - 5</li>
                            <li>Personal - 4</li>
                            <li>Convenient - 4</li>
                        </ol>
                    </div>
                </GridBox>

                <SubTitle>System Usability Scale (SUS)</SubTitle>
                <GridBox>
                    <div>
                        <BTitle> Description </BTitle>
                        <P>At the end of each session each user filled out the 10 standard questions used within SUS via google forms.</P>
                    </div>
                    <div>
                        <BTitle> Findings </BTitle>
                        <P>Average score: 83.8</P>
                    </div>
                </GridBox>

                <SecTitle>Project Reflection</SecTitle>
                <P>The evaluation yielded helpful insights relating to  our design and usability objectives. It was especially interesting to learn how some features that we thought were the essence of the system (the self-care graphs, specifically) were often seen as secondary functionalities by the users.  Throughout the entire project, we allowed the data gathered from our target users to direct our design decisions. We developed detailed knowledge of how our target users schedule events in their lives and have iteratively improved upon the system designed with them in mind. Had we continued with this project further, we would have been able to complete further user research of interviews and implement successive design changes in order to make the Smart Scheduler even more efficient and effective for our users. </P>
                <P>It was sometimes challenging to have access to individuals within our target user group (stay-at-home parents) considering the significant quantity of user research conducted  throughout this project. Despite many participants eagerness to participate, it is sometimes simply difficult to coordinate schedules with busy parents under tight time constraints. Another challenge was really the limitation of testing this system in a more realistic, long-term way. We would have loved to have enough time to conduct a longitudinal study with participants considering that understanding a long-term relationship between the system and participants is a crucial aspect of evaluating its effectiveness in achieving its goal.  </P>

               
        </GridContainer>
    </Container>
    );
}

export default withRouteData(CaseStudy);




let GridContainer = styled.div`
    
`;

let BTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
`;
let Frame = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding-bottom: 85%;
    background: #F4F9F8;
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
let St = styled.span`
    font-weight: 600;
`;
let P = styled.p`
    font-size: 1.7rem;
`;
let I = styled.p`
    font-style: italic;
    font-size: 1.65rem;
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