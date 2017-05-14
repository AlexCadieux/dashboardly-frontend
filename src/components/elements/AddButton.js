// import React from 'react';
import React, { Component } from 'react';
import './AddButton.css';

export default class AddButton extends Component {
  _handleClick = () => {
    this.props.whenClicked(true);
  }

  render() {
    return (
      <div className="add-button" onClick={this._handleClick}>
        <i className="fa fa-plus fa-lg"/>
      </div>
      );
  }
}

/*

export default (props) => (

  <div className="add-button">
    <i className="fa fa-plus fa-lg"/>
  </div>
);

*/