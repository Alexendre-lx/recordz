import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class mainpage extends Component {
    render() {
        return (
            <div>
                <div class="mainHeader">
                    <div class="animated-title">
                        <div class="text-top">
                            <div>
                            <span>Welcome</span>
                            <span>To</span>
                            </div>
                        </div>
                        <div class="text-bottom">
                            <div>Recordz</div>
                        </div>
                    </div>
                </div>
                <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
  
                </div>


                <div class="presentations" style={{backgroundColor:"blue",}}>
                <ScrollAnimation animateIn="fadeIn">
                <img src="https://cdn.pixabay.com/photo/2015/01/20/13/13/ipad-605439_960_720.jpg"></img>
                </ScrollAnimation>
                </div>
                <div class="presentations"style={{ backgroundColor:"green"}}>
                <ScrollAnimation animateIn="fadeIn">
                <h1> test 1</h1>
                </ScrollAnimation>
                </div>
                <div class="presentations"style={{backgroundColor:"red"}}>
                <ScrollAnimation animateIn="fadeIn">
                <h1> test 1</h1>
                </ScrollAnimation>
                </div>
                <div class="faq">

                </div>
            </div>
        );
    }
}

export default mainpage;