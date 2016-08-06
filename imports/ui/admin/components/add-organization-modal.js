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
import ContentAdd from 'material-ui/svg-icons/content/add';

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

export default class AddOrganizationModal extends React.Component {

   constructor(props) {
    super(props);
    this.state = originalState;
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.toggleUpdateLocation = this.toggleUpdateLocation.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.notifyFormError = this.notifyFormError.bind(this);
    this.geoSuggestion = this.geoSuggestion.bind(this);
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

      var organizationToInsert = {
        title: data.title,
        summary: data.summary,
        logo: data.logo,
        location: this.state.location
      };


    const successfulSubmit = ( ) =>{
      this.setState(originalState);
    }

      Meteor.call('procurementOrgs.insert', organizationToInsert, function(error, result){
              if (error) {
                Bert.alert('Oops! ' + error.reason, 'error'); 
              } else {
                  Bert.alert('procurement opportunity added!', 'success');
                  successfulSubmit();
              }
      });
    }

    geoSuggestion(suggest) {
      let newState = {};
      newState["location"] = suggest;
      this.setState(newState);
      console.log(this.state.location);
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
      <FloatingActionButton onClick={this.handleOpen} ><ContentAdd/></FloatingActionButton>
        <Dialog
          title="Update Organization"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
    <Formsy.Form
              onValid={this.enableButton}
              onInvalid={this.disableButton}
              onValidSubmit={this.submitForm}
              onInvalidSubmit={this.notifyFormError}
            >
            <FormsyText
              name="title"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="The title of the organizaiton?"
              floatingLabelText="Organization Title"
              style={styles.fieldStyle}
            />
            <Geosuggest name="location" onSuggestSelect={this.geoSuggestion} required />
            <FormsyText
              name="summary"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="summary of the organizaiton?"
              floatingLabelText="summary"
              style={styles.fieldStyle}
            />           
            <FormsyText
              name="logo"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="logo of the organizaiton?"
              floatingLabelText="Logo URL"
              style={styles.fieldStyle}
            />
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
