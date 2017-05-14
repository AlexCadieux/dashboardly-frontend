import React, {Component} from 'react';
import { Link } from 'react-router';
import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { title, description, id, avatarColor } = this.props;
    let avatarBgColor = {backgroundColor:avatarColor.rgbString()};

    return (
      <Link to={`/boards/${id}`} className="board-card_board">
          <div style={avatarBgColor} className="board-card_avatar" >
          </div>
          <div className="board-card_content">
            <h2 className="board-card_title">{ title }</h2>
            <p>{ description }</p>
            <div className="board-card_editButton">
              <button className="edit-button">Edit</button>
            </div>
          </div>
      </Link>
    );
  }

}
