import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const style = {
  margin: 12,
};

const labels = ["Default-1"];

function RaisedButtonArray(props) {
  const label2 = props.label;
  const style2 = props.style;
  const listItems = labels.map((labels) =>
    <RaisedButton label={label2} primary={true} style={style2} />
  );
  return (
    {listItems}
  );
}

class RButton extends Component {
  render() {
    return (
      <div>
        
        <RaisedButton label="Default" primary={true} style={style} />
        <RaisedButton label="Secondary" secondary={true} style={style} />
      </div>
    );
  }
}

export default RButton;
