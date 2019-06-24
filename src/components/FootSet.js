import React from "react";

const footPadding = {
  marginTop: 100,
  marginBottom:0,
}

function FootSet() {
  return(
    <footer style={footPadding} className="page-footer blue-grey darken-4 ">
    <div className="container">
      <div className="row">
        <div className="col l6 s12 center-align">
          <p className="grey-text text-lighten-4"><img src="https://www.firstcomicsnews.com/wp-content/uploads/2016/09/Scooby-Doo-Logo-600x257.png" alt="" width="200"/></p>
          <p className="grey-text text-lighten-4">Made by Alex Bowden using React.js and Materialize.css</p>
        </div>
        <div className="col l4 offset-l2 s12  center-align">
          <h5 className="white-textn">Links</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Github Repository</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Portfolio</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">React.js</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Materialize.css</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="center-align container">
      © 2019 Copyright
      </div>
    </div>
  </footer>
  );
}

export default FootSet;