import React, { Component } from "react";
import Heading from "./Heading";

class User extends Component {
  
  state = {
    user: '',
    avatar_url: '',
    name: '',
    location: ''
  }
  
  componentDidMount() {
      const {match: {params: {user}}} = this.props;
      
      fetch(`https://api.github.com/users/${user}`)
        .then(result => {
          return result.json()
        })
          .then(data => {
            console.log('data:', data)
            
            if (data && data.message) {
              window.alert(`Failed to retrieve info for user: ${user}`)
              return
            }

            if (data) {
              this.setState({
                avatar_url: data.avatar_url || '',
                name: data.name || '',
                location: data.location || ''
              })
            }

          })
  }

  render() {
    const {avatar_url, name, location} = this.state
    return (
      <div>
        <Heading title={'Person'}/>
        <div style={{margin: "auto" }}>
          <div className="row">
            <div className="col-3 col-sm-1">
              <img className="rounded-circle" src={avatar_url} width="70px"/>
            </div>
            <div className="col-9 col-sm-3">
              <p>
                {name}
              </p>
              <p>
                {location}
              </p>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
