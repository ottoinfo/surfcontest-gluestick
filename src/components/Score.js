/* @flow */
import React, { Component } from "react";

export default class Score extends Component {

  static propTypes = {
    contest: React.PropTypes.object,
    addScore: React.PropTypes.func,
  }

  static defaultProps = {
    contest: { riders: [] },
  }

  constructor(props) {
    super(props);
    this.state = {
      rider: null,
      point: null,
    };
  }

  selectedRider(val) {
    return (this.state.rider === val ? "selected" : "");
  }

  selectedPoint(val) {
    return (this.state.point === val ? "selected" : "");
  }

  handleClickRider = (ev)=> {
    this.setState({ rider: parseInt(ev.target.dataset.id) });
  }

  handleClickPoint = (ev)=> {
    this.setState({ point: parseInt(ev.target.dataset.point) });
  }

  disableButton() {
    return (!this.state.point || !this.state.rider);
  }

  handleSubmit = (ev)=> {
    ev.preventDefault();
    this.props.addScore({
      rider: this.state.rider,
      point: this.state.point,
    });
    this.setState({
      rider: null,
      point: null,
    });
  }

  render () {
    const score_array = [1,2,3,4,5,6,7,8,9,10];

    return (
      <form id="score_card" className="flex">
        <ul className="riders">
        { this.props.contest.riders.map((rider, index)=>
          <li key={index} data-id={rider.id} onClick={this.handleClickRider} className={this.selectedRider(rider.id)}>
            {rider.name}
          </li>
        ) }
        </ul>

        <ul className="points">
        { score_array.map((point, index)=>
          <li key={index} data-point={point} onClick={this.handleClickPoint} className={this.selectedPoint(point)}>
            {point}
          </li>
        ) }
        </ul>

        <div className="spacer" />

        <button disabled={ this.disableButton() } onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

