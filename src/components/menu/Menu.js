import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);

    let userProfile = JSON.parse(atob(sessionStorage.getItem('userProfile')));
    this.isCardMgmt = userProfile.group.isCardMgmt;
    this.isDesignMgmt = userProfile.group.isDesignMgmt;
  }

  changeActive = (event) => {
    let parent = document.getElementById('menu');
    for (let i = 0; i < parent.children.length; i++) {
      let anchor = parent.children[i].children[0];
      anchor.classList.remove('active');
    }
    document.getElementById(event.target.id).classList.add('active');
  };

  render = () => {
    // debugger;
    return (

      <div className="sidenav scrollable" style={{marginRight: '0px'}}>
        <ul className="nav" id="menu">
          <li><Link onClick={this.changeActive}
                    className={this.props.location.pathname === '/home'
                      ? 'active' : ''} id="home"
                    to="/home"><i className="icon_home"/>Home</Link></li>
          <li><Link onClick={this.changeActive}
                    className={this.props.location.pathname
                    === '/home/designmgmt' ? 'active' : ''} id="designmgmt"
                    to="/home/designmgmt"><i
            className="icon_custom-design-outlined"/>Designs</Link>
          </li>
          <li><Link onClick={this.changeActive}
                    id="home"
                    to="/home"><i className="icon_assignment"/>Projects</Link>
          </li>
          <li><Link onClick={this.changeActive}
                    id="home"
                    to="/home"><i className="icon_information-outlined"/>Terms
            and Conditions</Link></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);
