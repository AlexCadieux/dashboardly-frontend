import React, { Component } from 'react';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import './Menu.css';


class Menu extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {}
    };
  }

  componentWillMount = () => {
      this.getUserInfo();
    }


  getUserInfo= () => {
    if(auth.isLoggedIn()){
      auth.userInfo()
      .then(res=>{
        this.setState({
          userInfo: res.body
        });
      });
    }
  }
    // }else{
    //   this.setState({
    //     avatarUrl: "https://www.gravatar.com/avatar?d=mm"
    //   })
    // }


  _handleLogoutButton= () => {
    auth.logout();
  }

  handleClickOutside = () => {
    this.props.closeMenu();
  }

  render() {
    let { closeMenu, show } = this.props;
    const isLoggedIn = auth.isLoggedIn();
    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">

            <img src={!isLoggedIn ?
                "https://www.gravatar.com/avatar?d=mm"
                :this.state.userInfo.avatarUrl}
            alt="profile-pic" className="menu__avatar"/>

        </div>

        <div className="menu__list">

          <Link to="/" className="menu__item" onClick={closeMenu}>
            <p>Home</p>
          </Link>

          {!isLoggedIn ?
            <Link to="/login" className="menu__item"  onClick={closeMenu}>
              <p>Login</p>
            </Link>
          : null}

          {!isLoggedIn ?
            <Link to="/signup" className="menu__item" onClick={closeMenu}>
              <p>Signup</p>
            </Link>
          : null}

          {isLoggedIn ?
            <div className="menu__item" onClick={closeMenu}>
              <button type="button" onClick={this._handleLogoutButton}>Logout</button>
            </div>
          : null}
        </div>

      </div>
    );
  }

}

export default onClickOutside(Menu);
