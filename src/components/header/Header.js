import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppVersion } from '../../envconfig/globals';
import Cookies from 'universal-cookie';

import { CONFIG } from '../../envconfig/globals';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: CONFIG.projectInfo.appName,
          version: AppVersion
        }
    }

    logout = () => {
        debugger;
        let cookies = new Cookies();
        cookies.remove('PS-GIFTCARD-UI-COOKIE');
        sessionStorage.removeItem('userProfile');
        const clientId = CONFIG.clientId;
        const authDomainURL = CONFIG.authDomainURL + '';
        const baseURL = CONFIG.baseURL;
        window.location.replace(authDomainURL+'/logout.do?redirect='+baseURL+'&clientId=' + clientId);
    };

    render() {
      debugger;
        return (
            <div className="header">
                <div className="header-logo">
                    <i className="icon_homedepot" />
                </div>
                <div className="header-info">
                    <label className="product-info">{this.state.name}<label className="version"> {this.state.version}</label></label>
                    <label className="user-info">{this.props.userProfile.user.ssoUserInfo.name}</label>
                </div>
                <div className="header-search" />
                <div className="header-actions">
                   <div onClick={this.logout}><i className="icon_exit_to_app" />Logout</div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    userProfile: PropTypes.object
};
