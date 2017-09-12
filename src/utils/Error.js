import React, {Component} from 'react';
import { CONFIG ,AppVersion} from '../envconfig/globals';
import Cookies from 'universal-cookie';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


export default class Error extends Component{
  constructor(props) {
         super(props);
         this.state = {
           name: 'ps-giftcard-ui',
           version: AppVersion
         }
     }
      logout = () => {

         let cookies = new Cookies();
         cookies.remove('PS-GIFTCARD-UI-COOKIE');
         sessionStorage.removeItem('userProfile');
         const clientId = CONFIG.clientId;
         const authDomainURL = CONFIG.authDomainURL + '';
         const baseURL = CONFIG.baseURL;
         window.location.replace(authDomainURL+'/logout.do?redirect='+baseURL+'&clientId=' + clientId);
     }
     gotoHome = () => {
        if (sessionStorage.getItem('userProfile')) {
              this.userProfile = JSON.parse(
               atob(sessionStorage.getItem('userProfile')));
            }
         if (this.userProfile === undefined || this.userProfile === null) {
                      const clientId = CONFIG.clientId;
                      const authDomainURL = CONFIG.authDomainURL + '/oauth/authorize?response_type=code&client_id=' + clientId;
                      window.location.replace(authDomainURL);
         }else{
         this.props.history.push('/home');
         }

     }

  render() {
debugger;

    return (
        <div>
            <div className="header">
                <div className="header-logo">
                    <i className="icon_homedepot" />
                </div>
                <div className="header-info">
                    <label className="product-info">{this.state.name}<label className="version"> {this.state.version}</label></label>

                </div>

                <div className="header-search" />
                <div className="header-actions">
                   <div onClick={this.logout}><i className="icon_exit_to_app" />Logout</div>
                </div>
            </div>
             <br/><br/><br/><br/><br/><br/>
             <div >
                <Row>
                <Col md="4"></Col>
                <Col md="4">
                  <div className="notification red">
                          <div className="container" >
                              <span className="app-icon">&#xe913;</span>
                              <span className="app-name" style={{'font-size': '2em'}}>{this.props.errorName}</span>
                              <div className="content">
                                  <p>Unable to Process the Request</p>
                                  <p>Please contact Support Team</p>
                              </div>
                          {this.props.showHomePageLink === "true"?
                              <div>
                                <a onClick={this.gotoHome}>Click here to return to Home Page</a>
                              </div>
                          :""}
                          </div>
                  </div>
                </Col>
                <Col md="4"></Col>
                </Row>
            </div>


        </div>
    );

    }

}

