import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { ProcurementOrgs } from '../procurementOrgs/procurementOrgs';

 
Meteor.methods({

  //            GET ALL PROCUREMENT ORGANIZATIONS
  //-------------------------------------------------------- 
  'utility.getAllOrgs'() {

    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    return ProcurementOrgs.find();

    console.log('getAllOrgs ran!');
  },
});