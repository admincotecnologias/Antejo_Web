import React, {Component} from 'react';
import ScrollSpy from 'react-scrollspy';
class Link extends Component{



  constructor(props){
    super(props);
    this.scrollAndDontRefresh = this.scrollAndDontRefresh.bind(this);
  }

  scrollAndDontRefresh(e){   // function scrollAndDontRefresh
    this.smoothScroll();
    e.preventDefault();
  }

    render = function () {
        return (
            <li id ={this.props.link+"H"}>
                  <a href={'#'} onClick={this.scrollAndDontRefresh}>
                    {this.props.name}
                  </a>
            </li>
        );
    }

     currentYPosition() {
      // Firefox, Chrome, Opera, Safari
      if (window.pageYOffset) return window.pageYOffset;
      // Internet Explorer 6 - standards mode
      if (document.documentElement && document.documentElement.scrollTop)
          return document.documentElement.scrollTop;
      // Internet Explorer 6, 7 and 8
      if (document.body.scrollTop) return document.body.scrollTop;
      return 0;
  }


   elmYPosition() {
      var elm = document.getElementById(this.props.link);
      var y = elm.offsetTop;
      var node = elm;
      while (node.offsetParent && node.offsetParent != document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
      } return y;
  }


   smoothScroll() {
      var startY = this.currentYPosition();
      var stopY = this.elmYPosition();
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
          window.scrollTo(0, stopY); return;
      }
      var speed = Math.round(distance / 100);
      if (speed >= 20) speed = 20;
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      if (stopY > startY) {
          for ( var i=startY; i<stopY; i+=step ) {
              setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
              leapY += step; if (leapY > stopY) leapY = stopY; timer++;
          } return;
      }
      for ( var i=startY; i>stopY; i-=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
      }
  }
};

export default Link;


//<a href={'#' + this.props.link}>{this.props.name}</a>
