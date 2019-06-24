import React from "react";

const text = {
    margin: "0px",
    paddingTop: 15,
    marginTop: 0,
    paddingBottom: 60,
    color: "white",
    paddingRight: 15,
    paddingLeft: 15,
}
const header = {
    margin: "0px",
    marginTop: 0,
    color: "white",
    verticalAlign: "center",
    paddingTop:"45px"
}

const box = {
    boxShadow: "0px 5px 42px #EEEEEE",
}
const HeaderRow = () => (
    <div>
        <div style={box} className="blue-grey darken-4 center-align">
            <h3 style={header}>Clicky Game</h3>
            <p style={text}>Click the images, but don't click the same character twice! </p>
        </div>
    </div>
);

export default HeaderRow;