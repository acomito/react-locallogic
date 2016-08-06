import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  mainPage: {
    background: "#009688",
    color: "#ffffff",
    paddingTop: "80px",
    paddingBottom: "80px",
  },
  landingHeader: {
  	  fontWeight: "100",
  	  marginBottom: "32px",
  	  fontSize: "33px",
  },
  landingSubHeader: {
  	  marginBottom: "30px",
  	  fontSize: "16px",
  	  fontWeight: "200",
  }
}

export const Index = () => (
  <div className="text-center" style={styles.mainPage}>
    <h2 style={styles.landingHeader}>Local Procurement Search</h2>
    <p style={styles.landingSubHeader}>Search for local procurement opportunities at hospitals, universities and non-profits.</p>
  </div>
);
