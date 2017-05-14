import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './modals/Menu';
import './App.css';
import api from '../api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false })
  }

  render() {
    var currentPage = this.props.routes[1].component.name;
    var title;
    var boardTitle;
    let {isMenuOpen} = this.state;
    // api.getBoard(this.props.params.id).then(res=>{
    //   if (res.body !== null) {
    //     // console.log('typeof', typeof res.body)
    //     // console.log('res.body', res.body)
    //     // boardTitle = res.body.title;
    //     // console.log('boardTitle', boardTitle)
    //     // console.log('was defined')
    //   }
    // })
    // .then( () => {
    //   if (currentPage === 'Home') {
    //     title = 'All Boards';
    //   } else if (currentPage === 'Board') {
    //     title = boardTitle;
    //   } else {
    //     title = 'Dashboardly';
    //   }
    //   console.log('about to return')

    //   return (
    //     <div className="App">
    //       <div className="App-navbar">
    //         <i className="fa fa-bars fa-2x menu-icon"
    //           onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
    //         />
    //         <Link to="/" className="App-navbar__title">
    //         {title}
    //         </Link>
    //         <i className="fa fa-cog fa-2x settings-icon"/>
    //       </div>
    //       <Menu show={isMenuOpen} closeMenu={this.closeMenu}/>
    //       {this.props.children}
    //     </div>
    //   );
    // })

    // console.log('return out of .then')
    if (currentPage === 'Home') {
      title = 'All Boards';
    } else if (currentPage === 'Board') {
      title = 'This Board';
    } else {
      title = 'Dashboardly';
    }
    return (
        <div className="App">
          <div className="App-navbar">
            <i className="fa fa-bars fa-2x menu-icon"
              onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
            />
            <Link to="/" className="App-navbar__title">
            {title}
            </Link>
            <i className="fa fa-cog fa-2x settings-icon"/>
          </div>
          <Menu show={isMenuOpen} closeMenu={this.closeMenu}/>
          {this.props.children}
        </div>
      );

    // var currentPage = this.props.routes[1].component.name;
    // var title;
    // var boardTitle;
    // if (this.props.params.id) {
    //   api.getBoard(this.props.params.id).then(res=>{
    //     boardTitle = res.body.title;
    //   });
    // }
    // if (currentPage === 'Home') {
    //   title = 'All Boards';
    // } else if (currentPage === 'Board') {
    //   title = boardTitle;
    // } else {
    //   title = 'Dashboardly';
    // }
    // let {isMenuOpen} = this.state;


    // return (
    //   <div className="App">
    //     <div className="App-navbar">
    //       <i className="fa fa-bars fa-2x menu-icon"
    //         onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
    //       />
    //       <Link to="/" className="App-navbar__title">
    //       {title}
    //       </Link>
    //       <i className="fa fa-cog fa-2x settings-icon"/>
    //     </div>

    //     <Menu show={isMenuOpen} closeMenu={this.closeMenu}/>

    //     {this.props.children}

    //   </div>
    // );
  }
}

export default App;
