/* @flow */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { addRider, dropRider, addScore, dropScore } from "../actions/contest";

// import Score from "components/Score";
import Surfers from "components/Surfers";
import Results from "components/Results";

export class Contest extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {}

  static propTypes = {
    contest: React.PropTypes.object,
    addRider: React.PropTypes.func,
    dropRider: React.PropTypes.func,
    addScore: React.PropTypes.func,
    dropScore: React.PropTypes.func,
  }

  static defaultProps = {
    contest: {},
  }

  render () {
    const { surfers, results } = this.props.contest;
    const { addRider, dropRider, addScore, dropScore } = this.props;
    return (
      <div>
        <Helmet title="Contest"/>
        <Surfers surfers={surfers} addRider={addRider} />
        <Results results={results} surfers={surfers} dropRider={dropRider} addScore={addScore} dropScore={dropScore} />
      </div>
    );
  }
}

export default connect(
  (state) => ({ contest: state.contest }),
  (dispatch) => bindActionCreators({ addRider, dropRider, addScore, dropScore }, dispatch)
)(Contest);

//        <Score contest={this.props.contest} addScore={this.props.addRider}/>
