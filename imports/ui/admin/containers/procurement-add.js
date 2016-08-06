import { composeWithTracker } from 'react-komposer';
import { ProcurementOrgs } from '../../../api/procurementOrgs/procurementOrgs.js';
import { ProcurementContacts } from '../../../api/procurementContacts/procurementContacts.js';
import { ContactInsertForm } from '../components/forms/admin-add-contacts.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';
import { ProcurementInsertForm } from '../components/admin-procurement-insert-form';

const composer = (params, onData) => {
  const subscriptionOrgs = Meteor.subscribe('allProcurementOrgs');
  const subscriptionContacts = Meteor.subscribe('allProcurementContacts');

  if (subscriptionOrgs.ready() && subscriptionContacts.ready()) {
    const procurementOrgs = ProcurementOrgs.find().fetch();
    const procurementContacts = ProcurementContacts.find().fetch();
    onData(null, { procurementOrgs, procurementContacts });
  }

};

export default composeWithTracker(composer, Loading)(ProcurementInsertForm);
