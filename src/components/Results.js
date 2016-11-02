/* @flow */
import React, { Component } from "react";
import Rider from "./Rider";

export default class Results extends Component {

  static propTypes = {
    results: React.PropTypes.array,
    surfers: React.PropTypes.array,
    dropRider: React.PropTypes.func,
    addScore: React.PropTypes.func,
    dropScore: React.PropTypes.func,
  }

  static defaultProps = {
    results: [{}],
  }

  render() {
    if (!this.props.results.length) {
      return (
        <div>No Competetors Entered</div>
      );
    }
    return (
      <div>
        { this.props.results.map((rider, index)=>
          <Rider key={index} rider={rider} surfers={this.props.surfers} />
        ) }
      </div>
    );
  }
}

