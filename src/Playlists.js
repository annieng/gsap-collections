import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { TweenLite, Back } from 'gsap'

import './App.css'


const duration = 5000;

const defaultStyle = {
  opacity: 0,
  transform: "translate(300px, 0)"
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
              x: 0,
              ease: Back.easeOut,
              onComplete: done
            });
          } else {
            TweenLite.to(n, 1, { autoAlpha: 0, x: -100, onComplete: done });
          }
        }}
      >
        <div className="card" style={{ marginTop: "10px", ...defaultStyle }}>
          <div className="card-block">
            <h1 className="text-center">FADE IN/OUT COMPONENT</h1>
          </div>
        </div>
      </Transition>
    )
  }
}

export default Playlists