import React, {Component} from "react"
import { Link } from "gatsby"
import { FaGithub, FaBitbucket, FaAt, FaLinkedin } from 'react-icons/fa';
import { IoIosStarOutline } from "react-icons/io" 

import Layout from "../components/layout"
import SEO from "../components/seo"

import dp from "../images/profile-picture.jpg"

export default class ResumePage extends Component {
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
        <SEO title="Resume" />
        <div className="page-container">
        <h1>Eunike on Paper <IoIosStarOutline /></h1>   
        <div className="contact-container">
          <img src={dp} className="display-picture"/>
          <div className="contact-details">
            <h1>
              <a href="mailto:eunikeutojo98@gmail.com"><FaAt /></a>
            </h1>
            <h1>
              < a href="https://linkedin.com/in/eutojo"><FaLinkedin /></a>
            </h1>
            <h1><a href="https://bitbucket.org/eutojo"><FaBitbucket /></a></h1>
            <h1>
            <a href="https://github.com/eutojo"><FaGithub /></a>
            </h1>
          </div>
        </div>

        
        <div className="item-section">
          <h1>Education</h1>
          <div className="item static">
            <h1>
            University of New South Wales
            </h1>
            <h2>Bachelor of Engineering (Computer Engineering) / Masters of Biomedical Engineering </h2>
            <h3>Feb 16 - Dec 20</h3>
            Weighted Average Mark: 75.03<br/> 
            Academic transcript available upon request.<br/>
            <br/>
            <a className='resume-button' href="https://drive.google.com/open?id=1MVaZEWEKVZN6KQ4uJFNQ7UFVrqUeJHwh">View resume</a>
            </div>
        </div>

        <div className="item-section">
          <h1>Experience</h1>
          <div className="item">
            <div  onClick={() => this.toggleSection("SE")}><h1>Technical Intern</h1>
            <h2>Schneider Electric</h2>
            <h3>Dec 19 - Current</h3></div>
            <ul id="SE">
            <li>Created a dashboard, using a combination of HTML and JavaScript, for the Pacific Field Services team which which contained a feature that was integral for decreasing overall lead time for deliveries.</li>
            <li>Automated many consolidation processes, increasing efficiency and ease of workflow, using Python and Bash scripts.</li>
            <li>Created a dashboard using Tableau, that aimed to allow planners to identify and address issues prompty, with a Microsoft Access back-end which performed extracts periodically using a combination of Visual Basic and a Bash script. </li>
            <li>Analysed historical data to identify discrepancies and areas of inefficiencies which need to be addressed and provided possible solutions to increase revenue.</li>
            <li>Designed and programmed a live traffic dashboard using APIs to provide the Control Tower with traffic information such that they are able to inform vendors when of possible late deliveries due to accidents or traffic congestion. </li>
            </ul>
          </div>

          <div className="item">
            <div onClick={() => this.toggleSection("FL")}><h1>Web Developer</h1>
            <h2>Freelance</h2>
            <h3>Sep 19 - Dec 19</h3></div>
            <ul id="FL">
            <li>Used a combination of HTML5, SCSS, PHP and JavaScript to create custom elements for WordPress websites based on specifications on Figma set out by clients.</li>
            <li>Worked with tools such as Fusion Builder and UX Builder, and modified pre-existing styles to suit the client's needs.</li>
            </ul>
          </div>
          
          <div className="item">
            <div onClick={() => this.toggleSection("UN")}><h1>Student Assistant</h1>
            <h2>University of New South Wales</h2>
            <h3>Sep 18 - Mar 19</h3></div>
            <ul id="UN">
            <li>Worked closely with PhD and their supervisors to design and create Powerpoint presentations, for events such as ESWEEK 2018, that deliver their work in the most effective and engaging manner.</li>
            </ul>
          </div>

          <div className="item">
            <div onClick={() => this.toggleSection("TL")}><h1>Data Entry Operator</h1>
            <h2>Toll Group</h2>
            <h3>Jun 17 - Dec 17</h3></div>
            <ul id="TL">
            <li>Responsible for Data Entry in the PMS system, ensuring high attention to detail and accurary.</li>
            <li>Worked efficiently to meet target deadlines without sacrificing quality of work, entering details of 100 shipping documents from major clients per hour.</li>
            </ul>
          </div>

          <div className="item">
            <div onClick={() => this.toggleSection("CC")}><h1>Assistant Teacher</h1>
            <h2>Code Camp</h2>
            <h3>Apr 17 - Jan 18</h3></div>
            <ul id="CC">
            <li>Assisted the Head Teacher in managing a class of 25 primary school children and helping them build their own games using Stencyl.</li>
            <li>Debugged programs quickly to ensure that students left the workshops with a sense of accomplishment.</li>
            <li>Simplified complex programming principles to young students such that they could grasp a basic understanding of coding.</li>
            </ul>
          </div>
          
          <div className="item">
            <div onClick={() => this.toggleSection("EZ")}><h1>Mathematics Tutor</h1>
            <h2>Ezy Maths Tutoring</h2>
            <h3>Jun 16 - Sep 17</h3></div>
            <ul id="EZ">
              <li>Provided assistance to high school students stuggling with mathematics to improve their skills and boost their confidence.</li>
              <li>Taught fundamentals of mathematics and the basics of mental maths, as well as encouraged clients to become more independent learners.</li>
              <li>Received feedback in the form of marks which improved with each report (which was highly rewarding!)</li>
            </ul>
          </div>

          <div className="item">
            <div onClick={() => this.toggleSection("SC")}><h1>Cafe All-Rounder</h1>
            <h2>San Churro Chocolateria</h2>
            <h3>Nov 13 - May 19</h3></div>
            <ul id="SC">
              <li> Worked as part of a rostered team to provide excellent customer service, which I have been commended for by regular customers, as well as store managers.</li>
              <li>Trusted with the induction of new employees, as well as for marketing and promotional ideas and graphics <a href="https://eunike.dev/blog/my-cafe-job">(check out this blogpost!)</a>.</li>
            </ul>
          </div>
        </div>
        </div>
      </Layout>
    );
  }
}

