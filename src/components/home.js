
import React, {Component} from 'react';
import Navigation from './navigation/';
import Header2 from './header.js';
import Resume from './../resume.example.json';
import Section from './section/index.js';


const request = require('superagent');



const Banner = require('./banner');
const ScrollDown = require('./scrolldown');

const Loading = require('./loading');

class Home extends Component{
    constructor(props) {
      super(props);
      this.state = this.getInitialState();
      console.log(Resume,this.state);
    }
    getInitialState = function () {
        return {
            resume: Resume
        };
    }
    onLoad = function () {

        return (
            <section id="home">
              <div>
                  <Header2>
                      <Navigation navigation={this.props.route.config.navigation}/>
                      <Banner basics={this.state.resume.basics}/>
                      <ScrollDown/>
                  </Header2>

              </div>
            </section>
        );
    }

    beforeLoad = function () {
        return (
            <Loading/>
        );
    }

    render = function () {
        return this.state.resume ? this.onLoad() : this.beforeLoad();
    }
};

export default Home;
