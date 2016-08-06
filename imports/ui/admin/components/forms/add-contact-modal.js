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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


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


const originalState = {
      open: false,
      canSubmit: false,
    };

export default class AddContactModal extends React.Component {

   constructor(props) {
    super(props);
    this.state = originalState;
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.notifyFormError = this.notifyFormError.bind(this);
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
      console.log(data.org);
      var contactToInsert = {
        publicContactName: data.publicContactName,
        publicContactPhone: data.publicContactPhone,
        publicContactEmail: data.publicContactEmail,
        otherInfo: data.otherInfo,
        orgId: data.orgId,
      };

      const successfulSubmit = ( ) =>{
        this.setState(originalState);
      }

      Meteor.call('procurementContacts.insert', contactToInsert, function(error, result){
              if (error) {
                Bert.alert('Oops! ' + error.reason, 'error'); 
              } else {
                  Bert.alert('procurement contact added!', 'success');
                  successfulSubmit();
              }
      });
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

    return (
      <div>
      <FloatingActionButton onClick={this.handleOpen} ><ContentAdd/></FloatingActionButton>
        <Dialog
          title="Add Contact"
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
              name="publicContactName"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="This contact's name... (will be publicly available)"
              floatingLabelText="Contact Name (public)"
              style={styles.fieldStyle}
            />
            <FormsyText
              name="publicContactPhone"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="This contacts phone..."
              floatingLabelText="Contact Phone (public)"
              style={styles.fieldStyle}
            />
            <FormsyText
              name="publicContactEmail"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="This contacts email..."
              floatingLabelText="Contact Email (public)"
              style={styles.fieldStyle}
            />
            <FormsyText
              name="otherInfo"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="Other notes on this contact template (private, for yourself)"
              floatingLabelText="Other Notes (Private/Internal)"
              style={styles.fieldStyle}
            />
            <FormsySelect
            name="orgId"
            required
            floatingLabelText="Organization?"
            menuItems={this.selectFieldItems}
            style={styles.fieldStyle}
            >
            {this.props.procurementOrgs.map(function(org){
              console.log(org.title);
              return <MenuItem value={org._id} key={org._id} primaryText={org.title}  />
              {/*return <MenuItem value={{id: org._id, name: org.title}} key={org._id} primaryText={org.title}  />*/}
            })}  
            </FormsySelect>
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
