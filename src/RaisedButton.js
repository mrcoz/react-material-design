import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginRight: 24,
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const style = {
  margin: 12,
};

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const MyAwesomeReactComponent = () => (
  <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Default" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      label="Github Link"
      secondary={true}
      style={styles.button}
      icon={<ActionAndroid />}
    />
    <FloatingActionButton style={style}>
    <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} style={style}>
    <ActionAndroid />
    </FloatingActionButton>
    <ActionHome />

    <IconButton tooltip="Font Icon">
    <FontIcon className="muidocs-icon-action-home" />
    </IconButton>

    <IconButton tooltip="SVG Icon">
      <ActionHome />
    </IconButton>

    <IconButton
      iconClassName="material-icons"
      tooltip="Ligature"
    >
    home
    </IconButton>

    <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
    <ActionGrade />
    </IconButton>

     <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />

  </div>
);

export default MyAwesomeReactComponent;
