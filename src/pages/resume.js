import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaBitbucket, FaAt, FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"

import dp from "../images/profile_picture.jpg"

import "../styles/resume.scss"


const SecondPage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className="resume-page-container">
    <h1>Eunike on Paper</h1>   
    <div className="contact-container">
      <img src={dp} className="display-picture"/>
      {/* <h2>Find Me</h2> */}
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
    <h2>Education</h2>
    <div className="education-container">
      <h2>
      University of New South Wales
      </h2>
      <h3>Feb 16 - Dec 20</h3>
      Bachelor of Engineering (Computer Engineering) / Masters of Biomedical Engineering <br/>
      Weighted Average Mark: 75.03<br/> 
      Academic transcript available upon request.
    </div>
    <h2>Experience</h2>
    <div className="timeline-container">
      <div>
        <h2>
        Schneider Electric: Technical Intern
        </h2>
        <h3>Dec 19 - Curr</h3>
      </div>
      <div>
        <h2>
        Freelance: Web Developer
        </h2>
        <h3>Sep 19 - Dec 19</h3>
      </div>
      <div>
        <h2>
        University of New South Wales: Student Assistant
        </h2>
        <h3>Sep 18 - Mar 19</h3>
      </div>
      <div>
        <h2>
        Toll Group: Data Entry Operator
        </h2>
        <h3>Jun 17 - Dec 17</h3>
      </div>
      <div>
        <h2>
        Code Camp: Assistant Teacher
        </h2>
        <h3>Apr 17 - Jan 18</h3>
      </div>
      <div>
        <h2>
        Ezy Maths Tutoring: Mathematics Teacher
        </h2>
        <h3>Jun 16 - Sep 17</h3>
      </div>
      <div>
        <h2>
        San Churro: Cafe All-Rounder
        </h2>
        <h3>Nov 13 - May 19</h3>
      </div>
    </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
