

import Resume from './../../resume.example.json';
import React, {Component} from 'react';
import {Link,Switch,Route,Redirect} from 'react-router-dom'

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Work = require('./work');
const Education = require('./education');
const Skills = require('./skills');
const Portfolio = require('./portfolio');
const References = require('./references');
const Footer = require('./footer');



class Section extends Component{
    constructor(props){
      super(props)
      this.state = this.getInitialState();
    }

    getInitialState(){
      return{
        resume:Resume,
        skillsContent : {
          skills:Resume.skills,
          languages:Resume.languages
        }
      };
    }
    render () {
        return (
            <div >
            
            </div>
        );
    }
};

export default Section;

/*
<About content={this.state.resume.basics}/>
<Work content={Array.from(this.state.resume.work)}/>
<Education content={Array.from(this.state.resume.education)}/>
<Skills content={this.state.skillsContent}/>
<Portfolio entry={this.state.resume.projects} content={Array.from(this.state.resume.projects)}/>
<References content={this.state.resume.references} />
<Footer content={this.state.resume.basics}/>
*/
