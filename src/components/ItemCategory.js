import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ItemCategory extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
}

export default ItemCategory;
