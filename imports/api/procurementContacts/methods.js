import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { ProcurementContacts } from './procurementContacts';
import { ProcurementOrgs } from '../procurementOrgs/procurementOrgs';



 
Meteor.methods({

  //INSERT PROCUREMNT
  //-------------------------------- 
  'procurementContacts.insert'(doc) {
    console.log(doc);
    check(doc, Object);
    check(doc.publicContactName, String);
    check(doc.publicContactPhone, String);
    check(doc.publicContactEmail, String);
    check(doc.otherInfo, String);
    check(doc.orgId, String);

    const organizationDocument = ProcurementOrgs.findOne({_id: doc.orgId});
    const orgTitle = organizationDocument.title
    
    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    ProcurementContacts.insert({
      publicContactName: doc.publicContactName,
      publicContactPhone: doc.publicContactPhone,
      publicContactEmail: doc.publicContactEmail,
      otherInfo: doc.otherInfo,
      orgId: doc.orgId,
      orgName: orgTitle,
    });
    console.log('it ran!');
  },
    //INSERT PROCUREMNT
  //-------------------------------- 
  'procurementContacts.update'(doc) {
    console.log(doc);
    check(doc, Object);
    check(doc._id, String);
    check(doc.publicContactName, String);
    check(doc.publicContactPhone, String);
    check(doc.publicContactEmail, String);
    check(doc.otherInfo, String);
    check(doc.orgId, String);

    const organizationDocument = ProcurementOrgs.findOne({_id: doc.orgId});
    const orgTitle = organizationDocument.title
    
    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    ProcurementContacts.update({ _id: doc._id}, { $set: {
      publicContactName: doc.publicContactName,
      publicContactPhone: doc.publicContactPhone,
      publicContactEmail: doc.publicContactEmail,
      otherInfo: doc.otherInfo,
      orgId: doc.orgId,
      orgName: orgTitle,
    }}, function(err, doc){
        if (err) {console.log(err); return;}
    });
    console.log('procurementContacts.update it ran!');
  },

  //REMOVE PROCUREMNT
  //-------------------------------- 
  'procurementContacts.remove'(id) {
    console.log(id);
    check(id, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    ProcurementContacts.remove({
      _id: id
    });
    console.log('ProcurementOrgs.remove it ran!');
  }
});