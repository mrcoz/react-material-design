import React, { Component } from 'react';

class TabBar extends Component {
  render() {
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
            <a href="#starks-panel" className="mdl-tabs__tab is-active">Starks</a>
            <a href="#lannisters-panel" className="mdl-tabs__tab">Lannisters</a>
            <a href="#targaryens-panel" className="mdl-tabs__tab">Targaryens</a>
        </div>
      </div>
    );
  }
}

export default TabBar;
