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
