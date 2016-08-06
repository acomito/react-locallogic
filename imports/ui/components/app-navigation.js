import React from 'react';
/*import { Navbar } from 'react-bootstrap';*/
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  AppNavigation: {
    background: "#009688",
    color: "#ffffff",
    boxShadow: "none",
  },
  titleLink: {
    textDecoration: "none",
    color: "#ffffff"
  },
  navLink: {
    color: "#ffffff"
  }
}

export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

    render() {
      return <AppBar
              style={styles.AppNavigation}
              title={<Link to="/" style={styles.titleLink}>LocalLogic</Link>}
              showMenuIconButton={false}
              iconElementRight={
                <div>
                  <Link to="/login"  ><FlatButton style={styles.navLink} label="About" /></Link>
                  <Link to="/signup" ><FlatButton style={styles.navLink} label="Signup" /></Link>
                  <Link to="/login"  ><FlatButton style={styles.navLink} label="Login" /></Link>
                </div>
              }
            />;
    }

  }

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};






/*
export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render() {
    return <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Application Name</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        { this.renderNavigation(this.props.hasUser) }
      </Navbar.Collapse>
    </Navbar>;
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

*/
