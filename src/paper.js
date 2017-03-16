import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={1} >Test</Paper>
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={4} rounded={true} >Testing 1,2,3 this is just a test.</Paper>
    <Paper style={style} zDepth={5} />
  </div>
);

export default PaperExampleSimple;
