import React from 'react';


class InputBox extends React.Component {
  render() {
    const {origin, direction} = this.props;

console.log('in input_box.jsx' + origin + direction);
    return (
      <div>
        <p>This is the input box.</p>
      </div>
    );
  }
};

export default InputBox;