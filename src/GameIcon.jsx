import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class GameIcon extends Component {
  render() {
    return (
        <div className="col-sm-4">
        <div className="card">
            <img className="card-img-top" src={this.props.info.icon} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.info.name}</h5>
            <p className="card-text">{this.props.info.description}</p>
            <div className="btn btn-primary" onClick={() => this.props.start(this.props.info.name)}>Play</div>
          </div>
        </div>
        </div>
        );
  }
}

export default GameIcon;
