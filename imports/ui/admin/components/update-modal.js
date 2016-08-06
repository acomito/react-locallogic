import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import'flexboxgrid';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Formsy from 'formsy-react';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, 
  FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
import MenuItem from 'material-ui/MenuItem';
import Geosuggest from 'react-geosuggest';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Edit from 'material-ui/svg-icons/image/edit';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */



const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
  };

const styles =  {
    paperStyle: {
      width: "60%",
      margin: 'auto',
      padding: 20,
    },
    FloatingActionButton: {
      marginLeft: "0px",
    },
    fieldStyle: {
      display: "block",
      width: "90%"
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
  };

const updateProcurementOrg = (doc) => {
   Meteor.call('procurementOrgs.update', doc);
   Bert.alert('procurement organization updated!', 'success');
};

const originalState = {
      open: false,
      canSubmit: false,
      location: {},
      updateLocation: false
    };

export default class UpdateModal extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.toggleUpdateLocation = this.toggleUpdateLocation.bind(this)
    this.state = originalState;      
  }


  toggleUpdateLocation(){
    let currentState = this.state.updateLocation;
    this.setState({
            updateLocation: !currentState,
    });
  }


    enableButton() {
      this.setState({
        canSubmit: true,
      });
    }

    selectFieldItems(){
      console.log('selectFieldItems ran');
    }

    disableButton() {
      this.setState({
        canSubmit: false,
      });
    }

    submitForm(data) {
      if (this.state.updateLocation === true) {
          console.log('update location');
          return;
      }
      console.log('regular update');
      let docToUpdate = {
            _id: this.props.docToUpdate._id,
            title: data.title,
            summary: data.summary,
            logo: data.logo,
            location: this.props.docToUpdate.location,
          };
          Meteor.call('procurementOrgs.update', docToUpdate);
          this.setState(originalState);
          Bert.alert('procurement organization updated!', 'success');
      return;
    }

    notifyFormError(data) {
      console.error('Form error:', data);
    }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState(originalState);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Yes, Delete This."
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FloatingActionButton label="Update" backgroundColor="#4DB6AC" style={styles.FloatingActionButton} mini={true} zDepth={1} onTouchTap={this.handleOpen}><Edit/></FloatingActionButton>
        <Dialog
          title="Update Organization"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
    <Formsy.Form
              onValid={this.enableButton.bind(this)}
              onInvalid={this.disableButton.bind(this)}
              onValidSubmit={this.submitForm.bind(this)}
              onInvalidSubmit={this.notifyFormError.bind(this)}
            >
            <FormsyText
              name="title"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="The title of the organizaiton?"
              floatingLabelText="Organization Title"
              style={styles.fieldStyle}
              defaultValue={this.props.docToUpdate.title}
            />
            <FormsyText
              name="summary"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="summary of the organizaiton?"
              floatingLabelText="summary"
              style={styles.fieldStyle}
              defaultValue={this.props.docToUpdate.summary}
            />           
            <FormsyText
              name="logo"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="logo of the organizaiton?"
              floatingLabelText="Logo URL"
              style={styles.fieldStyle}
              defaultValue={this.props.docToUpdate.logo}
            />
            {
              this.state.updateLocation === true ?
              <div>
              <h5>Add New Location:</h5>
                <Geosuggest name="location" onSuggestSelect={console.log('okay bruh')} required />
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onTouchTap={this.toggleUpdateLocation}
                />
              </div> 
              :
              <div>
                <h5>LOCATION:</h5>
                <h6>{this.props.docToUpdate.location.address}</h6>
                <FlatButton
                  label="Click to Update Location"
                  primary={true}
                  onTouchTap={this.toggleUpdateLocation}
                />
              </div>
            }
            <RaisedButton
              style={styles.submitStyle}
              type="submit"
              label="Save"
              disabled={!this.state.canSubmit}
              primary={true}
            />
            <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
            />
             </Formsy.Form>

        </Dialog>
      </div>
    );
  }
}
