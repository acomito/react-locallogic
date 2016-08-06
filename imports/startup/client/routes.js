import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// BASIC COMPONENTS
import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';

// ADMIN COMPONENTS
import { Admin } from '../../ui/admin/layouts/AdminFrame';
import { AdminHome } from '../../ui/admin/pages/admin-home';
import { AdminProcurement } from '../../ui/admin/pages/admin-procurement';
import { AdminOrganizations } from '../../ui/admin/pages/admin-organizations';
import { AdminBusinesses } from '../../ui/admin/pages/admin-businesses';
import { AdminUsers } from '../../ui/admin/pages/admin-users';
import { AdminSettings } from '../../ui/admin/pages/admin-settings';
import { AdminContacts } from '../../ui/admin/pages/admin-contacts';



const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }

  // this should be moved to the login logic... to reroute if they are in a certain role
/*  if (Meteor.user().roles === 'admin' || Meteor.user().roles === 'superAdmin' ) {
    replace({
      pathname: '/adminhome',
      state: { nextPathname: nextState.location.pathname },
    });
  }*/

};





const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#009688',
    primary2Color: '#00796B',
    accent1Color: '#FF6E40',
    
/* 
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: grey300,
    pickerHeaderColor: cyan500,
    clockCircleColor: grey300,
    shadowColor: fullBlack,*/
  },
});

Meteor.startup(() => {
  render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={ browserHistory }>
      {/*----------------------------------------
              BASIC ROUTES 
      ----------------------------------------*/}
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
      </Route>
        {/*----------------------------------------
              ADMIN ROUTES 
        ----------------------------------------*/}
        <Route name="admin"  path="/admin" component={ Admin } onEnter={ requireAuth } >
          <Route name="admin_home"  path="home" component={ AdminHome } />
          <Route name="admin_procurement"  path="procurement" component={ AdminProcurement } />
          <Route name="admin_organizations"  path="organizations" component={ AdminOrganizations } />
          <Route name="admin_businesses"  path="businesses" component={ AdminBusinesses } />
          <Route name="admin_users"  path="users" component={ AdminUsers } />
          <Route name="admin_settings"  path="settings" component={ AdminSettings } />
          <Route name="admin_contacts"  path="contacts" component={ AdminContacts } />    
        </Route>
        {/*----------------------------------------
              PAGE NOT FOUND
        ----------------------------------------*/}
        <Route path="*" component={ NotFound } />      
    </Router>
    </MuiThemeProvider>,
    document.getElementById('react-root')
  );
});
