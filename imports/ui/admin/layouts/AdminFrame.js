import React from 'react';
import AdminNavigation from '../components/admin-navigation';

const styles = {
	adminContainer: {
		marginLeft: "200px"
	}
};

export const Admin = React.createClass({
propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return <div>
		    <AdminNavigation />
			    <main style={styles.adminContainer}>
			    	{ this.props.children }
			    </main>
		   </div>;
  }
});
