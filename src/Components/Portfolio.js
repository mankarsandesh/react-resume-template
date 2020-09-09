import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function(projects) {
       

        return (
          <div key={projects.title}>
            <h3>{projects.title}</h3>
            <p className="info">
              {projects.category}               
            </p>
            <p>{projects.description} <br/>
            <b>My Contribution : </b> {projects.contribution} <br/>
            <b>Technology : </b> {projects.technology}
            </p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className=" columns header-col">
            <h1>
              <span>PROJECTS</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="columns main-col">{projects}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
