import React from 'react';
import './About.css'
import img from '../../img/about.jpg'

const About = () => {
    return (
        <section className='about'>
            <div className='main'>
                <img src={img} alt="" />
                <div className='about-text'>
                    <h1>About Me</h1>
                    <h5>Jafir Anjum</h5>
                    <p>My name is Jafir Anjum. I read in class 9. I want to know more deep of programming language. My goal is to become a Full Stack Web Developer. </p>
                </div>
            </div>
        </section>
    );
};

export default About;