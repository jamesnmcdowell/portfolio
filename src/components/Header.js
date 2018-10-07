import React from 'react';
import { Link } from 'react-static';
import HamburgerMenu from './HamburgerMenu';
import { media, Container } from './Media';
import styled from 'styled-components';
import Headroom from 'react-headroom';

let Header = ({ headerActive, toggleMenu, MenuOpen, match }) =>
    // <Headroom style={{ zIndex: 8 }}>
    <NavBar>
        <FlexNav> 
            <LogoContainer onClick={() => {  }}>
                <Logo> JAMES MCDOWELL  </Logo>
            </LogoContainer>
            <MenuLinks>
                <NavLink to="/portfolio"  {...(match.params.page === 'portfolio')? {active: "true"} : {}} >
                    <span> PORTFOLIO</span>
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
    ${media.desktop`
    display: block;
    flex: 1 1 auto;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    
    `}
`;

let NavLink = styled(Link) `
    color: black;
    flex: 0 0 auto;
    height: 100%;    
    padding: 10px 12px 0 12px;;
    display: flex;
    align-items: center;
    border-bottom: 8px solid transparent;
    &:hover{
    }
    box-shadow: ${props => props.active ? "inset 0px -8px 0px 0px #C21717" : "8px solid transparent" } 
    `;

let Logo = styled.h2 `
    width: auto;
    text-decoration: none;
    &:hover{
        opacity: .7;
    }
    &:active{
        
    }
`;
    // font-family: 'BauhausStd-Medium', cursive;
//  