import React, { Component } from 'react';
import { render } from 'react-dom';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import 'animate.css';

class Recommender extends Component {
  constructor(props){
    super(props)
    this.randomWords = require('random-words');
    this.topics =["Business Trip", "Vacation", "Movie", "Sport", "Netflix Show"]
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render(){

   function get_random (list) {
      return list[Math.floor((Math.random()*list.length))];
   }  

    return (
      <div className="Receommender">
        
        <h2 class="animate__animated animate__bounce animate__infinite"> {get_random(this.topics)}</h2>
      </div>
    );
  }
}
export default Recommender;
