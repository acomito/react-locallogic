import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
/*import { OrganizationInsertForm } from '../components/forms/admin-add-organizations.js';*/
import AddOrganizationModal  from '../components/add-organization-modal.js';
import OrganizationList  from '../containers/organization-list.js'; //remember this is the container not the component
import { OrganizationInsertForm } from '../components/forms/admin-add-organizations.js'; //remember this is the container not the component

export class AdminOrganizations extends React.Component {

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
						<OrganizationInsertForm />
				   </div>;
  	} else {
  			return <div>
              <AddOrganizationModal />
            {/*<AddOrganizationModal />*/}
						{/*<FloatingActionButton onClick={this._toggleAddProcurementOppForm.bind(this)} ><ContentAdd/></FloatingActionButton>*/}
  						<OrganizationList />
				   </div>;
  	}
    
  }

}


