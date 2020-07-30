import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineLite, Power3 } from "gsap";
import Grid from './components/Grid';
import './App.scss';
import Rules from './components/Rules';
import About from './components/About';
import { PlayContainer, ParentDiv } from './styled/index';
import GitHubIcon from '@material-ui/icons/GitHub';


function App() {
  // in other projects this can live in a gsap file
  // make a timeline builder out of it for components
  let app = useRef(null);
  let componentRef = useRef(null);
  let aboutRef = useRef(null);
  let tl = new TimelineLite();
  // let split = new SplitText(title.current);
  useEffect(() => {
    // componentRef vars
    const title = app.firstElementChild // not best 
    const playArea = componentRef.firstElementChild
    const ruleComponent = componentRef.lastElementChild
    TweenMax.to(app, 0, {css: {visibility: 'visible'}});
    tl.from(title, .5, {x: 1000, ease: Power3.easeOut});
    tl.from(playArea, .5, {x: -1000, ease: Power3.easeOut});
    tl.from(ruleComponent, .5, {x: 1000, ease: Power3.easeOut});
    tl.from(aboutRef, 1, {x: -10000, ease: Power3.easeOut});
  },[tl]);
  return(
    <ParentDiv ref={el => app = el} className="App">
      <h1 id="webpage-title">Lando's Game of Life</h1>
      <PlayContainer 
      ref={el => componentRef = el}
      className="grid-and-rules">
        <Grid className="grid-component" />
        <Rules className="rules-component" />
      </PlayContainer>
      <div 
      ref={el => aboutRef = el}
      className="about-reference">
        <About />
      </div>
      <footer style={{
        color: 'white',
        textAlign: 'center',
        marginBottom: '.5%'
      }}>landoDev <a style={{ 
        color: 'white',
      }} href="https://github.com/landoDev"><GitHubIcon /></a></footer>
    </ParentDiv>
    
  ) 
}

export default App;
