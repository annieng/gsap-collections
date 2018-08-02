import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TimelineLite } from 'gsap';

import Playlists from './Playlists'

// collectionArray = [
//   {}


// ]

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedCollection: 0,
      selectedPlaylist: 0,
      isChildVisible: false
    }
  }

  componentDidUpdate(prevProps, prevState) {

    // update for sliding
    const { selectedCollection: preSel } = prevState;
    const { selectedCollection } = this.state;

    if (preSel !== selectedCollection) {
      // take group and slide 
    }
    // update for clicking on collection

    // need second statement to handle updating of selectedPlaylist
  }

  nextClickHandler = () => {
    // const { selected } = this.state;
    // this.setState ({
    //   selected: (selected < (collectionArray.length -1) ? selected - 1 : 0 )
    // })

    // need to add catch
    // if selected is at array 0 then you cannot continue scrolling to left
    // if selected is at array.length then you cannot continue scrolling right
    this.setState ({
      selected: this.state.selected + 1
    })
    let tl1 = new TimelineLite()
    tl1
      .to('.collection-wrapper', 0.5, {x:'-=500px'})
  }

  prevClickHandler = () => {
    // const { selected } = this.state;
    // this.setState ({
    //   selected: (selected < (collectionArray.length -1) ? selected - 1 : 0 )
    // })

    // need to add catch
    // if selected is at array 0 then you cannot continue scrolling to left
    // if selected is at array.length then you cannot continue scrolling right

    this.setState ({
      selected: this.state.selected - 1
    })
    let tl1 = new TimelineLite()
    tl1
      .to('.collection-wrapper', 0.5, { x: '+=500px' })
  }

  selectCollection = () => {
    // const { selected } = this.state;
    // this.setState ({
    // selected: selected
    // })
  }

  toggleChild = () => {
    const { isChildVisible } = this.state;
    this.setState({ isChildVisible: !isChildVisible });
  }

  render() {
    return (
      <div>
      <div className='btn-wrapper'>
        {/* add disable for previous if this.state.selected = 0 */}
        <button id='next-btn' onClick={this.prevClickHandler}> prev </button>
      </div>
      <div className='wrapper'>


        <div className='nav-wrapper'>
        </div>

        <div className='main-wrapper'>

          <div className='collection-wrapper' id='wrapper1' onClick={this.toggleChild}>
            <img src='' alt='test' id='selected-collection-img' />
            <div id='selected-collection-info'>
                <h5 onClick={this.toggleChild}> collection-1 </h5>}
            </div>
              <Playlists in={this.state.isChildVisible} />
          </div>

          <div className='collection-wrapper' id='wrapper2' onClick={this.toggleChild}>
            <img src='' alt='test' id='selected-collection-img' />
            <div id='selected-collection-info'>
                <h5 onClick={this.toggleChild}> collection1 </h5>
            </div>
            <Playlists in={this.state.isChildVisible} />
          </div>

          <div className='collection-wrapper' id='wrapper3' onClick={this.toggleChild}>
            <img src='' alt='test' id='selected-collection-img' />
            <div id='selected-collection-info'>
                <h5 onClick={this.toggleChild}> collection2 </h5>
            </div>
              <Playlists in={this.state.isChildVisible} />
          </div>

        </div>

        <div className='footer-wrapper'>
        </div>

      </div>

      <div className='btn-wrapper'>
      {/* add disable for next if this.state.selected = array.length */}
        <button id='next-btn' onClick={this.nextClickHandler}> next </button>
      </div>
      </div>
    );
  }
}

export default App;
