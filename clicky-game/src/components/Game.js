import React from 'react';
import Card from './card'
import Data from '../data/data'
import Jumbotron from './jumbotron'

class Score extends React.Component {

    state = {
        score: 0,
        topScore: 0,
        characters: []
    }


    handleScore = name => {
        console.log(this.state)
        if (this.state.characters.includes(name)) {
            this.setState({ score: 0 })
            this.setState({ characters: [] })
            alert("You Lose")
        }

        else if(this.state.score === 12){
            alert("You WIN")
            this.setState({ score: 0 })
            this.setState({ characters: [] })
        }

        else {

            this.setState({ score: this.state.score + 1 })
            var newCharacters = this.state.characters.concat(name);
            this.setState({ characters: newCharacters })

            if (this.state.score >= this.state.topScore) {
                this.setState({ topScore: this.state.score + 1 })
            }
        }
        this.shuffle(Data)
    }

    shuffle = array => {

        var newArr = array;

        for (let i = 0; i < newArr.length; i++) {
            let ranNum = Math.floor(Math.random() * newArr.length)

            let temp = newArr[ranNum]
            newArr[ranNum] = newArr[i];
            newArr[i] = temp;
        }
        console.log(newArr);
    }

    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-primary bg-light">
                    <h3 className="navbar-brand float-right">Top Score:{this.state.topScore}</h3>
                    <h3 className="navbar-brand float-right">Score:{this.state.score}</h3>
                </nav>
                <Jumbotron />
                <div className="container">
                    <Card
                        handleScore={this.handleScore}
                        data={Data}
                    />
                </div>
            </div>
        )
    }
}

export default Score;