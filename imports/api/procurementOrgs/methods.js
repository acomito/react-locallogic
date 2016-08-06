import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { ProcurementOrgs } from './procurementOrgs';

 
Meteor.methods({

  //INSERT PROCUREMNT
  //-------------------------------- 
  'procurementOrgs.insert'(doc) {
    console.log(doc);
    check(doc, Object);
    check(doc.title, String);
    check(doc.summary, String);
    check(doc.logo, String);
    check(doc.location, Object);

    
    
    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    ProcurementOrgs.insert({
      title: doc.title,
      summary: doc.summary,
      logo: doc.logo,
      location: {
        address: doc.location.label,
        lat: doc.location.location.lat,
        lng: doc.location.location.lng,
      geometry: {
          type: "Point",
          coordinates: [doc.location.location.lng, doc.location.location.lat]
        },
        gmaps: doc.location.gmaps,
        placeId: doc.location.placeId,
      }
    });
    console.log('it ran!');
  },
  //UPDATE PROCUREMNT
  //-------------------------------- 
  'procurementOrgs.update'(doc) {
    console.log(doc);
    check(doc, Object);
    check(doc._id, String);
    check(doc.title, String);
    check(doc.summary, String);
    check(doc.logo, String);
    check(doc.location, Object);

    
    
    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    ProcurementOrgs.update({_id: doc._id },{ $set: {
      title: doc.title,
      summary: doc.summary,
      logo: doc.logo,
      location: doc.location,
    }});
    console.log('update ran!');
  },
  //REMOVE PROCUREMNT
  //-------------------------------- 
  'procurementOrgs.remove'(id) {
    console.log(id);
    check(id, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) { throw new Meteor.Error('not-authorized');}
 
    ProcurementOrgs.remove({
      _id: id
    });
    console.log('ProcurementOrgs.remove it ran!');
  }
});