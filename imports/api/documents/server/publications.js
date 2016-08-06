import { Meteor } from 'meteor/meteor';
import { Documents } from '../documents';

/*Meteor.publish('documents', () => Documents.find());*/

Meteor.publish('documents', function(){
	console.log('documents publication ran');
	return Documents.find();
});