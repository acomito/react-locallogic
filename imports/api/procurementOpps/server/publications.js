import { Meteor } from 'meteor/meteor';
import { ProcurementOpps } from '../procurementOpps';

/*Meteor.publish('allProcurementOpps', () => console.log('publication ran'); ProcurementOpps.find());*/
Meteor.publish('allProcurementOpps', function(){
	console.log('allProcurementOpps publication ran');
	return ProcurementOpps.find();
});