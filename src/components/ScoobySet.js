import React from "react";
import "./ScoobySet.css";

const padding = {
  borderRadius: 8,
  boxShadow: "1px 1px 71px #E8E8E8",
  zIndex: 0,
  width: "100%",
  marginTop: 17
}
const container = {
  marginTop: 50,
  marginBottom: 100
}

function ScoobySet(props) {
  return (
    <div className="container">
      <div className="row" style={container}>
        {props.characters.map(character => (
          <div className="col s12 m3" key={character.id}>
            <img alt="characters" className={`${(!props.score) ? "wrongAnswer" : ""}`}
              onClick={() => props.imageClicked(character.id)}
              style={padding} src={character.image} />
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default ScoobySet;