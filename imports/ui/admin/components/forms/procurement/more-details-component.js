//NOTES
// http://stackoverflow.com/questions/36512686/react-dynamically-add-input-fields-to-form
// http://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle

/*import React from 'react';
import Paper from 'material-ui/Paper';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';



const styles = {
    procurementFormField: {
      width: "80%",
    },
    paperStyles: {
      padding: "30px",
    }
}


export class ProcurementInsertForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          finished: false,
          stepIndex: 0,
          title: '',
          summary: '',
          identificationNumber: '',
          requirements: '',
          proposalDetails: '',
          /*moreDetails: [{
            _id: 0,
            title: '',
          }],*/
          moreDetails: [{
            _id: 0,
            title: '',
          }],
          supplierDiversity: {
            womenOwned: false,
            economicallyWomenOwned: false,
            minorityOwned: false,
            veteranOwned: false,
            hubZone: false,
            lgbtOwned: false,
            disabledVeteranOwned: false,
            underutilizedBusiness: false,
            workerOwned: false,
            bCorp: false,     
            },
        }
  }

    _submitNewProcurementOpp(){
      //1. go through the component's state to compile the document to be inserted
      let documentToInsert = {
          title: this.state.title,
          summary: this.state.summary,
          identificationNumber: this.state.identificationNumber,
          requirements: this.state.requirements,
          proposalDetails: this.state.proposalDetails,
          supplierDiversity: {
                womenOwned: this.state.supplierDiversity.womenOwned,
                economicallyWomenOwned: this.state.supplierDiversity.economicallyWomenOwned,
                minorityOwned: this.state.supplierDiversity.minorityOwned,
                veteranOwned: this.state.supplierDiversity.veteranOwned,
                hubZone: this.state.supplierDiversity.hubZone,
                lgbtOwned: this.state.supplierDiversity.lgbtOwned,
                disabledVeteranOwned: this.state.supplierDiversity.disabledVeteranOwned,
                underutilizedBusiness: this.state.supplierDiversity.underutilizedBusiness,
                workerOwned: this.state.supplierDiversity.workerOwned,
                bCorp: this.state.supplierDiversity.bCorp,
              },
      };
      //2. call Meteor method and pass in the document
      Meteor.call('procurementOpps.insert', documentToInsert);
      // 3. set off a bert-alert to let user know the form submitted (todo: move into the callback so it only runs on successful insertion)
      Bert.alert('procurement opportunity added!', 'success');
      // 4. reset all of the state
      this.setState({ 
        title: '',
        summary: '',
        identificationNumber: '',
        requirements: '',
        proposalDetails: '',
        moreDetails: [],
        supplierDiversity: {
              womenOwned: false,
              economicallyWomenOwned: false,
              minorityOwned: false,
              veteranOwned: false,
              hubZone: false,
              lgbtOwned: false,
              disabledVeteranOwned: false,
              underutilizedBusiness: false,
              workerOwned: false,
              bCorp: false, 
            },
      });
      // 5. call this function from the parent component. This hides the form and shows the user the current list of procurement
      this.props.onFormSubmit();

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

  appendMoreDetailsInput() {
        var newId = this.state.moreDetails.length + 1;
        var newInput = {
          _id: newId,
          title: ''
        };
        /*var newInput = `input-${this.state.moreDetails.length}`;*/
        this.setState({ moreDetails: this.state.moreDetails.concat([newInput]) });
        console.log(this.state.moreDetails);
    }

  removeMoreDetailsInput(index) {
      var currentArray = this.state.moreDetails;
      console.log(index);
      console.log(currentArray);
      currentArray.splice(index, 1);
      this.setState({ moreDetails: this.state.moreDetails.splice(0, this.state.moreDetails.length, currentArray.toString()) });
    
    }

  _handleArrayFieldChange(index, e) {
    var currentState = this.state.moreDetails;
    var currentArrayObject = currentState[index];
    var newName = e.target.value;
    currentArrayObject.title = newName;
    console.log(currentArrayObject.title);
    
/*    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);*/
  }

  _handleFieldChange(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
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
          onTouchTap={this.state.stepIndex === 2 ? this._submitNewProcurementOpp.bind(this) : this.handleNext.bind(this)}
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

  render() {
    const stepIndex = this.state.stepIndex;
    const finished = this.state.finished;

    return <div style={{maxWidth: 680, maxHeight: 600, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical" linear={false}>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
              Basic Information
            </StepButton>
            <StepContent>
            <Paper zDepth={2} style={styles.paperStyles}>
              <TextField
                name="title"
                style={styles.procurementFormField}
                hintText="e.g. title of this opportunity"
                floatingLabelText="Title"
                value={this.state.title} 
                onChange={this._handleFieldChange.bind(this)}
              />
              <TextField
              name="identificationNumber"
              style={styles.procurementFormField}
              hintText="e.g. identification Number of this opportunity"
              floatingLabelText="identification Number"
              value={this.state.identificationNumber} 
              onChange={this._handleFieldChange.bind(this)}
             />
            <TextField
              name="summary"
              style={styles.procurementFormField}
              hintText="e.g. summary of this opportunity"
              floatingLabelText="Summary"
              value={this.state.summary} 
              onChange={this._handleFieldChange.bind(this)}
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
                <TextField
                  name="requirements"
                  style={styles.procurementFormField}
                  hintText="e.g. Requirements of this opportunity"
                  floatingLabelText="Requirements"
                  value={this.state.requirements} 
                  onChange={this._handleFieldChange.bind(this)}
               />
               <TextField
                name="proposalDetails"
                style={styles.procurementFormField}
                hintText="e.g. proposalDetails of this opportunity"
                floatingLabelText="proposalDetails"
                value={this.state.proposalDetails} 
                onChange={this._handleFieldChange.bind(this)}
               />
               <Paper>
                 {this.state.moreDetails.map(function(input, index, array){
                    return <Paper key={index}>
                              <TextField 
                                  name="moreDetails" 
                                  floatingLabelText="Title"
                                  onChange={this._handleArrayFieldChange.bind(this, index)} 
                                />
                               <FlatButton label="Remove" onClick={this.removeMoreDetailsInput.bind(this, index)} />
                          </Paper>
                 }, this)}    
               <FlatButton label="CLICK ME TO ADD AN INPUT" onClick={this.appendMoreDetailsInput.bind(this)}>
                   
               </FlatButton>
               </Paper>
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
                <Checkbox
                  label="Women-Owned"
                  name="supplierDiversity.womenOwned"
                  value={this.state.supplierDiversity.womenOwned} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="Economically Women-Owned"
                  name="supplierDiversity.economicallyWomenOwned"
                  value={this.state.supplierDiversity.economicallyWomenOwned} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="Minority-Owned"
                  name="supplierDiversity.minorityOwned"
                  value={this.state.supplierDiversity.minorityOwned} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="veteranOwned"
                  name="supplierDiversity.veteranOwned"
                  value={this.state.supplierDiversity.veteranOwned} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="hubZone"
                  name="supplierDiversity.hubZone"
                  value={this.state.supplierDiversity.hubZone} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="lgbtOwned"
                  name="supplierDiversity.lgbtOwned"
                  value={this.state.supplierDiversity.lgbtOwned} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="disabledVeteranOwned"
                  name="supplierDiversity.disabledVeteranOwned"
                  value={this.state.supplierDiversity.disabledVeteranOwned} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="underutilizedBusiness"
                  name="supplierDiversity.underutilizedBusiness"
                  value={this.state.supplierDiversity.underutilizedBusiness} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="workerOwned"
                  name="supplierDiversity.workerOwned"
                  value={this.state.supplierDiversity.workerOwned} 
                  onChange={this._handleFieldChange.bind(this)}
                />
                <Checkbox
                  label="bCorp"
                  name="supplierDiversity.bCorp"
                  value={this.state.supplierDiversity.bCorp} 
                  onChange={this._handleFieldChange.bind(this)}
                />
              </Paper>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
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
}*/

