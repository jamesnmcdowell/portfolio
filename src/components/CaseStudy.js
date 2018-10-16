import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';
import mainImage from '../assets/housetracker-title.png';
import affinityWall1 from '../assets/affinitywall1.jpg';
import affinityWall2 from '../assets/affinitywall2.jpg';
import wireframes1 from '../assets/wireframes2.png';
import mobile1 from '../assets/mobile1-HH.png';
import boardDesign from '../assets/board-design-HH.jpg';
import boardgame from '../assets/HomeHelper.jpg';
import storyBoardHH from '../assets/storyboard3-HH.png';
import storyBoardBG2 from '../assets/storyboard2-BG.png';
import storyBoardBG1 from '../assets/storyboard1-BG.png';



let CaseStudy = ({item}) => {
console.log(item);
    return (
    <Container vert>
        <GridContainer>
           
                <MainTitle>{item.title}</MainTitle>
                <SecTitle>Overview</SecTitle>  
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <p>To enable stay-at-home parents to manage their time effectively so that they have more time for themselves.</p>

                        <SubTitle>Users</SubTitle>
                        <p>The target user group is stay-at-home parents (SAHP) in the United States who have minor children living at home with them.</p> 
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> August 2018 - Present</li>
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
                <p>To get a better understanding of our user group, we initially reviewed  a variety of online sources. We read through a variety of blogs and websites where stay-at-home parents commonly expressed need for alone time for personal hobbies. In addition, we read through many forums such as reddit and quora that discussed challenges faced by both stay-at-home moms/dads.</p>

                <SubTitle>Interviews</SubTitle> 
                <p>After gaining a solid understanding of the user group through informal online research, we came up with a set of semi-structured interview questions which helped us to identify patterns and trends among stay-at-home parents and the challenges that they face. The development of the interview questions was an iterative process in which we initially ran a pilot interview to evaluate the estimated time and quality of the questions. Apart from the pilot study, we interviewed 10 stay-at-home parents,  which included 7 stay-at-home moms and 3 stay-at-home dads. The focus of our interviews was to learn about the following aspects of their lives: </p> 
                <ol>
                    <li>Shopping/purchasing practices</li>
                    <li>Social lives and related expectations</li> 
                    <li>Hobbies and interests</li>
                    <li>Greatest joys and challenges of being a stay-at-home parent</li>
                </ol>

                <GridBox>
                    <div>
                        <SubTitle>Affinity Diagram</SubTitle>
                        <p>In order to make sense of the significant amount of qualitative data that we collected through interviews, we choose to create an affinity map. We converted our data from all 10 participants into 150 data points on individual sticky notes and mapped them into 43 groups based on specific user tasks and goals. We then arranged these 43 groups into 5 distinct, overarching categories:</p>
                    </div>
                    <VertCenter>
                        <Img src={affinityWall1} />
                    </VertCenter>
                </GridBox>  
                
                <SubTitle>Research Insights</SubTitle>
                <p>Through our affinity diagram, we identified a number of user goals for stay-at-home parents:</p>
                <ol>
                    <li>I want to shop efficiently and conveniently</li>
                    <li>I want to spend more time with my family</li> 
                    <li>I want more time for myself</li>
                    <li>I don't have enough time for my household responsibilities.</li>
                    <li>I want to keep track of my life</li>
                </ol>

                <p>Many stay-at-home parents reported the difficulty of keeping up with these tasks especially because often they are simultaneously supervising their children. This frequently resulted in little to no personal time for stay-at-home parents whether that be for pursuing hobbies, workouts, walks, or simply relaxing.  Our research led us to define what problem should be addressed in our design. We came up with the following goal: enabling stay-at-home parents to manage their time effectively so that they have more time for themselves.</p> 

                <SecTitle>Design Process</SecTitle>
                <GridBox>
                    <div>
                        <SubTitle> Brainstorming</SubTitle>
                        <p>We walked the affinity mapping wall as a team and came up with 33 design ideas. We then went through multiple brainstorming sessions to clarify and sort through our design ideas. We then choose 3 ideas to explore in greater depth. We chose design ideas that both clearly met the objectives of our goal, yet were distinctive and unique from a design perspective.</p>
                    </div>
                    <VertCenter>
                        <Img src={affinityWall2} />
                    </VertCenter>
                </GridBox>

                <SubTitle>Design Idea 1 - Digital wall calendar + wellness tracker</SubTitle>
                
                <GridBox>
                    <VertCenter>
                        <Img src={mainImage} />
                    </VertCenter>
                    <div>
                        <p>The SmartScheduler is a touchscreen interface that is mounted to the wall taking the place of a traditional wall calendar with additional features pertinent to stay-at-home parents. Because of its integration into the home,  stay-at-home parents are able to view and interact with the interface naturally as they go about their daily tasks at home.</p>
                        <p>What really sets the smart scheduler apart from other systems is its emphasis on self-care. Through our research we discovered that stay-at-home parents severely lack time for relaxation or hobbies and that they are not able to fulfill these needs due to their hectic schedules and the effort it takes to find events or activity groups. The smart scheduler allows stay-at-home parents to be cognizant of the amount time they are actually spending on themselves and encourages them to set and maintain goals for their personal health. It also provides suggestions for local events related to parents’ interests so that they don’t have to spend their own time searching.</p> 
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
                        <Img src={storyBoardHH} />
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
                        <p>In our interviews, many stay-at-home parents mentioned the challenge of finding activities for their kids. The idea behind this application is that if a stay-at-home parent could spend less time searching and planning activities for their children, they could have more time for themselves. Additionally, the ability to quickly identify locations that are appropriate for children would reduce the cognitive load and stress that takes place when a parent is taking their kids to a new place or going through a new, potentially stressful experience with them.</p>
                        <p>Kindly is a mobile application that enables people to find kid-friendly locations based on user ratings. Users can also post the location of any particularly kid-friendly places to share with others. Kindly also enables parents to share information relating to kid-friendly businesses, such as airlines, in order to help other parents plan outings.  Although other user-review apps for finding places exist, we identified that no other applications offered a child-focused reviewing system and considered this to be a significant enough task to warrant a separate application.</p>
                    </div>
                    <VertCenter>
                        <Img src={wireframes1} />
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
                        <Img src={boardgame} />
                    </VertCenter>
                    <div>
                        <p>From early on, we had a concept of a physical, non-digital scheduler in mind. It was difficult to achieve the purpose of our user’s goal within the context of a physical calendar — our ideas simply felt either overly complex/crowded or too conventional.</p>
                        <p>At this point we began to think in new directions and instead diverged away from scheduling ideas. Given the limited physical space we had to work with, we decided that it would be more appropriate to solve the users' goal in a more general, holistic way. We brainstormed collaborative systems that can distribute the workload across all family members and decided that we need to ensure that our design motivates family members to take a more active role in completing chores.</p>
                        <p>This is where we came up with the idea to make a board game. We saw this as an opportunity to motivate the family and leverage a natural sense of competition in order to reduce the workload of a stay-at-home parent. Unlike conventional board games, we envisioned this game to be continuously played in the background of the family’s everyday life.</p> 
                    </div>
                </GridBox>

                <BTitle>The core concept of the game is as follows:</BTitle> 
                <p>A  player completes a household chore. Every chore is assigned a particular point value. The player moves ahead as many points as the task is worth after completing a task. The player that reaches the finish line first wins and is able to win a prize that is determined by the stay-at-home-parent. The game can then be immediately reset and played from the beginning. In order to counter short attention spans of children and maintain motivation, there are many chance (star) spaces along the way that can lead to small prizes and interesting twists and turns within the game.</p>

                
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
                        <Img src={storyBoardBG1} />
                    </VertCenter>
                    <VertCenter>
                        <Img src={storyBoardBG2} />
                    </VertCenter>
                </GridBox>

                <SecTitle>Next Steps</SecTitle>
                <p>We will choose one of three design ideas and create a detailed interactive prototype of the interface.  Based on research and processes of designing the system, we will then come up with criteria by which our interface can be evaluated in order to eventually perform a formal evaluation.</p>

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
