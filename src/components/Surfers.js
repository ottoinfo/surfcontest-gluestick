/* @flow */
import React, { Component } from "react";

export default class Surfers extends Component {

  state = {
    selected: null,
  }

  static propTypes = {
    addRider: React.PropTypes.func,
    surfers: React.PropTypes.array,
  }

  static defaultProps = {
    surfers: []
  }

  selectedRider(surfer) {
    let className = "";
    if (this.state.selected === surfer.id) {className += " selected";}
    if (surfer.entered) {className += " entered";}
    return className;
  }

  handleClickRider = (surfer)=> {
    if (!surfer.entered) {
      this.setState({ selected: parseInt(surfer.id) });
    }
    else {
      this.setState({
        selected: null,
      });
    }
  }

  disableButton() {
    return !this.state.selected;
  }

  handleSubmit = (ev)=> {
    ev.preventDefault();
    this.props.addRider(this.state.selected);
    this.setState({ selected: null });
  }

  render () {
    return (
      <form id="surfers_list" className="flex">
        <ul className="surfers">
        { this.props.surfers.map((surfer, index)=>
          <li key={index} onClick={()=> this.handleClickRider(surfer)} className={this.selectedRider(surfer)}>
            <img src={surfer.profile} alt={surfer.name} />
            {surfer.name}
          </li>
        ) }
        </ul>

        <div className="spacer" />

        <button disabled={ this.disableButton() } onClick={this.handleSubmit}>Add Rider</button>
      </form>
    );
  }
}

