import React, { Component } from "react";

import { Link } from '@reach/router';

class Header extends Component {
  render() {
    return (
      <div className="text-center">
       <Link to="/">  <img
          src="https://www.gea.gov.sa/media/2193/rs-banner.png"
          width="400"
          height='150'
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        </Link> 
      </div>
    );
  }
}

export default Header;
