import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaBitbucket, FaPaperPlane, FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"

import dp from "../images/profile_picture.jpg"

import "../styles/resume.scss"


const SecondPage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className="resume-page-container">
    <h1>Eunike on Paper</h1>
    <img src={dp} className="display-picture"/>
    <h2>Contact Me</h2>
    <div className="contact-container">
      <div style={{display: 'flex', flexDirection:'column'}}>
        <h1>
          <a href="mailto:eunikeutojo98@gmail.com"><FaPaperPlane /></a>
        </h1>
        <h1>
          < a href="https://linkedin.com/in/eutojo"><FaLinkedin /></a>
        </h1>
      </div>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <h1><a href="https://bitbucket.org/eutojo"><FaBitbucket /></a></h1>
        <h1>
        <a href="https://github.com/eutojo"><FaGithub /></a>
        </h1>
        </div>
    </div>
    <h2>Education</h2>
    <h2>Experience</h2>
    <div className="resume container">

      <div className="timeline_item">
          <h2>Dec 19 - Curr</h2>
          <div className="timeline_details">
            <h3>Engineering Intern</h3>
            <h3>Schneider Electric</h3>
          </div>
        </div>
      <div className="timeline_item">
          <h2>Sep 19 - Dec 19</h2>
          <div className="timeline_details">
            <h3>Wordpress Developer</h3>
            <h3>Freelance</h3>
          </div>
        </div>
      
      <div className="timeline_item">
        <h2>Sep 18 - Mar 19</h2>
        <div className="timeline_details">
          <h3>Student Assistant</h3>
          <h3>University of New South Wales</h3>
        </div>
      </div>

      <div className="timeline_item">
        <h2>Jun 17 - Sep Dec 17</h2>
        <div className="timeline_details">
          <h3>Data Entry Operator</h3>
          <h3>Toll Group</h3>
        </div>
      </div>

      <div className="timeline_item">
        <h2>Apr 17 - Jan 18</h2>
        <div className="timeline_details">
          <h3>Assistant Teacher</h3>
          <h3>Code Camp</h3>
        </div>
      </div>

      <div className="timeline_item">
        <h2>Jun 16 - Sep 17</h2>
        <div className="timeline_details">
          <h3>Highschool Mathematics Tutor</h3>
          <h3>Ezy Maths Tutoring</h3>
        </div>
      </div>

      <div className="timeline_item">
        <h2>Nov 13 - May 19</h2>
        <div className="timeline_details">
          <h3>Cafe All-Rounder</h3>
          <h3>San Churro Chocolateria</h3>
        </div>
      </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


const timeline_details = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1em',
}

export default SecondPage
