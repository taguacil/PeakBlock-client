import React, { Component } from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { history } from '../../helpers';
import {Map} from '../Map';
import { PrivateRoute, PublicRoute } from '../../routes';
import { connect } from 'react-redux';
import { alertActions, validatorActions } from '../../actions';
import { withCookies } from 'react-cookie';
import { LoginPage } from '../LoginPage';
import { COVID } from '../COVIDForm';
import { RegisterPage } from '../RegisterPage'
export class AppContainer extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      this.props.clearAlerts();
      this.props.clearValidation(); 
    });
  }

  render() {
    return (
      <div id='page-wrapper' className='gray-bg'>
        <Router history={history}>
          <Switch>
          <PrivateRoute
              path={'/cases'}
              component={Map}
              cookies={this.props.cookies}
            />
          <PublicRoute
              path={'/login'}
              component={LoginPage}
              cookies={this.props.cookies}
            />
            
          <PrivateRoute
              path={'/self/form'}
              component={COVID}
              cookies={this.props.cookies}
            />
            
          <PublicRoute
              path={'/Register'}
              component={RegisterPage}
              cookies={this.props.cookies}
            />
        <Redirect from='*' to={'/cases'} />

          </Switch>
          </Router>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

const actionCreators = {
  clearAlerts: alertActions.clear,
  clearValidation: validatorActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(AppContainer);
const appWithCookies = withCookies(connectedApp);
export { appWithCookies as App };

