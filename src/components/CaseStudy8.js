import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import db from '../db.json';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import responsiveCSS from "!!raw-loader!./responsiveTable.css";
import { media, Container, ContainerV } from './Media';
import { withRouteData } from 'react-static';
import ImageZoom from 'react-medium-image-zoom';

import careGiver1 from '../assets/caregiver-app1.jpg';
import persona1 from '../assets/persona1.jpg';
import persona2 from '../assets/persona2.jpg';
import empathy1 from '../assets/empathy1.jpg';
import empathy2 from '../assets/empathy2.jpg';

import wizardScreen from '../assets/wizard-screen.jpg';
import osInterface from '../assets/os-interface.jpg';
import listScreens from '../assets/list-screens.jpg';
import callsScreen from '../assets/calls-screen.jpg';

import evalPdf from '../assets/Evaluation-Affinity-Diagram.pdf';
import evalPic from '../assets/Evaluation-Affinity-Diagram-Viz.png';

import desirability from '../assets/desirability-famos.png';
import brainstorming from '../assets/brainstorming-session.jpg';





let CaseStudy8 = ({ item }) => {
    return (
        <Container vert>
            <GridContainer>
                <MainTitle>{item.title}</MainTitle>
                {/* <BTitleA> *Presented at 2019 World Information Architecture Day in Atlanta </BTitleA> */}
                <SecTitle>Overview </SecTitle>
                <GridBox>
                    <div>
                        <SubTitle>Problem/Motivation</SubTitle>
                        <P>An often overlooked aspect of ensuring older adults’ wellbeing is ensuring that they have the tools necessary in order to maintain good mental health and feel connected with friends and family. Older adults who are aging in place often have family or close friends who watch after them in varying capacities. Caring for an aging loved one can place a significant burden on caregivers who often times have numerous additional responsibilities including full-time employment and other family members. There is significant potential for leveraging technology to lessen the burden on caregivers while improving the quality of life for older adults. </P>
                        <SubTitle>Users</SubTitle>
                        <P>There are two distinct yet connected target users: adults aging in place and their family members who look after them. Within the context of this study,  adults who are aging in place are defined as those who are living independently and capable of performing Activities of Daily Living (ADLs) with little to no assistance.</P>
                    </div>
                    <div>
                        <Img src={careGiver1} />
                        <SubTitle>Logistics</SubTitle>
                        <ul>
                            <li><strong>Duration:</strong> September 2019 - April 2020</li>
                            <li><strong>My Role:</strong> Solo project — all work was done independently</li>
                        </ul>
                    </div>
                </GridBox>

                <SecTitle>Research {"&"} Results</SecTitle>

                <GridBox>
                    <div>
                        <SubTitle>Brainstorming session</SubTitle>
                        <P>This exercise was very helpful for framing the direction and strategy for approaching this research project. It is what largely inspired the separation of users into the two distinct groups: caregivers and care-receivers. I also developed the idea of creating  separate surveys/ interviews to examine the relationship/ perspectives of these two different groups. Lastly, the categories that naturally formed during this brainstorming session helped substantiate the questions that would be asked in both the surveys and the interviews.</P>
                    </div> 
                    <div> 
                        <Img src={brainstorming} />
                    </div> 
                </GridBox>

                <SubTitle>Surveying</SubTitle>
                <P>Surveys were chosen as a research method for collecting general information about the target users including demographic information, social life, and use of technology. The gathering of this information seemed like a natural step to take prior to any interviews because the data that results from the survey provides standardized data points to enable the identification of potential trends among users. This data complements the more nuanced, long-format data of interviews.  </P>
            
                <SubTitle>Interviewing</SubTitle>
                <P>Interviewing was  chosen as a research method for gathering  rich, qualitative data to better understand how the target users connect with others through technology and the subtle details within the caregiver/ care-receiver relationship. A total of 18 people were interviewed. All participants also partook in the survey prior to the interview and successfully met the requirements for all of the included qualifying questions.</P>
                <GridBox>
                    <div>
                        <P>The survey for <strong>care-receivers</strong> ended up containing five general sections: </P> 
                        <ol>
                            <li>General and social information</li>
                            <li>Tech accessibility/ adoption of technology</li>
                            <li>Spectrum of technology use</li>
                            <li>Relationship with technology</li>
                            <li>Effects of relationship with technology on relationship with people</li>
                        </ol>
                    </div>
                    <div>
                        <P>The survey for <strong>caregivers</strong> ended up containing five general sections: </P>
                        <ol>
                            <li>General and social information</li>
                            <li>Spectrum of technology use</li>
                            <li>Relationship with technology</li>
                            <li>Effects of relationship with technology on relationship with people</li>
                        </ol>
                    </div>
                </GridBox>

                <SubTitle>Research Findings</SubTitle>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Insights</Th>
                            <Th>Design Criteria</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Care-receivers highly prefer family members to teach them or troubleshoot new technologies.</Td>
                            <Td>Interface should be simple and understandable without a tutorial.</Td>
                        </Tr>
                        <Tr>
                            <Td>Care-receivers value privacy and security.</Td>
                            <Td>The security of the information needs to be clearly communicated to potential users.</Td>
                        </Tr>
                        <Tr>
                            <Td>Care-receivers become frustrated when trying to complete a task but run into obstacles/ issues along the way.</Td>
                            <Td>Provide clear/ appropriate feedback to users if there is an error or issue. </Td>
                        </Tr>
                        <Tr>
                            <Td>Many care-receivers rely on imperfect accessibility features such as speech-to-text for typing due to their physical limitations.</Td>
                            <Td>Interface should provide multiple ways to interact with it rather than relying solely on touch.</Td>
                        </Tr>
                        <Tr>
                            <Td>The vast majority of care-receivers use a small subset of smartphone features and find excessive features overwhelming.</Td>
                            <Td>The interface should focus on tasks that are primarily used by care-receivers and eliminate extraneous or unused tasks.</Td>
                        </Tr>
                        <Tr>
                            <Td>As adults age in place,  they may find certain tasks more challenging or require more or less features from their mobile phone.</Td>
                            <Td>The technology/ interface should be adaptable to meet older adults’ changing needs.</Td>
                        </Tr>
                        <Tr>
                            <Td>Care-receivers often run into technical challenges and feel overwhelmed.</Td>
                            <Td>The interface needs to be stable and easy to navigate.</Td>
                        </Tr>
                        <Tr>
                            <Td>Caregivers spend a significant amount of time serving as “tech support” when the person they are taking care of runs into issues.</Td>
                            <Td>The technology should be simple and straightforward enough to reduce the caregiver’s burden and save them time.</Td>
                        </Tr>
                        <Tr>
                            <Td>Caregivers often panic if unable to reach their care-receiver.</Td>
                            <Td>Put safeguards in place that give caregivers greater control so that they can monitor/ reach their care-receiver in any situation.</Td>
                        </Tr>
                        <Tr>
                            <Td>Care-receivers are primarily motivated to learn new technologies in order to communicate and connect with loved ones.</Td>
                            <Td>Focus on features that enable users to best communicate with loved ones and ensure that the features are designed well.</Td>
                        </Tr>
                        <Tr>
                            <Td>Care-receivers value “ back-and-forth” of texting and feel more connected with their caregivers.</Td>
                            <Td>Reciprocity is a valued aspect of their relationship with their caregiver that should be incorporated into technology not ignored.</Td>
                        </Tr>
                        <Tr>
                            <Td>Care-receivers do not see technology as a substitute for in-person communication— they see it as “better than nothing.”</Td>
                            <Td>The human elements of communication (verbal/ physical cues) are important and should not be attempted to be replaced by technology.</Td>
                        </Tr>
                        <Tr>
                            <Td>Vast majority (92%) of participants had smartphones and only 50% had landlines.</Td>
                            <Td>Building technologies on top of the platform of a smartphone is highly effective to reach the target user population.</Td>
                        </Tr>
                        <Tr>
                            <Td>Vast majority (85%) considered that having access to the Internet and having their phone on them at all times to be important or very important.</Td>
                            <Td>It is safe to assume that features that rely on users being connected to the Internet or having their phone on them will function.</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <SubTitle>Personas</SubTitle>
                <GridBox>
                    <div>
                        <ImageZoom
                            image={{
                                src: persona1,
                                alt: 'persona for Olivia',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: persona1,
                                alt: 'persona for Olivia'
                            }}
                        />
                    </div>
                    <div>
                        <ImageZoom
                            image={{
                                src: persona2,
                                alt: 'persona for Jennifer',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: persona2,
                                alt: 'persona for Jennifer'
                            }}
                        />
                    </div>
                </GridBox>

                <SubTitle>User Journeys</SubTitle>
                <GridBox>
                    <div>
                        <ImageZoom
                            image={{
                                src: empathy1,
                                alt: 'user journey for Olivia',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: empathy1,
                                alt: 'user journey for Olivia'
                            }}
                        />
                    </div>
                    <div>
                        <ImageZoom
                            image={{
                                src: empathy2,
                                alt: 'empathy map for Jennifer',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: empathy2,
                                alt: 'empathy map for Jennifer'
                            }}
                        />
                    </div>
                </GridBox>

                <SecTitle>Design Concept</SecTitle>
                <p>While looking through the results of my data, many design ideas seemed somewhat related and could be incorporated into a single larger design idea. This larger design idea is a phone operating system designed for older adults who are aging in place. Part of that includes a companion app where a caregiver is able to better help their care-receiver all while reducing the burden of their caregiving. Based on my research, the smartphone played a pivotal role within the relationship of caregivers/ care-receivers as a tool for safety, coordination, communication, and utility. There is significant potential for this operating system to serve as a platform that can incorporate an array of services and functions that are beneficial to both user groups. </p>
                
                <BTitle>Design Idea: Family OS</BTitle>
                <GridBox>
                    <div>
                        <P>Although smartphones are incredibly powerful tools that have been adopted en masse by older adults, their operating systems are often overly complex and lead to frustration and confusion among older adults. Family OS is an attempt to simplify the smartphone operating system and to provide the features that older adults actually use and care about. Another key goal is to provide connectivity with a caregiver device out of the box via a companion app to empower caregivers with tools to better care for their loved ones and to reduce their burden. </P>
                    </div>
                    <div>
                        <P>The main features of the system are: </P>
                        <ol>
                            <li>Family OS  software for care-receivers </li>
                            <li>Companion application for caregivers that is platform agnostic</li>
                            <li>Core applications for care-receivers within Family OS </li>
                        </ol>
                    </div>
                </GridBox>
                <br />

                <SecTitle>Prototype Design </SecTitle>
                <BTitle>Feature 1: Mobile operating system for care-receivers</BTitle>
                <UTitle>Wizard for phone setup </UTitle>
                <GridBox>
                    <div>
                        <ul>
                            <li><strong>Basic:</strong> Nearly all settings are locked/ hidden by default. Position of applications within the home screen is locked.</li>
                            <li><strong>Intermediate:</strong> Common settings are visible by default. Application layout is flexible.</li>
                            <li><strong>Advanced:</strong> Nearly all settings are visible by default. Application layout is flexible and several advanced features are included such as multiple home screens, gestures, and quick settings panel. </li>
                        </ul>                    </div>
                    <div>
                        <Img src={wizardScreen} />
                    </div>
                </GridBox>
            

                <UTitle>OS interface</UTitle>
                <GridBox>
                    
                    <div>
                        <P>The entire interface of the OS is designed to accommodate the target population of care-receivers based on the findings of my research. </P>
                    </div>
                    <div>
                        <Img src={osInterface} />
                    </div>
                </GridBox>

                <UTitle>System settings</UTitle>
                <P>Settings within Family OS are fairly unique because they largely can be accessed remotely by the caregiver within the companion app. Certain settings can also be optionally locked by the caregiver and/ or not displayed.</P>

                <br/>
                <BTitle>Feature 2: Companion application for caregivers</BTitle>
                <UTitle>System settings access/ override </UTitle>
                <GridBox>
                    <div>
                        <P>This feature enables the caregiver to view and modify system settings of the care-receiver’s phone through the companion app. This is enabled for the following reasons: </P>
                        <ol>
                            <li>To simplify and reduce clutter within the care-receiver’s interface. </li>
                            <li>To reduce tech issues that may arise from unwanted or undesirable settings.  </li>
                            <li>To provide caregivers with a greater peace of mind by enabling them to view system information such as battery life and override settings such as a phone being set to mute or do not disturb in an emergency situation. </li>
                        </ol>
                    </div>
                    <div>
                        <P>A common occurrence among users within my research was that caregivers panicked after care-receivers accidentally muted their phone or did so and forgot to turn it back on. Another key feature of the app is that caregivers can provide control or no control permissions to care-receivers for specific settings. Caregivers are also able to set up certain system modifications to require their confirmation before care-receivers are able to make specific changes.</P>
                    </div>
                </GridBox>

                <UTitle>Connectivity with all care-receiver specific apps</UTitle>
                <P>The companion app provides the portal through which caregivers are able to connect with all applications within the Family OS. For example, the caregiver would be able to view or modify shared grocery lists and interact with other applications that exist within the care-receivers phone. </P>
                
                <UTitle>Broadcast </UTitle>
                <P>This is a fairly straightforward yet highly effective feature that provides an alternative method for caregivers to connect with care-receivers in case they are unable to reach them through a regular phone call. This could be because a care-receiver accidentally forgets to keep their ringer turned on or does not keep their phone near them within their residence. In an emergency situation, caregivers speak directly to the care-receiver through an external device such as popular smart home speakers (Alexa, Google Home). This feature works to resolve a commonly occurring problem within my research where caregivers panic when unable to reach care-receivers, especially those who have had previous injuries or accidents.</P>

                <UTitle>Remote control of care-receiver phone </UTitle>
                <GridBox>
                    <div>
                        <P>For this feature, the care-receiver can request help directly through their screen. The result is a notification to the caregiver to provide screen control remotely and either provide a voice message of what the issue is or initiate a call so that it can be efficiently resolved. It can also be used to provide a walkthrough to teach the care-receiver something rather than just solving it depending on the situation. In addition, the caregiver can also request to control the care-receiver’s phone for troubleshooting issues. In this case the care-receiver would get a pop-up notification requesting their permission. Once giving their consent, the caregiver will be able to control their phone to resolve any issues. This is a critical feature that needs to be deeply integrated within the OS based on the findings of my research. Care-receivers highly prefer family members to teach them or troubleshoot new technologies.</P>
                    </div>
                    <div>
                        <Img src={careGiver1} />
                    </div>
                </GridBox>

                <UTitle>Monitoring Hub </UTitle>
                <P>This feature provides the ability for caregivers to connect with a variety of external devices such as smartwatches, safety pendants, smart home sensors and other devices connected to care-receivers. The main categories of monitoring are the care-receivers phone, their health, and their home. Within the companion app caregivers would be able to view and monitor these various devices and receive direct notification alerts from them in case of an emergency. </P>

                <br />
                <BTitle>Feature 3: Core applications for care-receivers</BTitle>

                <UTitle>Photos </UTitle>
                <P>Care-receivers can view photos and digital photo albums shared with them by their family.  Investing in a robust photos application is critical because care-receivers are primarily motivated to learn new technologies in order to communicate and connect with loved ones. If they feel more connected with family through an application, they are more motivated to continue learning and maintain a positive attitude towards technology. </P>
            
                <GridBox>
                    <div>
                        <UTitle>Lists  </UTitle>
                        <P>This very simple yet powerful list app enables care-receivers to itemize via text or speech. Because lists are automatically shared with the caregiver, the app enables, for example, remote coordination of a grocery list with the caregiver.</P>
                    </div>
                    <div>
                        <Img src={listScreens} />
                    </div>
                </GridBox>
                <GridBox>
                    <div>
                        <UTitle>Standard Communication Applications </UTitle>
                        <P>This includes applications for callings, texting, and storing contacts. All of these applications are designed in the same style as the Family OS homepage to create a consistent and familiar experience for the user.</P>
                    </div>
                    <div>
                        <Img src={callsScreen} />
                    </div>
                </GridBox>

                <br />
                <SecTitle>Prototype Evaluation </SecTitle>

                <Button target="_blank" href="https://james122277.invisionapp.com/console/share/F513RAMORN">
                    <span>View care-receiver prototype</span>
                </Button>
                <br/>
                <br/>
                <br/>
                <Button target="_blank" href="https://james122277.invisionapp.com/console/share/AV13R7KOH8">
                    <span>View caregivers prototype</span>
                </Button>
                <br />
                <br />
                <BTitle> Evaluation Overview </BTitle>
                <ol>
                    <li>Introduction/overview of the system</li>
                    <li>Think aloud/ observation</li>
                        <Ol>
                            <li>Think aloud/observation sessions during the user’s completion of each benchmark task.</li>
                        </Ol>
                    <li>Semi-structured Interview</li>
                        <Ol>
                            <li>Follow-up question after completion of each task</li>
                            <li>Final questions to understand overall experience of the user</li>
                        </Ol>
                    <li>Desirability Testing</li>
                        <Ol>
                            <li>Following the completion of the benchmark tasks, users selected 5-10 words that most aligned with their perceptions / experiences.</li>
                        </Ol>
                    <li>System Usability Scale (SUS)</li>
                        <Ol>
                            <li>At the end of each session each user filled out the 10 standard questions for SUS.</li>
                        </Ol>
                </ol>

                <P>There were three main parts of each interview: a think aloud followed by questions, an online SUS survey, and desirability analysis. I began each interview by introducing the general premise and goal of Family OS and the companion app. I then began the think-aloud portion of the interview by asking the participant to do a number of tasks using an InVision prototype of the system. The following are tasks that participants were tasked to complete:</P>
                <ol>
                    <li><strong>View and interpret information in monitoring hub</strong></li>
                    <span>“Take a look at the monitoring hub and tell me what you see.” </span>
                    <li><strong>View contents of grocery list within applications </strong></li>
                    <span>“You are out running errands and your aging mom wants you to pick up groceries for her. She keeps a list on her phone. Go into her applications tab and view her grocery list to see what she needs.” </span>
                    <li><strong>Adjust settings within settings controller </strong></li>
                    <span>“Your mom accidently turned her phone on silent again. You are nervous about her health and are unable to reach her because she is not seeing any of your calls. Go into the settings controller page and turn up her ringer volume and lock down her sounds setting so she can’t accidentally mute her phone again.” </span>
                    <li><strong>Remotely connect to assist care-receiver (remote control) </strong></li>
                    <span>“Your mom just can’t find the new photo albums you shared with her on her phone. She is getting frustrated and needs someone to show her where it is. Start up remote control of her screen so you can walk her through where it is and take her to the photo albums.” </span>
                </ol>

                <SecTitle>Conclusions</SecTitle>


                <SubTitle>Think Aloud/ Semi-structured Interview Affinity Mapping </SubTitle>
                <GridBox>
                    <div>
                        <ImageZoom
                            image={{
                                src: evalPic,
                                alt: 'Affinity mapping',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: evalPic,
                                alt: 'Affinity mapping'
                            }}
                        />
                    </div>
                    <div>
                        <P>
                            <Button target="_blank" href={evalPdf}>
                                <span>Full affinity diagram</span>
                            </Button>
                        </P>
                        <br />
                        <P>
                            <Button target="_blank" href={evalPic}>
                                <span>Affinity diagram visualization</span>
                            </Button>
                        </P>
                    </div>
                </GridBox>

                
                <SubTitle>Desirability Testing</SubTitle>
                <GridBox>
                    <div>
                        <P>I took the selections from my participants and created both a word cloud and a radar chart to visualize the results. Both the size and color of each word and is proportional to frequency of the selection among all participants.</P>
                    </div>
                    <div>
                        <ImageZoom
                            image={{
                                src: desirability,
                                alt: 'desirability viz',
                                style: { width: '100%' }
                            }}
                            zoomImage={{
                                src: desirability,
                                alt: 'desirability viz'
                            }}
                        />
                    </div>
                </GridBox>

        
                <SubTitle>System Usability Scale (SUS)</SubTitle>
                <BTitle>Average score: 88.75 </BTitle>

                <SecTitle>Project Reflection </SecTitle>
                <P>Improving usability and enjoyment of mobile phones for care-receivers is a critical step for creating a portal into their lives.  This portal is essential for the existence of a reciprocal communication line between care-receivers and caregivers. A feeling of confidence and mastery of mobile phone technology likely will increase older adults’ openness towards and acceptance of new technology. The familiar smartphone can form the foundation for a suite of additional features and connectivity options that improve both older adults’ and their caregivers' lives. </P>
                <P>When considering tools that assist caregivers, it is important to focus on those that feel collaborative rather than on those that solely monitor care-receivers.  While monitoring certainly has value, a heavy reliance on monitoring, which is often discussed within HCI as a promising solution to enable older adults to age in place, is one-sided and may make older adults feel patronized and/ or neglected. A caregiver role is most often not a professional arrangement — there is a delicate balance that must be preserved between caregiving and the reciprocity found in any healthy, adult relationship.  Strongly supported through my research,  care-receivers do not see technology as a substitute for in-person communication— they see it as “better than nothing.” It is important to be keenly aware of technology's limitations and consider it as a supplement, not foundational to a caregiver/ care-receiver relationship. </P>
                <P>With this in mind, my project suggests an exciting number of possibilities for future work to take place. First, I would like to eventually test future interactions with both caregivers and care-receivers. The purpose would be to gain a greater understanding of how care-receivers respond to and interact with both the simplified UI of Family OS, as well as the collaborative features present within the caregiver companion app. It also would be incredibly valuable to to conduct further evaluations where caregivers and care-receivers are able to directly interact with each other through the prototypes rather than having to have me simulate the other party during testing. This would provide much richer and more realistic data and would likely enable me to observe real-life scenarios between the users that could help inform further iterations of this system. </P>
                <P>Beyond further research to improve this existing system, there is a great potential for the companion app for caregivers to serve as the foundation of a much bigger platform that integrates more features and more external devices for health and safety. I believe that the concept behind a companion app for caregivers can and should be expanded on as an increasingly sophisticated digital tool for improving communication, safety, coordination, and collaboration in the unique relationship between caregivers and care-receivers. This is particularly crucial due to the fact that both the number of adults opting to age in place is increasing and the number of caregivers per older adult is decreasing due to social and demographic shifts. </P>
            </GridContainer>
        </Container>
    );
}

export default withRouteData(CaseStudy8);




let GridContainer = styled.div`
    ${responsiveCSS}
`;

let BTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
`;
let UTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;
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

let Ol = styled.ol`
    list-style-type: lower-alpha;
`;
