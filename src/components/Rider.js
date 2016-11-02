/* @flow */
import React, { Component } from "react";

export default class Rider extends Component {

  static propTypes = {
    rider: React.PropTypes.object,
    surfers: React.PropTypes.array,
  }

  static defaultProps = {
    rider: { name: "N/A" },
  }

  surferInfo = (id)=> {
    const defaults = {
      name: "N/A",
      origin: "N/A",
    };
    const info = this.props.surfers.find(surfer=> surfer.id === id);
    return Object.assign(defaults, info);
  }

  render () {
    const rider = this.props.rider;

    if (!rider.id) {
      return null;
    }

    const info = this.surferInfo(rider.id);
    return (
      <div className="rider flex">
        <img src={info.profile} alt={info.name} />

        <div className="info">
          <p className="name">{info.name}</p>
          <p className="origin">{info.origin}</p>
        </div>

        <div className="wave_scores">
          Waves
        </div>

      </div>
    );
  }
}
