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
import Geosuggest from 'react-geosuggest';



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

export class OrganizationInsertForm extends React.Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	    	canSubmit: false,
        location: {},
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
	  	var organizationToInsert = {
	  		title: data.title,
	  		summary: data.summary,
	  		logo: data.logo,
        location: this.state.location
	  	};
	    Meteor.call('procurementOrgs.insert', organizationToInsert, function(error, result){
	            if (error) {
	              Bert.alert('Oops! ' + error.reason, 'error'); 
	            } else {
	                Bert.alert('procurement opportunity added!', 'success');
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

	render()  {

		return <Card style={styles.paperStyle}>
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
            />
            <Geosuggest name="location" onSuggestSelect={this.geoSuggestion.bind(this)} required />
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
              label="Submit"
              disabled={!this.state.canSubmit}
              primary={true}
            />
             </Formsy.Form>
             </Card>
	}
	       
};