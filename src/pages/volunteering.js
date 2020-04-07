import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaBitbucket, FaAt, FaLinkedin } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/resume.scss"


const VolunteeringPage = () => (
  <Layout>
    <SEO title="Volunteering" />
    <div className="resume-page-container">
    <h1>Volunteering and Extracurriculars</h1>   
    <div className="timeline-container">
      <div>
        <h2>
        Kingsway Church: Post Production Team Member
        </h2>
        <h3>Mar 20 - Curr</h3>
      </div>
      <div>
        <h2>
        Kingsway Church: Events Planning
        </h2>
        <h3>May 19 - Jun 19</h3>
      </div>
      <div>
        <h2>
        Comp Club UNSW: Sub Committee Member
        </h2>
        <h3>Feb 18 - Jan 19</h3>
      </div>
      <div>
        <h2>
       CSE UNSW: Student Network Mentor
        </h2>
        <h3>Jul 17 - Dec 17</h3>
      </div>
      <div>
        <h2>
        PPIA UNSW (Indonesian Society): Design and Documentation Committee Member
        </h2>
        <h3>Jun 16 - Jul 17</h3>
      </div>
      <div>
        <h2>
        UNSW Disability Services: Scribe
        </h2>
        <h3>Apr 17 - Jan 18</h3>
      </div>
      <div>
        <h2>
        Kingsway Church: Sunday School Teacher
        </h2>
        <h3>Jun 16 - Sep 17</h3>
      </div>
    </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default VolunteeringPage
