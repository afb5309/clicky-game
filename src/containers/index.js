import HeaderRow from "../components/HeaderRow";
import NavSet from "../components/NavSet";
import ScoobySet from "../components/ScoobySet";
import characters from "../data/characters";
import FootSet from "../components/FootSet";
import React, {Component} from "react";

class Start extends Component {
  state = {
    characters: characters,
    score: 0,
    topScore: 0
  }
 
  componentDidMount() {
    this.setState({
      characters: this.arrangeCharacters(this.state.characters)
    })
  }
  
  arrangeCharacters = function(characters){
    const movingCharacters = characters.sort(
        function(){
            return((0.234 - Math.random()))
        });
    return movingCharacters;
  }

  imageClicked = id => {
    let notDuplicate = false;
    const reorderCharacters = this.state.characters.map(character => {
      if (character.id === id) {
        if (!character.used) {
          character.used = true;
          notDuplicate = true;
        } 
      }
      return character;
    });
    notDuplicate ? this.guessedRight(reorderCharacters):this.guessedWrong(reorderCharacters);
}

  guessedRight = reorderCharacters => {
    const {score, topScore} = this.state;
    const newScore = score + 1;
    const newTopScore = (newScore > topScore) ? newScore : topScore;
    this.setState({
      characters: this.arrangeCharacters(reorderCharacters),
      topScore: newTopScore,
      score: newScore
    });
  }

  guessedWrong = reorderCharacters => {
    const resetcharacterList = reorderCharacters.map(character => {
      character.used = false;
      return character;
    })

    this.setState({
      characters: this.arrangeCharacters(resetcharacterList),
      score: 0
    });
  }

  render() {
    console.log(characters);
    return (
      <div centered padded>
        <NavSet score={this.state.score} topScore={this.state.topScore}/>
        <HeaderRow score={this.state.score} topScore={this.state.topScore}/>
        <ScoobySet score={this.state.score} characters={this.state.characters} imageClicked={this.imageClicked}/>
        <FootSet score={this.state.score} topScore={this.state.topScore}/>
      </div>
    )
  }
}

export default Start;