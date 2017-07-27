import React, {Component} from 'react';
class Header2 extends Component{
    constructor(props){
      console.log("holaHeader");
      super(props)
      this.state = this.getInitialState();
    }
    getInitialState = function () {
        return {
            window: {
                height: 0,
                width: 0
            }
        };
    }

    updateDimensions = function () {
        return this.state = {
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        };
    }

    componentWillMount = function () {
        this.updateDimensions();
    }

    componentDidMount = function () {
        return window.addEventListener('resize', this.updateDimensions);
    }

    render = function () {
        const style = {
            height: this.state.window.height
        };
        return (
            <header style={style}>
                {this.props.children}
            </header>
        );
    }
};

export default Header2
