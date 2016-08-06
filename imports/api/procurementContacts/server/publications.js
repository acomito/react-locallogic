import { Meteor } from 'meteor/meteor';
import { ProcurementContacts } from '../procurementContacts';

/*Meteor.publish('allProcurementOpps', () => console.log('publication ran'); ProcurementOpps.find());*/
Meteor.publish('allProcurementContacts', function(){
	console.log('allProcurementContacts publication ran');
	return ProcurementContacts.find();
});