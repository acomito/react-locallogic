import React from 'react';
/*import { ProcurementInsertForm } from '../components/admin-procurement-insert-form';*/
import ProcurementInsertForm  from '../containers/procurement-add';
/*import { ProcurementInsertForm } from '../components/forms/admin-add-procurement';*/
import ProcurementList from '../containers/procurement-list.js'; //remember this is the container not the component
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export class AdminProcurement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          showForm: false
        }
  }

   _changeHandler() {
   		this.setState({ showForm: false});
    }

  _toggleAddProcurementOppForm(){
  	var currentFormState = this.state.showForm;
	this.setState({ showForm: !currentFormState});
  }

  render() {
  	if (this.state.showForm === true) {
			return <div>
						<FlatButton label="back to list" onClick={this._toggleAddProcurementOppForm.bind(this)} />
						<ProcurementInsertForm onFormSubmit={this._changeHandler.bind(this)} />

				   </div>;
  	} else {
  			return <div>
  						<FloatingActionButton onClick={this._toggleAddProcurementOppForm.bind(this)} >
  							<ContentAdd/>
  						</FloatingActionButton>
  						<ProcurementList /> 
  					</div>;
  	}
    
  }
}
