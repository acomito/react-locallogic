import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Group from 'material-ui/svg-icons/social/group';
import Business from 'material-ui/svg-icons/communication/business';
import Home from 'material-ui/svg-icons/action/home';
import Settings from 'material-ui/svg-icons/action/settings';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Face from 'material-ui/svg-icons/action/face';

const styles = {
  sideNav: {
    backgroundColor: "#F5F5F5"
  }
};

export default class AdminNavigation extends React.Component {

    render() {
      return <div>
              <Drawer open={true} width={190} containerStyle={styles.sideNav}>
                <Link to="/admin/home"><MenuItem primaryText="Home" leftIcon={<Home />}/></Link>
                <Link to="/admin/procurement"><MenuItem primaryText="Procurement" leftIcon={<PersonAdd />}/></Link>
                <Link to="/admin/organizations"><MenuItem primaryText="Organizations" leftIcon={<AccountBalance />}/></Link>
                <Link to="/admin/contacts" activeClassName='active' ><MenuItem primaryText="Contacts" leftIcon={<Face />}/></Link>
                <Link to="/admin/businesses"><MenuItem primaryText="Businesses" leftIcon={<Business />}/></Link>
                <Link to="/admin/users"><MenuItem primaryText="Users" leftIcon={<Group />}/></Link>
                <Link to="/admin/settings"><MenuItem primaryText="Settings" leftIcon={<Settings />}/></Link>
                <Link to="/admin/settings" ><MenuItem primaryText="Logout" leftIcon={<ExitToApp />}/></Link>
              </Drawer>
            </div>
    }

  }
