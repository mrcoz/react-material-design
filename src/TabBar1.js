import React, { Component } from 'react';

class TabBar extends Component {
  render() {
    return (
      <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
        <a href="#overview" className="mdl-layout__tab is-active">Overview</a>
        <a href="#features" className="mdl-layout__tab">Features</a>
        <a href="#features" className="mdl-layout__tab">Details</a>
        <a href="#features" className="mdl-layout__tab">Technology</a>
        <a href="#features" className="mdl-layout__tab">FAQ</a>
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
          <i className="material-icons" role="presentation">add</i>
          <span className="visuallyhidden">Add</span>
        </button>
      </div>
    );
  }
}

export default TabBar;
