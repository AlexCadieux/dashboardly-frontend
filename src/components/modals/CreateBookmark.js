import React, {Component} from 'react';
import './CreateBoard.css';
import auth from '../../auth';

const ENTER = 13;

export default class CreateBookmark extends Component {
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
      this._handleCreate();
    }
  }

  _handleCreate = () => {
    let { title: {value: title}, url: {value: url}, description: {value: description} } = this.refs;
    if(title && url && description) {
      this.props.whenSubmitted(false);
      auth.newBookmark(title, url, description, this.props.id)
    }
  }

  _handleCancel = () => {
    this.props.whenSubmitted(false)
  }

  render() {
    return (
      <div className="formBackground">
        <div className="authForm">
          <h1 className="title">Create new bookmark</h1>
          <input type="text" ref="title" placeholder="Title "
          />
          <input type="text" ref="url" placeholder="https://exemple.com"
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
