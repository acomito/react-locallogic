import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import'flexboxgrid';
import FlatButton from 'material-ui/FlatButton';
import { Meteor } from 'meteor/meteor';
import Snackbar from 'material-ui/Snackbar';
import { Bert } from 'meteor/themeteorchef:bert';
import DialogDelete from '../components/dialog-delete.js'
import EditContactModal from '../containers/edit-contact-modal.js'


const styles = {
	cardStyles: {
		margin: "10px",
		marginTop: "30px",
	}
}

const deleteProcurementContact = (id) => {
	 Meteor.call('procurementContacts.remove', id);
	 Bert.alert('procurement contact removed!', 'success');
};

const renderIfData = ( procurementContacts ) => {

  if ( procurementContacts && procurementContacts.length > 0 ) {
    return procurementContacts.map( ( contact ) => {
      return <Card style={styles.cardStyles} className="col-xs-12 col-md-6 col-lg-4" key={ contact._id }>
      			<CardHeader title={ contact.publicContactName } />
            <EditContactModal docToUpdate={{
                _id: contact._id,
                publicContactName: contact.publicContactName,
                publicContactPhone: contact.publicContactPhone,
                publicContactEmail: contact.publicContactEmail,
                otherInfo: contact.otherInfo,
                orgId: contact.orgId,
            }} />
            <DialogDelete itemType="Contact Template" deleteMethod={deleteProcurementContact.bind(this, contact._id )} />
      		</Card>;
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

export const ContactList = ({ procurementContacts }) => (
	<div className="row">{ renderIfData( procurementContacts ) }</div>
);
