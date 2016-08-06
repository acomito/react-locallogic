// using a modal: https://github.com/mbrookes/formsy-material-ui/issues/102

import React from 'react';
import Paper from 'material-ui/Paper';
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
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton,
} from 'material-ui/Stepper';



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

export class ProcurementInsertForm extends React.Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	    	canSubmit: false,
        finished: false,
        stepIndex: 0,
	    };      
	  }

  handleNext() {
    var stepIndex = this.state.stepIndex;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev(){
    var stepIndex = this.state.stepIndex;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

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
	  	console.log(data.title);
	  }

  renderStepActions(step) {
    const stepIndex = this.state.stepIndex;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={this.state.stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          type={this.state.stepIndex === 2 ? "submit" : "button"}
          onTouchTap={this.state.stepIndex === 2 ? this.submitForm.bind(this) : this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev.bind(this)}
          />
        )}
      </div>
    );
  }

	  notifyFormError(data) {
	    console.error('Form error:', data);
	  }

	render()  {
    const stepIndex = this.state.stepIndex;
    const finished = this.state.finished;

    return <div style={{maxWidth: 680, maxHeight: 600, margin: 'auto'}}>
        <Formsy.Form
              onValid={this.enableButton.bind(this)}
              onInvalid={this.disableButton.bind(this)}
              onValidSubmit={this.submitForm.bind(this)}
              onInvalidSubmit={this.notifyFormError.bind(this)}
          >
        <Stepper activeStep={stepIndex} orientation="vertical" linear={false}>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
              Basic Information
            </StepButton>
            <StepContent>
            <Paper zDepth={2} style={styles.paperStyles}>
            <FormsyText
              name="title"
              validations="isWords"
              validationError={errorMessages.wordsError}
              required
              hintText="e.g. title of this opportunity"
              floatingLabelText="Title"
              style={styles.fieldStyle}
            />
            </Paper>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
              Additional Information
            </StepButton>
            <StepContent>
              <Paper zDepth={2} style={styles.paperStyles}>

              </Paper>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
              Supplier Diversity
            </StepButton>
            <StepContent>
              <Paper zDepth={2} style={styles.paperStyles}>


              </Paper>
              <RaisedButton
              style={styles.submitStyle}
              type="submit"
              label="Submit"
              disabled={!this.state.canSubmit}
              primary={true}
            />
            </StepContent>
          </Step>
        </Stepper>
        </Formsy.Form>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>;
  }

	       
};