import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      
      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox-1">
        <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input"></input>
        <span className="mdl-checkbox__label">Checkbox</span>
      </label>

    );
  }
}

export default Checkbox;
