import React, { Component } from "react";
import {Link} from "react-router-dom";
import Heading from "./Heading";

const GITHUB_TOP_USERS = [
  "GrahamCampbell","fabpot","weierophinney","rkh","josh"
]

class Home extends Component {
  
  displayTopUsers = () => {
    return (
      <div className="row">
      {
        GITHUB_TOP_USERS.map((user, index) => {
          return (
            <div className="col-auto p-2">
              <Link to={`/user/${user}`} className="btn-link">
                {user}
              </Link>
            </div>
          )
        })
      }
      </div>
    )
  }

  render() {
    return (
      <div>
        <Heading title={'Home'}/>
        <div style={{margin: "auto" }}>
          <h3>Top {GITHUB_TOP_USERS.length} GitHub users</h3>
          <p>Tap the username to see more information</p>
          <p style={{paddingLeft: "5px", paddingRight: "5px"}}>
            {this.displayTopUsers()}
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
