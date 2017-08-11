import React, {Component} from 'react';


import Home from './../../components/home';
import About from './../../components/section/about';
import Work from './../../components/section/work';
import Skills from './../../components/section/skills';
import Education from './../../components/section/education';
import References from './../../components/section/references';
import Portfolio from './../../components/section/portfolio';
import Resume from './../../resume.example.json';
//const Routes = require('./routes');

function getResumePath() {
    if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
        return './../resume.json';
    }
    return './../resume.example.json';
}

function getNavigation() {
    return {
        home: 'Home',
        about: 'About',
        work: 'Work',
        education: 'Education',
        skill: 'Skills',
        portfolio: 'Portfolio',
        testimonials: 'References',
        login: 'Login'
    };
}

class Root extends Component{

  render(){

    var resume = this.state.resume;
    var resumePath = getResumePath();
    var navigation = getNavigation();
      return(
        <div id ="container">
          <Home route = {{
              config:{
                  navigation : navigation,
                  resumePath : resumePath
              }
            }}
          />
          <About content={resume.basics}/>
          <Work content={resume.work}/>
          <Education content={resume.education}/>
          <Skills content={resume}/>
          <Portfolio entry={resume.projects} content={Array.from(resume.projects)}/>
          <References content={resume.references}/>

        </div>
      )
  }

  componentWillMount(){
    this.setState({resume : Resume});
  }
}
 export default Root
