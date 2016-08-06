import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { ProcurementOpps } from './procurementOpps';

 
Meteor.methods({

  //INSERT PROCUREMNT
  //-------------------------------- 
  'procurementOpps.insert'(doc) {
  	console.log('method recieved: ' + doc.supplierDiversity.womenOwned);
    check(doc, Object);
    check(doc.title, String);
    check(doc.summary, String);
    check(doc.identificationNumber, String);
    check(doc.requirements, String);
    check(doc.proposalDetails, String);

    check(doc.supplierDiversity.womenOwned, Boolean);
    check(doc.supplierDiversity.economicallyWomenOwned, Boolean);
    check(doc.supplierDiversity.minorityOwned, Boolean);
    check(doc.supplierDiversity.hubZone, Boolean);
    check(doc.supplierDiversity.lgbtOwned, Boolean);
    check(doc.supplierDiversity.disabledVeteranOwned, Boolean);
    check(doc.supplierDiversity.underutilizedBusiness, Boolean);
    check(doc.supplierDiversity.workerOwned, Boolean);
    check(doc.supplierDiversity.bCorp, Boolean);

    check(doc.moreDetailsTitle, String);
    check(doc.moreDetailsUrl, String);
    check(doc.proposalStart, String);
    check(doc.proposalDue, String);

    check(doc.orgId, String);
    check(doc.contactId, String);

    check(doc.cluster, Array);
    
    /*check(doc.proposalDueTime, String);*/

    


    

    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    ProcurementOpps.insert({
      title: doc.title,
      summary: doc.summary,
      identificationNumber: doc.identificationNumber,
      requirements: doc.requirements,
      proposalDetails: doc.proposalDetails,
      moreDetails: {
          title: doc.moreDetailsTitle,
          url: doc.moreDetailsUrl,
      },
      orgId: doc.orgId,
      clusters: doc.clusters,
      contactId: doc.contactId,
      proposalStart: doc.proposalStart,
      proposalDue: doc.proposalDue,
      supplierDiversity: {
              womenOwned: doc.supplierDiversity.womenOwned,
              economicallyWomenOwned: doc.supplierDiversity.economicallyWomenOwned,
              minorityOwned: doc.supplierDiversity.minorityOwned,
              veteranOwned: doc.supplierDiversity.veteranOwned,
              hubZone: doc.supplierDiversity.hubZone,
              lgbtOwned: doc.supplierDiversity.lgbtOwned,
              disabledVeteranOwned: doc.supplierDiversity.disabledVeteranOwned,
              underutilizedBusiness: doc.supplierDiversity.underutilizedBusiness,
              workerOwned: doc.supplierDiversity.workerOwned,
              bCorp: doc.supplierDiversity.bCorp, 
            },
    });
    console.log('it ran!');
  },

  //REMOVE PROCUREMNT
  //-------------------------------- 
  'procurementOpps.remove'(id) {
    console.log(id);
    check(id, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    ProcurementOpps.remove({
      _id: id
    });
    console.log('procurementOpps.remove it ran!');
  }
});


