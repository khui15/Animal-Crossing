import React, {Component} from "react"
import { Link } from "gatsby"
import { IoIosStarOutline } from "react-icons/io" 

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../styles/resume.scss"
export default class VolunteeringPage extends Component {
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
return (
  <Layout>
    <SEO title="Volunteering" />
    <div className="page-container">
    <h1>Volunteering and Extracurriculars <IoIosStarOutline /></h1>
    <div className="info-section-container">
      <h2>Apart from programming, I try and learn new skills such as video editing and teaching. What better way to learn than to put myself out there and try new experiences. </h2>
    </div>   

    <div className="item-section">
      <div className="item">
        <div onClick={() => this.toggleSection("PP")}>
          <h1>Post Production Team Member</h1>
          <h2>Kingsway Church</h2>
          <h3>Mar 20 - Curr</h3>
        </div>
        <ul id="PP">
          <li>Responsible for synchronising the audio with the video and for adding subtitles to clips.</li>
          <li>Compiled and arranged media using Final Cut Pro, as well as Adobe Premier</li>
        </ul>
      </div>

      <div class="item">
        <div onClick={() => this.toggleSection("KW")}>
          <h1>Events Planning Committee</h1>
          <h2>Kingsway Church</h2>
          <h3>May 19 - Jul 19</h3>
        </div>
        <ul id="KW">
          <li>Help organise social events for the church community to encourage fellowship.</li>
          <li>Created a Capture-The-Flag (CTF) for the church community, using a JavaScript front-end and Python back-end, filled with riddles and puzzles.</li>
          <li>Learnt the basics of deploying an AWS instance.</li>
        </ul>
      </div>
      
      <div class="item">
        <div onClick={() => this.toggleSection("CC")}>
          <h1>Subcommittee Member</h1>
          <h2>Comp Club UNSW</h2>
          <h3>Feb 18 - Jan 19</h3>
        </div>
        <ul id="CC">
          <li>Created and led workshops, using PyGame and Python turtle, for high school children to introduce them into the world of game development.</li>
          <li>Helped other members run workshops on various topics such as security, web development and hardware programming using MicroBits.</li>
          <li>Ran and introductory Python workshop for Young Scientists of Australia (YSA).</li>
        </ul>
      </div>

      <div class="item">
        <h1>Student Network Mentor</h1>
        <h2>CSE UNSW</h2>
        <h3>Jul 17 - Dec 17</h3>
      </div>

      <div class="item">
        <div onClick={() => this.toggleSection("PI")}>
          <h1>Design and Documentation Committee Member</h1>
          <h2>PPIA UNSW (Indonesian Society)</h2>
          <h3>Jun 16 - Jul 17</h3>
        </div>
        <ul id="PI">
          <li>Responsible for creating marketing material such as graphics for Instagram and Facebook posts.</li>
          <li>Contributed to designing logos and merchandise which were core to the society's branding.</li>
          <li>Helped take pictures for events such as the Indonesian Night Market.</li>
        </ul>
      </div>

      <div class="item">
        <h1>Scribe</h1>
        <h2>UNSW Disability Services</h2>
        <h3>Apr 16 - Jan 16</h3>
      </div>

      <div class="item">
        <div onClick={() => this.toggleSection("CM")}>
          <h1>Secretary</h1>
          <h2>Community Mates</h2>
          <h3>Jan 16 - Oct 16</h3>
        </div>
        <ul id="CM">
          <li>Responsible for taking down minutes of the meetings.</li>
          <li>Aimed to get Community Mates become affiliated by Arc UNSW.</li>
        </ul>
      </div>

      <div class="item">
        <h1>Sunday School Teacher</h1>
        <h2>Indonesian Presbyterian Church</h2>
        <h3>Jan 16 - Dec 16</h3>
      </div>

    </div>
    </div>
  </Layout>
);
}
}