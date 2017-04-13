import React, { Component } from 'react';
import './App.css';

class websiteFrames extends Component {
  constructor() {
    super();
    this.state = {
      websites: Array(),
    };
  }

  render() {
    return(
      <div>
        <addButton />
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
    };
  }
  render() {
    if (this.state.page == 1) {
      return (
        <div className="App">
          <div className="App-header">
            Useful Web Design Tutorials and Websites
            <a href="#" className="about"> about</a>
          </div>
          <a href="#">
            <div className="addCard">
              +
            </div>
          </a>
          <a href="https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935">
            <div className="webCard">
              <img className = "webCardPicture" src={require('./testSite.png')} />
              <div className="webCardTitle">
                UI Animations with React — The Right Way – Joe Davis – Medium
              </div>
              <div className="webCardBody">
                This website has some useful information on animation in ReactJS using ReactCssTransitions (now deprecated). This may be a good starting point to get animations up and running.
              </div>
            </div>
          </a>
          <a href="https://www.w3schools.com/default.asp">
            <div className="webCard">
              <img className = "webCardPicture" src={require('./testSite2.png')} />
              <div className="webCardTitle">
                W3Schools Online Web Tutorials
              </div>
              <div className="webCardBody">
                Reference materials for HTML, CSS, and JavaScript are organized well on this website. There are also tutorials for many of the functions of each language, as well as templates for websites.
              </div>
            </div>
          </a>
          <a href="https://developer.mozilla.org/en-US/">
            <div className="webCard">
              <img className = "webCardPicture" src={require('./testSite3.png')} />
              <div className="webCardTitle">
                Mozilla Developer Network
              </div>
              <div className="webCardBody">
                Reference materials for HTML, CSS, JavaScript, and more are available through Mozilla's Developer Network. Mozilla also has a collection of web development tutorials, and have multiple developer tools available for website inspection and debugging.
              </div>
            </div>
          </a>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="App-header">
            Useful Web Design Tutorials and Websites
          </div>
          <p>
            This is a website made for storing useful links to help learn ReactJS, CSS, and JavaScript code. //TODO add more websites
          </p>
        </div>
      );
    }
  }
}

export default App;
