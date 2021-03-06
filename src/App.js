import React, {Component} from 'react'
import { Router, Route, Switch, Link, Redirect } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes';
import { normalize } from 'polished';
import Shell from './components/Shell'
import splashImage from './assets/splash-mobile3.svg';
import { media } from './components/Media';
import AppContent from './components/AppContent';

injectGlobal`
  html {
    font-size: 62.5%;
  }
 
  body {
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    color: #222;
    line-height: 1.5;
    letter-spacing: .1rem;
    font-family: 'Baumans', cursive;
    font-family: 'Muli', sans-serif;
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  p, span, li {
    letter-spacing: .02rem;
    font-size: 1.7rem;
  }
  a {
    text-decoration: none !important;
    color: black;
  }
  img {
    100%;
  }
  button {
    font-family: 'Work Sans', sans-serif;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
  }
  h2 {
    font-family: 'Nunito', sans-serif;
  }

  ul, ol {
      padding-left: 20px;
  }

  ${normalize()}
`;

const App = () => (
    <Router>
        <Route path="/:page?" render={(props) => (
          <AppContent {...props} />
        )}/> 
    </Router>
);

export default hot(module)(App);
