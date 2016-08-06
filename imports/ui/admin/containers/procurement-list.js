import { composeWithTracker } from 'react-komposer';
import { ProcurementOpps } from '../../../api/procurementOpps/procurementOpps.js';
import { ProcurementList } from '../components/procurement-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('allProcurementOpps');
  if (subscription.ready()) {
    const procurementOpps = ProcurementOpps.find().fetch();
    onData(null, { procurementOpps });
  }
};

export default composeWithTracker(composer, Loading)(ProcurementList);
