import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
    <i
      className="fas fa-chevron-left float-left" 
      onClick={history.goBack}
      style={{
        backgroundColor: '#222836', color: '#fff', border: 'none', fontSize: '20px',
        padding: '0.5rem 0rem 0.5rem 0.5rem'
      }}
    >
      { } Back
    </i>
  
);

export default withRouter(Back);
