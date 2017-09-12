import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import DesignManagementPage from '../../containers/designmanagement/DesignManagementPage';
import CardManagementPage from '../../containers/cardmanagement/CardManagementPage';
import HomePage from './HomePage';
import RequireAuth from '../../components/auth/require_auth';
import VersionManagementPage from '../../containers/designmanagement/VersionManagementPage';

const Home = () => {
  debugger;
  return (
    <div className="home">
      <Header
        userProfile={JSON.parse(atob(sessionStorage.getItem('userProfile')))}/>
      <div className="home-layout navigation-wrapper">
        <Menu/>
        <div className="home-content">
          <Switch>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/home/designmgmt"
                   component={RequireAuth(DesignManagementPage)}/>
            <Route path="/home/designmgmt/version/:id"
                   component={VersionManagementPage}/>
            <Route path="/home/projects"/>
            <Route path="/home/tc"/>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
