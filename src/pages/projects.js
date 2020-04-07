import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/projects.scss"
import "../components/functions"



// const ProjectsPage = () => (
export default class PojectsPage extends Component {

  // state = {
  //   spotter: 1
  // }
  constructor(props){
    super(props);
    this.state = {
      spotter: 1
    };

    this.updateProjectSpotter = this.updateProjectSpotter.bind(this);
  };

  updateProjectSpotter() {
    let curr = this.state.spotter;
    curr++;
    curr = curr % 3;
    this.setState({
      spotter: curr
    })
    console.log(this.state.spotter)
  }

  render(){
    

    return(
  <Layout>
    <SEO title="Projects" />
    <h1>Programming Magic</h1>   
    <div className="projects-container" alt="">
      <div>
        <h1>
          Thesis Project
        </h1>
        
        <h2>
          Incorporating Audio Feedback into a Fall Detector
        </h2>
      </div>

      <div>
        <h1>
          Clinical Information Systems Project
        </h1>
        <h2>
          Physiology Database
        </h2>
      </div>

      <div>
        <h1>
          Personal Project
        </h1>
        <h2>
          First ReactJS Website
        </h2>
      </div>

      <div>
        <h1>
          Management Major Project
        </h1>
        <div className={'project-spotter-carousel-' + this.state.spotter} onClick={this.updateProjectSpotter}></div>
        <h2>
          Gym Buddy Matching Application
        </h2>
      </div>

    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
// )
    );
}
}

