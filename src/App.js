import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import GameIcon from './GameIcon'

import Sum3 from './Sum3/Sum3.jsx'

import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor(props) {
      super(props);
        this.state = {
            games : this.initGames(),
        }
    }
    //primitive first attempt.. should be a router:
    startGame(name) {
      console.log(name)
      let game = null;
      switch(String(name)){
        case "Sum 3" : game = <Sum3 />
        break;
      }

      console.log(game)
      if(game){
        ReactDOM.render(game, document.getElementById('root'));
        registerServiceWorker();
      }
    }

    initGames(){
      return [{
        name : "Memory",
        description : "Match corresponding kittens to win the game. Written in vanilla js with css transitions. ",
        icon : require("./memory.jpg")
      },{
        name : "Sum 3",
        description : "3 numbers sum to the total, find out which. Written in React",
        icon : require("./sum.jpg")
      },{
        name : "Minesweeper",
        description : "A game of minesweeper. Written in React",
        icon : require("./minesweeper.jpg")
      },{
        name : "Tic-Tac-Toe",
        description : "A game of tic tac toe written in Elm.",
        icon : require("./tic-tac-toe.png")
      },{
        name : "Placeholder",
        description : "A game of memory written in vanilla js",
        icon : require("./memory.jpg")
      },{
        name : "Placeholder",
        description : "A game of memory written in vanilla js",
        icon : require("./memory.jpg")
      }]
    }

    render() {
        return(
            <div className="App d-flex flex-column">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Game Page</h1>
                </header>
                <div className="card-group">
                {this.state.games.map(game => <GameIcon start={this.startGame} info={game}/>)}
                </div>
            </div>
        );
    }
}

export default App;
