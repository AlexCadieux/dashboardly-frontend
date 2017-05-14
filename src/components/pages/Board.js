import React, {Component} from 'react';
import api from '../../api';
import AddButton from '../elements/AddButton';
import BookmarkCard from '../elements/BookmarkCard';
import CreateBookmark from '../modals/CreateBookmark';
import auth from '../../auth';
import './Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      bookmarks: [],
      updatedAt: "",
      addButtonClicked: false
    };
  }

  componentDidMount() {
    this.fetchBoardData();
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

  fetchBoardData = () => {
      Promise.all([
        api.getBoard(this.props.params.id),
        api.getBookmarks(this.props.params.id)
      ])
      .then(res => {
        if (res[0].body !== null) {
          this.setState({
            title: res[0].body.title,
            description: res[0].body.description,
            bookmarks: res[1].body.bookmarks
          });
        }
      })
      .catch(console.error);
  }

  _handleAddButton = (clicked) => {
    this.setState({
      addButtonClicked: clicked
    });
  }

  _handleCreateBookmark = (submitted) => {
    this.setState({
      addButtonClicked: submitted
    });
  }

  render() {
    let { bookmarks } = this.state;
    return (
      <div className="board">
        {this.state.addButtonClicked ?
          <div className="popUpForm">
            <CreateBookmark id={this.props.params.id} whenSubmitted={this._handleCreateBookmark}/>
          </div>:null}
        <div className="popUpBackground">
          { bookmarks.map(b =>
            <BookmarkCard
              key={b.id}
              id={b.id}
              title={b.title}
              description={b.description}
              url={b.url}
            />
          )}
        </div>
        {auth.isLoggedIn() && !this.state.addButtonClicked ? <AddButton whenClicked={this._handleAddButton} /> : null}
      </div>
    );
  }

}
