import { composeWithTracker } from 'react-komposer';
import { ProcurementOrgs } from '../../../api/procurementOrgs/procurementOrgs.js';
import { OrganizationList } from '../components/organization-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('allProcurementOrgs');
  if (subscription.ready()) {
    const procurementOrgs = ProcurementOrgs.find().fetch();
    onData(null, { procurementOrgs });
  }
};

export default composeWithTracker(composer, Loading)(OrganizationList);
