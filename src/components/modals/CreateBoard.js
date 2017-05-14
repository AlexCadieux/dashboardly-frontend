import React, {Component} from 'react';
import './CreateBoard.css';
import auth from '../../auth';

const ENTER = 13;

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description:""
    };
  }

  _handleInput = () => {
    if(this.refs.description.value.length <= 100){
        this.setState({
        description:this.refs.description.value
        });
    }
  }

  _handleTyping = (e) => {
    if (e.keyCode===ENTER) {
      this._handleClick();
    }
  }

  _handleCreate = () => {
    let { title: {value: title}, description: {value: description} } = this.refs;
    if(title && description) {
      this.props.whenSubmitted(false);
      auth.newBoard(title, description);
    }
  }

  _handleCancel = () => {
    this.props.whenSubmitted(false)
  }

  render() {
    return (
      <div className="formBackground">
        <div className="authForm">
          <h1 className="title">Create new board</h1>
          <input type="text" ref="title" placeholder="Title "
          />
          <input type="text" ref="description" placeholder="Description"
            value={this.state.description}
            onInput={this._handleInput}
            onKeyUp={this._handleTyping}
          />
          <span>{
          this.state.description.length}/100</span>
          <div className="button">
            <button onClick={this._handleCancel}>Cancel</button>
            <button onClick={this._handleCreate}>Create</button>
          </div>
        </div>
      </div>
    );
  }

}
