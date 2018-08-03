import React, { Component } from 'react';
import './App.css';
import { TimelineLite } from 'gsap';

import Playlists from './Playlists'

const collectionArray = [
  {
    "id": 1,
    "name": "Disco",
    "src": 'url',
    "members": {
      "owner": "Annie Ng",
      "member1": "AJ Jay",
      "member2": "RJ Ray"
    },
    "playlists": [
      {
        "id": 1,
        "name": "Italo Disco",
      },
      {
        "id": 2,
        "name": "Synth Popsicle",
      },
      {
        "id": 3,
        "name": "French House Disco",
      },
  ]  
  },
  {
    "id": 2,
    "name": "RnB",
    "src": 'url',
    "members": {
      "owner": "Annie Ng",
      "member1": "AJ Jay",
      "member2": "RJ Ray"
    },
    "playlists": [
      {
        "id": 1,
        "name": "Throwback",
      },
      {
        "id": 2,
        "name": "New",
      },
      {
        "id": 3,
        "name": "Party",
      },
    ]
  },
  {
    "id": 3,
    "name": "Experimental",
    "src": 'url',
    "members": {
      "owner": "Annie Ng",
      "member1": "AJ Jay",
      "member2": "RJ Ray"
    },
    "playlists": [
      {
        "id": 1,
        "name": "EBM",
      },
      {
        "id": 2,
        "name": "Melodic",
      },
      {
        "id": 3,
        "name": "Top40 Revisited",
      },
    ]
  },
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      collections: [],
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
        let groupX, currentX, resetX;
        // catching edge case to restart loop and reset positions for all
        if (selectedCollection === 0) {
          groupX = resetX = 0;
          currentX = "+=200";
        } else {
          groupX = currentX = "+=150";
          // take off screen 
          resetX = (300 * preSel) - 2000
        }
        const _collections = this.state.collections;
        console.log(preSel)
        console.log(selectedCollection)

        const tl = new TimelineLite({ paused: true });
        tl
          .to(_collections, 0.5, { x: groupX }, 0)
          .to(_collections[preSel], 0.5, { x: currentX }, 0)
          .set(_collections[preSel], { x: resetX })
          .play();
      }
    }
    // take group and slide 
    // update for clicking on collection
    // need second statement to handle updating of selectedPlaylist
  

  nextClickHandler = () => {
    // const { selected } = this.state;
    // this.setState ({
    //   selected: (selected < (collectionArray.length -1) ? selected - 1 : 0 )
    // })

    // need to add catch
    // if selected is at array 0 then you cannot continue scrolling to left
    // if selected is at array.length then you cannot continue scrolling right
    this.setState ({
      selectedCollection: this.state.selectedCollection + 1
    })
    // let tl1 = new TimelineLite()
    // tl1
    //   .to('.collection-wrapper', 0.5, {x:'-=500px'})
  }

  prevClickHandler = () => {

    // need to add catch
    // if selected is at array 0 then you cannot continue scrolling to left
    // if selected is at array.length then you cannot continue scrolling right

    this.setState ({
      selectedCollection: this.state.selected - 1
    })
    let tl1 = new TimelineLite()
    tl1
      .to('.collection-wrapper', 0.5, { x: '+=500px' })
  }


  toggleChild = () => {
    const { selectedCollection } = this.state
    const tlc = new TimelineLite()
    tlc.
      to('.collection-wrapper', 0.5, {
        x: 0, 
        minWidth: '600px', 
        width: '600px',
        height: '400px',
        minHeight: '400px',
        position: 'absolute',
        margin: '0',
        top: '0',
        backgrounColor: '#FFFFFF',
        overflow: 'visible'
      })
      .to('.nav-wrapper', 0.5, {x: '-1000'}, -0.5)
      .to('.main-wrapper', 0.5, {height: '800px', minHeight: '800px', backgroundColor: 'black'}, -0.5)
      .to('.footer-wrapper', 0.5, {x: '+1000'}, -0.5)
    const { isChildVisible } = this.state;
    this.setState({ isChildVisible: !isChildVisible });

    // things to change about child toggle
    // should not toggle all children, only selected children
    // group all other elements other than selected to have 
    // either unmounted or moved off screen
    // ie. need to deconstruct to map array (think of previous gallery)
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
          
          {/* <div className='collection-wrapper' id='wrapper1' onClick={this.toggleChild}>
                <h5 onClick={this.toggleChild}> collection-1 </h5>}
              <Playlists in={this.state.isChildVisible} />
          </div> */}



          
            {collectionArray.map((e,i) =>
              <div key={e.id}
              data-target ={i}
              ref={collection => this.state.collections.push(collection)}
              className='collection-wrapper'
              onClick={this.toggleChild}
              // pass in data to make as background image(rewrite css)
              src='url'>
              {/* <div id='img-wrapper'>
                
              </div> */}

              <Playlists 
                collections={this.state.collections}
                in={this.state.isChildVisible}/> 
              {/* pass in child component here, get each collectionassociated with each child */}

              </div> 
          )}  
        
        
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
