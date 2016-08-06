// using a modal: https://github.com/mbrookes/formsy-material-ui/issues/102

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import'flexboxgrid';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Meteor } from 'meteor/meteor';
import Snackbar from 'material-ui/Snackbar';
import { Bert } from 'meteor/themeteorchef:bert';
import Formsy from 'formsy-react';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, 
  FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
  import MenuItem from 'material-ui/MenuItem';


const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
  };

const styles =  {
    paperStyle: {
      width: "70%",
      margin: 'auto',
      padding: 30,
    },
    fieldStyle: {
    	display: "block",
    	width: "80%"
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
  };

export class ContactInsertForm extends React.Component {

	 constructor(props) {
	    super(props);
	    this.state = {
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
	  	console.log(data.org);
	  	var contactToInsert = {
        publicContactName: data.publicContactName,
        publicContactPhone: data.publicContactPhone,
        publicContactEmail: data.publicContactEmail,
        otherInfo: data.otherInfo,
        orgId: data.orgId,
	  	};
	    Meteor.call('procurementContacts.insert', contactToInsert, function(error, result){
	            if (error) {
	              Bert.alert('Oops! ' + error.reason, 'error'); 
	            } else {
	                Bert.alert('procurement contact added!', 'success');
	            }
	    });
	  }

	  notifyFormError(data) {
	    console.error('Form error:', data);
	  }

	render()  {

		return <Card style={styles.paperStyle}>
            <CardHeader 
              title="Add Contact"
              subtitle="These are templates for contacts at procurment oragnizaitons. Templates make adding procurement opportunities faster."
            />
		<Formsy.Form
	            onValid={this.enableButton.bind(this)}
	            onInvalid={this.disableButton.bind(this)}
	            onValidSubmit={this.submitForm.bind(this)}
	            onInvalidSubmit={this.notifyFormError.bind(this)}
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
              label="Submit"
              disabled={!this.state.canSubmit}
              primary={true}
            />
             </Formsy.Form>
             </Card>
	}
	       
};