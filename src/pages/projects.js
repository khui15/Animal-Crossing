import React, {Component} from "react"
import { Link } from "gatsby"
import { IoIosStarOutline, IoMdArrowForward } from "react-icons/io" 

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/functions"

export default class PojectsPage extends Component {
  constructor(props){
    super(props)

    this.toggleSection = this.toggleSection.bind(this)
  }

  toggleSection(section){
    var section = document.getElementById(section)
    if (section.classList.contains("expanded")){
      section.classList.remove("expanded")
    } else {
      section.classList.add("expanded")
    }
  }

  render(){
    
    return(
  <Layout>
    <SEO title="Projects" />
    <div className="page-container">
      <h1>Programming Magic <IoIosStarOutline /> </h1>   
      <div className="info-section-container">
        <h2>Here is a section of the many projects I've completed to demonstrate my abilities and the range of my programming skills.</h2>
      </div>
      <div className="item-section">

        <div class="item">
          <div onClick={() => this.toggleSection("AC")}>
            <h1>Animal Crossing Website</h1>
            <h2>Displaying available resources</h2>
            <h3>ReactJS, SCSS</h3>
          </div>
          <ul id="AC">
            <li>Enjoyed animal crossing but found it tedious to try and figure out when I can catch certain bugs and fish, so I created a website using React to solve that problem.</li>
            <li><IoMdArrowForward /><a href="https://animal-crossing-catches.eunike.dev"> View website</a></li>
            <li><IoMdArrowForward /><a href="https://eunike.dev/blog/animal-crossing-project/"> View blog</a></li>
          </ul>
        </div>

        <div class="item">
          <div onClick={() => this.toggleSection("TH")}>
            <h1>Thesis Project</h1>
            <h2>Incorporating Audio Feedback into a Fall Detector</h2>
            <h3>C, TypeScript</h3>
          </div>
          <ul id="TH">
            <li>Was responsible for integrating Bluetooth Low Energy onto the existing fall detection device, as well as for designing and constructing the circuitry required for a speaker component.</li>
            <li>Hardware programming was done using C and used IDEs such as Code Composer and IAR EW for Arm.</li>
            <li>Was also responsible for designing and creating the user interface on the tablet side.</li>
            <li>Front-end programming was done using TypeScript.</li>
            <li><IoMdArrowForward /><a href="https://eunike.dev/blog/thesis-experience/"> View blog</a></li>
          </ul>
        </div>

        <div class="item">
          <div onClick={() => this.toggleSection("IS")}>
            <h1>Clinical Information Systems Project</h1>
            <h2>Physiology Database</h2>
            <h3>HTML, JavaScript, PHP, SQL</h3>
          </div>
          <ul id="IS">
            <li>Created a simple website with a back-end which accessed a Microsoft Access database using PHP and SQL.</li>
            <li>Realised I enjoyed working with SQL.</li>
            <li><IoMdArrowForward /><a href="https://bitbucket.org/eutojo/clinical-project/src"> View code</a></li>
          </ul>
        </div>

        <div class="item">
          <div onClick={() => this.toggleSection("SE")}>
            <h1>Security Something Awesome</h1>
            <h2>Piggy Bank Emulator</h2>
            <h3>AVR Assembly</h3>
          </div>
          <ul id="SE">
            <li>Was required to complete a "security" project as part of the course and decided to create a piggy bank out of an ATMEGA2560.</li>
            <li>Decided to work on a hardware project because I enjoyed it and missed working with low level languages.</li>
            <li>Programming was done using AVR Assembly and debugged using ATMEL Studio.</li>
            <li><IoMdArrowForward /><a href="https://public-insecurities.tumblr.com/post/186465070120/job-application-something-awesome"> View blog</a></li>
          </ul>
        </div>

        <div class="item">
          <div onClick={() => this.toggleSection("WB")}>
            <h1>My First Website</h1>
            <h2>Learning ReactJS</h2>
            <h3>ReactJS, SCSS</h3>
          </div>
          <ul id="WB">
            <li>Unfortunately, this isn't around anymore because I've updated it to look like the way it does now!</li>
            <li>Originally created using ReactJS alone, but has been upgraded to use GatsbyJS to perform queries using GraphQL.</li>
            <li>Obsessed with SCSS because it allows you to do nested styling.</li>
          </ul>
        </div>

        <div class="item">
          <div onClick={() => this.toggleSection("WW")}>
            <h1>Ethics and Management Major Project</h1>
            <h2>Gym Buddy Matching Application</h2>
            <h3>React Native, NodeJS, MongoDB</h3>
          </div>
          <ul id="WW">
            <li>Responsible mainly for creating mock-ups using Sketch, and for programming the front-end of the application using React Native.</li>
            <li>Helped link the front-end with the back-end, run on NodeJS, as well as for integrating a MongoDB database into the application.</li>
            <li>Enjoyed creating wireframes using Sketch.</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
// )
    );
}
}

