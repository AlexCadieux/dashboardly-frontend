import React, {Component} from 'react';
import './BookmarkCard.css';

export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  encodedUrl = (str) => {
    var res = str.replace(/\./g, "%2E");
    // var res = str.split(".").join("%2E");
    return (res)
  }

  render() {
    let { title, description, url } = this.props;
    return (
        <div className="bookmark-card">
          <a className="bookmark-card_link" href={url} target="_blank">
            <div className="bookmark-card_text">
              <h2>{ title }</h2>
              <p>{ description }</p>
            </div>
            <img className="bookmark-card_image" src={`http://free.pagepeeker.com/v2/thumbs.php?size=s&url=${url}`/*'http://ladieslearningcode.com/wp-content/uploads/2014/03/46ddcfb4ebae65727ac183788ac91f36-e1423536927128.jpeg'*/} alt={title}/>
          </a>
          <button className="edit-button">Edit</button>
        </div>
    );
  }

}
