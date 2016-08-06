import React from 'react';
import { Link } from 'react-router';
import { handleSignup } from '../../modules/signup';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


const styles = {
  cardStyles: {
    width: "50%",
    padding: "40px",
    margin: "60px auto",
    textAlign: "center"
  },
  inputStyles: {
    display: "block",
    margin: "20px auto",
    width: "60%"
  }
}

export class Signup extends React.Component {

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
    handleSignup(email, password);
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
    return <Card style={styles.cardStyles}  >
            <CardHeader title="Sign Up"  />
            <TextField
              type="text"
              ref="emailAddress"
              name="emailAddress"
              floatingLabelText="Email Address"
              value={this.state.emailAddress} 
              onChange={this._handleEmailChange.bind(this)}
              style={styles.inputStyles}
            />
            <TextField
              type="password"
              ref="password"
              name="password"
              floatingLabelText="Password"
              value={this.state.password} 
              onChange={this._handlePasswprdChange.bind(this)}
              style={styles.inputStyles}
            />
            <CardActions>
              <RaisedButton type="submit" label="Sign Up"  onClick={this._onButtonClick.bind(this)} primary={true}/>
              <p>Already have an account? <Link to="/login">Log In</Link>.</p>
            </CardActions>
    </Card>;
  }
}
