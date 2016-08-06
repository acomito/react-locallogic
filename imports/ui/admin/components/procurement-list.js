import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import'flexboxgrid';
import FlatButton from 'material-ui/FlatButton';
import { Meteor } from 'meteor/meteor';
import Snackbar from 'material-ui/Snackbar';
import { Bert } from 'meteor/themeteorchef:bert';
import DialogDelete from '../components/dialog-delete.js'
import EditOpportunityModal from '../containers/edit-opportunity-modal.js'

const styles = {
	cardStyles: {
		margin: "10px",
		marginTop: "30px",
	}
}

const deleteProcurementOpp = (id) => {
	 Meteor.call('procurementOpps.remove', id);
	 Bert.alert('procurement opportunity removed!', 'success');
};


const renderIfData = ( procurementOpps ) => {

  if ( procurementOpps && procurementOpps.length > 0 ) {
    return procurementOpps.map( ( opportunity ) => {
      return <Card style={styles.cardStyles} className="col-xs-12 col-md-6 col-lg-4" key={ opportunity._id }>
      			<CardHeader title={ opportunity.title } />
      			    <CardText>
      			    <div>{ opportunity.summary }</div>
      			    <div>{ opportunity.identificationNumber }</div>
      			    <div>{ opportunity.requirements }</div>
      			    <div>{ opportunity.proposalDetails }</div>    
				    </CardText>
            <EditOpportunityModal docToUpdate={{ 
              _id: opportunity._id, 
              title: opportunity.title, 
              identificationNumber: opportunity.identificationNumber, 
              summary: opportunity.summary,
              requirements: opportunity.requirements,
              proposalDetails: opportunity.proposalDetails,
              moreDetails: opportunity.moreDetails,
              orgId: opportunity.orgId,
              proposalStart: opportunity.proposalStart,
              proposalDue: opportunity.proposalDue,
              supplierDiversity: opportunity.supplierDiversity,
            }}/>
            <DialogDelete style={styles.buttonStyles}  itemType="Procurement Opportunity" deleteMethod={deleteProcurementOpp.bind(this, opportunity._id )} />
      		</Card>;
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

export const ProcurementList = ({ procurementOpps }) => (
	<div className="row">{ renderIfData( procurementOpps ) }</div>
);

