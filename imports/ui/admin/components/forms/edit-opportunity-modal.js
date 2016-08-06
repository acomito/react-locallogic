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




export default class EditOpportunityModal extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {
      open: false,
      canSubmit: false,
    };      
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

      console.log(data);
    }

    notifyFormError(data) {
      console.error('Form error:', data);
    }

    onSelectChange(event, key, payload){
      newState = {};
      newState[event.target.name] = payload;
      this.setState(newState);
    }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({
      open: false,
      canSubmit: false,
    });
  }

  render() {


    return (
      <div>
        <FloatingActionButton label="Update" backgroundColor="#4DB6AC" style={styles.FloatingActionButton} mini={true} zDepth={1} onTouchTap={this.handleOpen}><Edit/></FloatingActionButton>
        <Dialog
          title="Update Opportunity"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          modal={true}
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
              hintText="This contact's name... (will be publicly available)"
              floatingLabelText="Contact Name (public)"
              style={styles.fieldStyle}
              defaultValue={this.props.docToUpdate.title}
            />
            <FormsyText
              name="identificationNumber"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="This contacts phone..."
              floatingLabelText="Contact Phone (public)"
              style={styles.fieldStyle}
              defaultValue={this.props.docToUpdate.identificationNumber}
            />
            <FormsyText
              name="summary"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="This contacts email..."
              floatingLabelText="Contact Email (public)"
              style={styles.fieldStyle}
              defaultValue={this.props.docToUpdate.summary}
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
