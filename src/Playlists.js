import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { TweenLite, Back } from 'gsap'

import './App.css'


const duration = 5000;

const defaultStyle = {
  opacity: 0,
  transform: "translate(400px, 0)"
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};


class Playlists extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Transition
        in={this.props.in}
        timeout={duration}
        mountOnEnter={true}
        unmountOnExit={true}
        addEndListener={(n, done) => {
          if (this.props.in) {
            TweenLite.to(n, 1, {
              autoAlpha: 1,
              x: -20,
              ease: Back.easeOut,
              onComplete: done
            });
          } else {
            TweenLite.to(n, 1, { autoAlpha: 0, x: -200, onComplete: done });
          }
        }}
      >
        <div className="playlists-wrapper" style={{ ...defaultStyle }}>
          <div className="single-playlist">
            <h1 className="playlist-title">FADE IN/OUT COMPONENT</h1>
          </div>
        </div>
      </Transition>
    )
  }
}

export default Playlists