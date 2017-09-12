import React, { Component } from 'react';
import { CONFIG } from '../envconfig/globals';
import Cookies from 'universal-cookie';
import _ from 'lodash';

class Auth extends Component {
    componentDidMount() {
        debugger;
        let extractCode = window.location.href.split('=')[1];
        const baseURL = CONFIG.baseURL;
        const env = CONFIG.projectInfo.env;
        if(extractCode !== undefined) {
            const code = extractCode.substring(0, extractCode.length - 2)
            const loginUrl = CONFIG.baseURL;
            fetch(loginUrl + '/api/getAccessToken/' + code, {
                method: 'GET',
            }).then(response => response.json()).then((res) => {
                if (res.serviceResponseStatus.success) {
                    debugger;
                    console.info('LOGIN RESPONSE: ' + JSON.stringify(res));
                    let cookies = new Cookies();
                    cookies.set(res.cookie.name, res.cookie.value, {path: '/'});

                    let userProfile = {'user': res, 'group': {'isDesignMgmt': false, 'isCardMgmt': false}};
                    const groups = res.ssoUserGroup.groups;
                    if(_.find(groups, ['cn', 'GC-DESIGNMGMT'])){
                      userProfile.group.isDesignMgmt = true;
                    }
                    if(_.find(groups, ['cn', 'GC-CARDMGMT'])){
                      userProfile.group.isCardMgmt = true;
                    }
                    sessionStorage.setItem('userProfile', btoa(JSON.stringify(userProfile)));
                    window.location.href = baseURL + '/#/home';
                } else {
                    debugger;
                    window.location.href = baseURL + '/#/error';
                }
            }).catch((error) => {
                debugger;
                console.error(error);
                window.location.href = baseURL + '/#/error';
                //go to custom error page with link to login page
            });
        } else {
            // -- LOCAL ENV ONLY TO BYPASS SSO LOGIN
            if(env === 'local') {
                let res = {
                    "ssoUserInfo": {
                        "name": "tester"
                    }
                }
                let userProfile = {'user': res, 'group': {'isDesignMgmt': true, 'isCardMgmt': true}};
                sessionStorage.setItem('userProfile', btoa(JSON.stringify(userProfile)));
                this.props.history.push('/home');        
            } else {
            // -- END
                const clientId = CONFIG.clientId;
                const authDomainURL = CONFIG.authDomainURL + '/oauth/authorize?response_type=code&client_id=' + clientId;
                window.location.replace(authDomainURL);
            }
        }
    }
    render() {
        return (<div>Logging in...</div>);
    }
}

export default Auth;
