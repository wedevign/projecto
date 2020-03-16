import React, { Component } from 'react';
import './style.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bg: '#2A2D34',
      fade: false
    };
  }

  componentDidMount() {
    document.documentElement.style.setProperty('--background', this.state.bg);
  }

  transition() {

  }
  
  render() {
    const fade = this.state.fade;

    return(
      <div id="home">
        <div className="main-outercontainer">
          <ul className="bg-triangles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div 
              className={fade ? 'fade' : ''}>
            
            </div>
          <div className="main-innercontainer">
            <h1 className="header-text">PROJECTO</h1>
            <h3 className="subheader-text">Your idea, your creation, your project_</h3>
            
            <div className="button-container">
              <a 
                href="/register" 
                id="left"
                onClick={() => this.setState({ fade: true })}
                >
                  Register
              </a>
              <a 
                href="/login" 
                id="right"
                onClick={() => this.setState({ fade: true })}
                >
                  Login
              </a>
            </div>

            <div className="spikes">
              <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="318.593" viewBox="0 0 1920 318.593">
                <path id="Path_1" data-name="Path 1" d="M0,0,214.735,26.622,484.612-64.593,783.153,26.622l279.472-11.052L1283.8,71.439l385.14-85.869L1920,24.071V254H0Z" transform="translate(0 64.593)" fill="#31343b"/>
              </svg>  
            </div>
          </div>
          
        </div>
      </div>
    );
    }
  }

export default Home;