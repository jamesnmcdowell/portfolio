import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { resume } from '../db.json';

let ResumeBlock = ({item}) =>
    <FlexDiv>
        <SectionTitle> {item.section} </SectionTitle>
        {console.log(item)}
        {(item.items) &&
            item.items.map((elem) =>
                <div>
                    {(elem.name) &&
                        elem.name.map((n) =>
                            <Name>{n}</Name>
                        )
                    }
                    <Date> {elem.date && elem.date} </Date>
                    <Text> {elem.text && elem.text} </Text>
                    <Ul>
                        {(elem.textArray) &&
                            elem.textArray.map((bullet) =>
                                <Li>{bullet}</Li>
                            )
                        }
                    </Ul>
                    <FlexHalf>
                        {(elem.gridArray) &&
                            elem.gridArray.map((bullet) =>
                                <span>{bullet}</span>
                            )
                        }
                    </FlexHalf>
                    <br />
                </div>
            )
        }
    </FlexDiv>

export default ResumeBlock;


let ResumeTitle = styled.h4`
    text-transform: uppercase;
    font-weight: 300;
`;
let SectionTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 800;
    display: inline-block;
    color: black;
`;
let Name = styled.h3`
    font-weight: 600;
    color: #1B67AB;
    margin: 0;
`;
let Date = styled.p`
    font-weight: 200;
    color: #737373;
    margin: 0;
`;
let Text = styled.p`
    font-weight: 200;
    margin: 0;
`;
let Ul = styled.ul`
    list-style: none;
    margin:0;
`;
let Li = styled.li`
    &::before {
        content: "■"; 
        color: #C21717;
        display: inline-block; 
        width: 1em;
        margin-left: -1em
    }
`;

let Span = styled.span`
    font-weight: ${ props => props.bold ? "600" : "inherit"};
`;

let FlexDiv = styled.div`
    margin-bottom: 4px;
`;
let FlexHalf = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
`;
