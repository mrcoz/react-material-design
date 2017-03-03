import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Checkbox from './CheckBox.js';
//import X3dModel from "./X3dModel.js";
//import Inline from './inline.js'
import Simple from './Simple.js'

class App extends Component {
  constructor() {
  super();
  };
  
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Nav />

        <div>

        <h1>Hello World</h1>

        <Simple/>

        <Checkbox />

        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox-2">
          <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input" defaultChecked></input>
          <span className="mdl-checkbox__label">Checkbox</span>
        </label>

        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-1">
          <input type="radio" id="option-1" className="mdl-radio__button" name="options" value="1" defaultChecked />
          <span className="mdl-radio__label">First</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-2">
          <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="2" />
          <span className="mdl-radio__label">Second</span>
        </label>

        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-1">
          <input type="checkbox" id="switch-1" className="mdl-switch__input" />
          <span className="mdl-switch__label">Label1</span>
        </label>
        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-2">
          <input type="checkbox" id="switch-2" className="mdl-switch__input" disabled/>
          <span className="mdl-switch__label">Label2</span>
        </label>

        </div>
        <h2> Yea </h2>
        <Footer />
      </div>
    );
  }
}

export default App;
