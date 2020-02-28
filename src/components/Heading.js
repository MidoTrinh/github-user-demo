import React, { Component } from "react";
import Back from "./Back"

class Heading extends Component {
  render() {
    
    return (
      <div 
        class="jumbotron text-center" 
        style={{
          color: '#fff',
          backgroundColor: '#222836',
          padding: '0.5rem 0rem'
        }}
      >
        
        <h2>
          {
            window.location.pathname !== "/" && <Back />
          }
          {this.props.title}
        </h2>
      </div>
    );
  }
}

export default Heading;
