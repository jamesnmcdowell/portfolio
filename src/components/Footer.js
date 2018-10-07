import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container } from './Media';
// import twitter from '../assets/twitterlogo.svg';
// import gScholar from '../assets/googlescholar.svg';
// import email from '../assets/mail.svg';


let Footer = () =>
    <FooterStyled >
        <Container>
            <FlexContainer>
                <a href="" target="_blank">
                    <p> Social 1 </p>
                </a>
                <a href="" target="_blank">
                    <p> Social 2 </p>
                </a>
                <a href="" target="_blank">
                    <p> Social 3 </p>
                </a>
            </FlexContainer>
        </Container>
    </FooterStyled>

export default Footer;

let FooterStyled = styled.footer`
    border-top: 1px solid #f0f0f0;
    width:100%;
    padding: 1.5em 0;  
`;
let FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    ${media.tablet`
    text-align: left;
    justify-content:space-between;
    flex-direction: row;
    align-items: center;
    `}     
`;
let Contact = styled.div`
    text-align:center;
`;
