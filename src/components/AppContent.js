import React, { Component } from 'react';
import { Router, Route, Switch, Link, Redirect } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes';
import { normalize } from 'polished';
import Shell from './Shell'
import splashImage from '../assets/splash-mobile3.svg';
import { media } from './Media';

class AppContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canExitSplash: true
        };
    }

    // componentDidMount () {
    //     this.splashScrollRef.addEventListener('scroll', () => {console.log('asdasdasdqwdqwdqwd')});
    // }

    // componentWillUnmount () {
    //     window.removeEventListener('scroll', this.exitSplash);
    // }

    exitSplash () {
        if (this.state.canExitSplash) this.props.history.replace('/portfolio');
        this.setState({
            canExitSplash: false
        });
    }

    render () {
        let { match, history } = this.props,
            {canExitSplash} = this.state;

        return (
            <div ref={elem => this.splashScrollRef = elem}>
                <Content>
                    <Splash  {...{ expand: !match.params.page }}>
                        {/* <div style={{width: '100%', height: '100%', backgroundColor: 'blue'}} /> */}
                        <img src={splashImage}   />
                    </Splash>
                    <SiteContent {...{ expand: !!match.params.page }}>
                        {/* <div style={{ width: '100%', height: '100%', backgroundColor: 'red'}} /> */}
                        <Shell {...this.props}>
                            <Routes />
                        </Shell>
                    </SiteContent>
                </Content>
                {canExitSplash &&
                    <div style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'auto'}} 
                        onScroll={this.exitSplash.bind(this)}
                        onClick={this.exitSplash.bind(this)}
                    >
                        <div style={{width: '1px', height: '101vh'}} />
                    </div>
                }
            </div>
        );
    }
}

export default AppContent;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

let Splash = styled.div`
  flex: ${props => `${(props.expand) ? '1' : '0'}`};
  overflow: hidden;
  width: 100vw;
  transition: flex 750ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
width: 100vw;
    ${media.phone`
      transition: transform 750ms ease-in-out;
      transform: scale(1.5)translate(0,${props => ((props.expand) ? '-0%' : 'calc(-0% + -50vh)')})rotate(0deg);
    `}
    ${media.tablet`
      transition: transform 750ms ease-in-out;
      transform: scale(1.3)translate(0%,${props => ((props.expand) ? '-0%' : 'calc(-0% + -50vh)')})rotate(0deg);
    `} 
    ${media.desktop`
      transition: transform 750ms ease-in-out;
      transform: scale(1.3)translate(0%,${props => ((props.expand) ? '-0%' : 'calc(-0% + -50vh)')})rotate(${props => ((props.expand) ? '-45deg' : '0deg')});
    `} 
    ${media.giant`
      transition: transform 750ms ease-in-out;
      transform: scale(1.2)translate(-2%,${props => ((props.expand) ? '-2%' : 'calc(-2% + -50vh)')})rotate(${props => ((props.expand) ? '-45deg' : '0deg')});
    `} 
    } 
`;
let SiteContent = styled.div`
  width: 100vw;
  transition: flex 750ms ease-in-out;
  overflow: scroll;
  flex: ${props => `${(props.expand) ? '1' : '0'}`}
`;
// transform: scale(1.2)translate(-2 %, -2 %)rotate(-45deg);

// width: 100vw;
// ${
//   media.phone`
//       transition: all 1s ease-in-out;
//       transform: scale(1.5)translate(0,0%)rotate(0deg);
//     `}
// ${
//   media.tablet`
//       transition: all 1s ease-in-out;
//       transform: scale(1.4)translate(0%,15.5%)rotate(0deg);
//     `}
// ${
//   media.desktop`
//       transition: all 1s ease-in-out;
//       transform: scale(1.3)translate(-2%,18%)rotate(-45deg);
//     `}
// ${
//   media.giant`
//       transition: all 1s ease-in-out;
//       transform: scale(1.2)translate(-2%,23.5%)rotate(-45deg);
//     `} 
//     } 

