import React from 'react';
import { Row, Col, Alert, FormGroup, FormControl, Button } from 'react-bootstrap';
import { handleRecoverPassword } from '../../modules/recover-password';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';


const styles = {
  cardStyles: {
    width: "50%",
    padding: "40px",
    margin: "40px auto",
    marginTop: "40px", 
  },
  snackbarAlert: {
    backgroundColor: "teal",
  },
  textField: {
    width: "90%"
  },
  cardTitle: {
      fontSize: "35px",
      color: "grey",
  },
}



export class RecoverPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          emailAddress: '',
        }
  }

    _onButtonClick(){
    let email = this.state.emailAddress;
    handleRecoverPassword(email);
  }

    _handleEmailChange(event) {
    let thisValue = event.target.value;
    if (thisValue.length === undefined){ return;}
    this.setState({
            emailAddress: thisValue
        });
  }

  render() {
    return <Card style={styles.cardStyles}>
        <CardHeader title="Recover Password" style={styles.cardTitle} />
        <Snackbar
            open={true}
            bodyStyle={styles.snackbarAlert} 
            autoHideDuration={7000}
            message="Enter your email address to receive a link to reset your password." 
        />
            <TextField
             floatingLabelText="Email Address"
              type="email"
              ref="emailAddress"
              name="emailAddress"
              style={styles.textField}
              value={this.state.emailAddress} 
              onChange={this._handleEmailChange.bind(this)}
            />
            <CardActions>
              <RaisedButton type="submit" label="Recover Password" primary={true} onClick={this._onButtonClick.bind(this)}/>
            </CardActions>
    </Card>;
  }
}
