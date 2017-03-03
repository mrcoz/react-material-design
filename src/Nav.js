import React, { Component } from 'react';
import TabBar from './TabBar.js';

class Nav extends Component {
  render() {
    return (

      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">

          <button id="demo-menu-lower-left"
            className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">menu</i>
          </button>

          <span className="mdl-layout-title">Happiness Project </span>

          <div className="mdl-layout-spacer"></div>

          <TabBar />

          <div className="mdl-layout-spacer"></div>

          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <i id="tt2" className="material-icons">today</i>
            <div className="mdl-tooltip" data-mdl-for="tt2">Follow2</div>

            <div id="tt1" className="icon material-icons">add</div>
            <div className="mdl-tooltip" data-mdl-for="tt1">Follow</div>

            <i id="email_icon" className="material-icons">email</i>
            <div className="mdl-tooltip" data-mdl-for="email_icon">Email</div>

            <i className="material-icons">save</i>
            <span id="home_icon" className="mdl-layout-title2"><i className="material-icons orange600">home</i></span>
            <div className="mdl-tooltip" data-mdl-for="home_icon">Home</div>
            <span className="mdl-layout-title2">Demo App</span>
            <span className="mdl-layout-title2">About</span>
          </nav>

          <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
            htmlFor="demo-menu-lower-left">
            <li className="mdl-menu__item mdl-menu__item--full-bleed-divider"><i className="material-icons">home</i></li>
            <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">Demo App</li>
            <li disabled className="mdl-menu__item">Disabled Action</li>
            <li className="mdl-menu__item">About</li>
          </ul>
        </div>
      </header>

    );
  }
}

export default Nav;
