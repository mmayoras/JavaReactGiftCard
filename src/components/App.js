import 'babel-polyfill';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {orange500, deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, Switch} from 'react-router-dom';

import Home from './home/Home';
import Auth from '../utils/Auth';
import Error from '../utils/Error';
import RequireAuth from './auth/require_auth';

const muiTheme = getMuiTheme({
  palette: {
    primaryColor: orange500,
    accent2Color: deepOrange500
  }
});

class App extends Component {
debugger
  render = () => {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={this.props.history}>
          <Switch>
            <Route path="/home" component={RequireAuth(Home)}/>
            <Route path="/error" component={(props) => (<Error errorName="Error" showHomePageLink="true" location={ props.location } history={props.history} />)}  />
            <Route path="/unauthorized" component={(props) => (<Error errorName="Unauthorized" showHomePageLink="true" location={ props.location } history={props.history} />)} />
            <Route path="/" query={{code: 'code'}} component={Auth}/>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
