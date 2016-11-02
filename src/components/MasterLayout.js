/* @flow */
import React, { Component, PropTypes } from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import config from "../config/application";
import "../../assets/css/style.scss";

export default class MasterLayout extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render () {
    return (
      <div className="content">
        <Helmet {...config.head}/>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

