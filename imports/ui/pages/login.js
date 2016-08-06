import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleLogin } from '../../modules/login';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



  const styles = {
    card: {
      "width": "40%",
      "margin": "auto",
      "marginTop": "40px",
      "padding": "20px",
      textAlign: "center",
    },
    cardTitle: {
      textAlign: "center",
      fontSize: "35px",
      color: "grey",
      margin: "auto"
    },
    textField: {
      display: "block",
      width: "70%",
      margin: "auto",
      background: "#ffffff",
      backgroundColor: "#ffffff",
      marginBottom: "20px",
    },
    cardActionStyles: {
      margin: "auto"
    }
  }

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          emailAddress: '',
          password: '',
        }
  }

  _onButtonClick(){
    let email = this.state.emailAddress;
    let password = this.state.password;
    handleLogin(email, password);
  }

  _handleEmailChange(event) {
    let thisValue = event.target.value;
    if (thisValue.length === undefined){ return;}
    this.setState({
            emailAddress: thisValue
        });
  }

  _handlePasswprdChange(event) {
    let thisValue = event.target.value;
    if (thisValue.length === undefined){ return;}
    this.setState({
          password: thisValue
      });
  }

  render() {
    return <Card style={styles.card}>
        <CardHeader titleStyle={styles.cardTitle} title="Login"/>
            <TextField
              floatingLabelText="Email Address"
              style={styles.textField}
              type="email"
              ref="emailAddress"
              name="emailAddress"
              hintText="Email Address"
              value={this.state.emailAddress} 
              onChange={this._handleEmailChange.bind(this)}
            />   
            <TextField
              floatingLabelText="Password"
              style={styles.textField}
              type="password"
              ref="password"
              name="password"
              hintText="Password"
              value={this.state.password} 
              onChange={this._handlePasswprdChange.bind(this)}
            />
          <CardActions style={styles.cardActionStyles}>
            <RaisedButton primary={true} type="submit" label="Login" onClick={this._onButtonClick.bind(this)} />
            <Link to="/recover-password"><FlatButton label="Forgot Password?" /></Link>
          </CardActions>
    </Card>;
  }
}
