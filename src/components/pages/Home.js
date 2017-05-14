import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
import AddButton from '../elements/AddButton';
import CreateBoard from '../modals/CreateBoard';
import auth from '../../auth';
import './Home.css';
var randomColor = require('random-color');


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      addButtonClicked: false,
    };
  }

  componentDidMount() {
    this._fetchBoards();
  }

  componentDidUpdate(prevState){
    if(prevState.addButtonClicked !== this.state.addButtonClicked) {
      this._scrollOrNot()
    }
  }

  _scrollOrNot = () => {
    let body = document.getElementsByTagName("body")[0];
    if(this.state.addButtonClicked){
      body.classList.add("scrollOrNo")
    }else{
      body.classList.remove("scrollOrNo")
    }
  }

  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ boards: res.body.boards });
    })
    .catch(console.error);
  }

  _handleAddButton = (clicked) => {
    this.setState({
      addButtonClicked: clicked
    });
  }

  _handleCreateBoard = (submitted) => {
    this.setState({
      addButtonClicked: submitted
    });
  }

  render() {
    let { boards } = this.state;
    return (
      <div className="home">
        {this.state.addButtonClicked ?
          <div className="popUpForm">
            <CreateBoard whenSubmitted={this._handleCreateBoard}/>
          </div>:null}
        <div className="popUpBackground">
          { boards.map(b =>
            <BoardCard
              avatarColor={randomColor()}
              key={b.id}
              id={b.id}
              title={b.title}
              description={b.description}
              updatedAt={b.updatedAt}
            />
        )}
        </div>
        {auth.isLoggedIn() && !this.state.addButtonClicked ? <AddButton whenClicked={this._handleAddButton} /> : null}
      </div>
    );
  }

}
