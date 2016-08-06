import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import'flexboxgrid';
import FlatButton from 'material-ui/FlatButton';
import { Meteor } from 'meteor/meteor';
import Snackbar from 'material-ui/Snackbar';
import { Bert } from 'meteor/themeteorchef:bert';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import DialogDelete from '../components/dialog-delete.js'
import UpdateModal from '../components/update-modal.js'

const styles = {
	cardStyles: {
		marginTop: "30px",
	},
	CardHeader: {
		textAlign: "center",
	},
}

const deleteProcurementOrg = (id) => {
	 Meteor.call('procurementOrgs.remove', id);
	 Bert.alert('procurement organization removed!', 'success');
};




const renderIfData = ( procurementOrgs ) => {

  if ( procurementOrgs && procurementOrgs.length > 0 ) {
    return procurementOrgs.map( ( org ) => {
      return <div className="col-xs-12 col-md-6 col-lg-4">
      			<Card style={styles.cardStyles} className="box" key={ org._id }>
      				<CardTitle titleStyle={styles.CardHeader} title={ org.title } />
      				<CardText></CardText>
      				<CardActions>
	      				<div className="row bottom-xs end-xs" style={styles.bottomRow}>
		      				<div className="col-xs-4">
			      				<div className="box">
				      				<div className="row between-xs">	
					      				<div className="col-xs">
						      				<div className="box">
							      				<UpdateModal docToUpdate={{ _id: org._id, title: org.title, summary: org.summary, logo: org.logo, location: {address: org.location.address, lat: org.location.lat, lng: org.location.lng, gmaps: org.location.gmaps, placeId: org.location.placeId,geometry: { type: org.location.type, coordinates: [org.location.lng, org.location.lat],},}}} 
							      				/>
						      				</div>
					      				</div>
					      				<div className="col-xs">
						      				<div className="box">
						      					<DialogDelete style={styles.buttonStyles}  itemType="Procurement Organization" deleteMethod={deleteProcurementOrg.bind(this, org._id )} />
						      				</div>
					      				</div>
				      				</div>
			      				</div>
		      				</div>
	      				</div>
      				</CardActions>
      			</Card>
      		</div>;
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

export const OrganizationList = ({ procurementOrgs }) => (
	<div className="row">{ renderIfData( procurementOrgs ) }</div>
);