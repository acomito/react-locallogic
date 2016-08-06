import { composeWithTracker } from 'react-komposer';
import { ProcurementContacts } from '../../../api/procurementContacts/procurementContacts.js';
import { ContactList } from '../components/contact-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('allProcurementContacts');
  if (subscription.ready()) {
    const procurementContacts = ProcurementContacts.find().fetch();
    onData(null, { procurementContacts });
  }
};

export default composeWithTracker(composer, Loading)(ContactList);