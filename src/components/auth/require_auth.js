import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CONFIG} from '../../envconfig/globals';

export default function (ComposedComponent) {
  class GroupAuthentication extends Component {

    constructor(props, context) {
      super(props, context);

      // this.store = context.store;
      if (sessionStorage.getItem('userProfile')) {
        this.userProfile = JSON.parse(
          atob(sessionStorage.getItem('userProfile')));
      } else {
        this.userProfile = null;
      }
    }

    componentWillMount(nextProps) {
      // debugger;
      if (this.userProfile === null) {
        const clientId = CONFIG.clientId;
        const authDomainURL = CONFIG.authDomainURL
          + '/oauth/authorize?response_type=code&client_id=' + clientId;
        window.location.replace(authDomainURL);
      } else if (this.props.location.pathname === '/home/cardmgmt') {
        if (!this.userProfile.group.isCardMgmt) {
          this.props.history.push('/unauthorized');
        }
      } else if (this.props.location.pathname === '/home/designmgmt') {
        if (!this.userProfile.group.isDesignMgmt) {
          this.props.history.push('/unauthorized');
        }
      }

    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return connect(null)(GroupAuthentication);
}
