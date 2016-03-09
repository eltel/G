import React from 'react';
import Title from '../components/title.jsx';
import InputBox from '../components/input_box.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import GTheme from '/client/configs/theme.jsx';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },

  radioButton: {
    marginBottom: 16,
  }
};

const style = {
  height: 300,
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

class Core extends React.Component {
  render() {
    return (
      <div>
        <Title origin={this.props.origin} direction={this.props.direction}></Title>
        <form>
          <input type="radio" name="universe" value="universe" defaultChecked="true" onClick={this.newDirection.bind(this)}>Universe</input> 
          <input type="radio" name="constellation" value="constellation" onClick={this.newDirection.bind(this)}>Constellation</input> 
          <input type="radio" name="galaxy" value="galaxy" onClick={this.newDirection.bind(this)}>Galaxy</input> 
       </form>

        <InputBox origin={this.props.origin} direction={this.props.direction}></InputBox>
      </div>
    );
  }

  newDirection(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {setDirection} = this.props;
    const directionRef = event.currentTarget.value;

    setDirection(directionRef);
  }

}

export default Core;

