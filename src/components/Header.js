import React from 'react';
import { Link } from 'react-static';
// import HamburgerMenu from './HamburgerMenu';
import { media, Container } from './Media';
import styled from 'styled-components';
// import Headroom from 'react-headroom';

let Header = ({ headerActive, toggleMenu, MenuOpen, match }) =>
    // <Headroom style={{ zIndex: 8 }}>
    <NavBar>
        <FlexNav> 
            <LogoContainer onClick={() => {  }}>
                <Link to="/work">
                    <Logo> JAMES MCDOWELL  </Logo>
                </Link>
            </LogoContainer>
            <MenuLinks>
                <NavLink to="/work"  {...(match.params.page === 'work')? {active: "true"} : {}} >
                    <span> WORK </span>
                </NavLink>
                <NavLink to="/about" {...(match.params.page === 'about') ? { active: "true" } : {}}>
                    <span> ABOUT</span>
                </NavLink>
                <NavLink to="/resume" {...(match.params.page === 'resume') ? { active: "true" } : {}}>
                    <span> RESUME</span>
                </NavLink>
            </MenuLinks>
        </FlexNav>
    </NavBar>
    // </Headroom>

export default Header;

let NavBar = styled.div`
    z-index: 500;
    position:fixed;
    width: 100%;

`;
let FlexNav = styled.div`
    display: flex;
    height: 100%;
    padding: 0 10px;
    background-color: white;
    ${media.tablet`
    padding: 0 20px; 
    `}
`;

let LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 10px; 
    z-index: 1;
    flex: 0 0 auto;
    ${media.desktop`
    display: block;
    padding-right: 10px; 
    `}
`;
let MenuLinks = styled.div`
    display: none;
    color: #ffffff;
    display: block;
    flex: 1 1 auto;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    
    
`;

let NavLink = styled(Link) `
    color: black;
    flex: 0 0 auto;
    height: 100%;    
    padding: 20px 0 0 0px;;
    display: flex;
    align-items: center;
    border-bottom: 20px solid transparent;
    font-size:1.1rem;
    margin-right: 8px;
    ${media.phone`
    font-size:1.4rem;
    `}
    ${media.bigPhone`
    font-size:1.7rem;
    margin-right: 15px;
    `}
     ${media.tablet`
        font-size:1.7rem;
        margin-right: 25px;
    `}
    &:last-child {
        margin-right: 0;
    }
    span{
    }
    box-shadow: ${props => props.active ? "inset 0px -7px 0px 0px #C21717" : "7px solid transparent" }
    `;

let Logo = styled.h1 `
    font-size:1.2rem;
    width: auto;
    text-decoration: none;
    &:hover{
        opacity: .7;
    }
    &:active{
    }
    ${media.phone`
    font-size:1.6rem;
    `}
    ${media.bigPhone`
    font-size:2rem;
    `}
`;
    // font-family: 'BauhausStd-Medium', cursive;
//  