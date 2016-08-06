import { Meteor } from 'meteor/meteor';
import { ProcurementOrgs } from '../procurementOrgs';

/*Meteor.publish('allProcurementOpps', () => console.log('publication ran'); ProcurementOpps.find());*/
Meteor.publish('allProcurementOrgs', function(){
	console.log('allProcurementOrgs publication ran');
	return ProcurementOrgs.find();
});