import React from "react";

const navPadding = {
    marginTop: 0,
    marginBottom: 0,
    width: "100vw",
    zIndex: 9999,
    position: "fixed",
    top: 0,
    height: 70,
    boxShadow: "0px -20px 30px black",
    paddingLeft: 25,
    paddingRight: 25,
}

const scooby = {
    paddingTop: 3,
    marginTop:0,
    fontSize: 15,
    height: 70
}
const scoob = {
    paddingLeft: 25,
    paddingRight: 25
}

function NavSet(props) {
    return (
        <nav>
            <div style={navPadding} className="deep-purple darken-2 nav-wrapper">
                <p style={scooby} className="brand-logo center-on-med-and-down truncate">Current Score: {props.score} | Top Score: {props.topScore}</p>
                <p style={scoob} className="right-align hide-on-med-and-down"><img src="https://www.firstcomicsnews.com/wp-content/uploads/2016/09/Scooby-Doo-Logo-600x257.png" alt="scoobydoo" width="80" /></p>
            </div>
        </nav>
    );
}

export default NavSet;