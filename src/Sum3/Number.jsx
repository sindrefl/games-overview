import React, { Component } from 'react';

import './Sum3.css'


class Number extends Component {
  render() {
    return (
      <div className={this.props.selected ? "number": "selectedNumber"} onClick={() => this.props.select(this)}>{this.props.number}</div>
    );
  }
}

export default Number;
