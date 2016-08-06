import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const ProcurementContacts = new Mongo.Collection('ProcurementContacts');

ProcurementContacts.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});



ProcurementContacts.schema = new SimpleSchema({
    publicContactName: {
        type: String,
        optional: true,
        label: "Name of Person to Contact (this is public):",
        max: 200
    },
    publicContactPhone: {
        type: String,
        optional: true,
        label: "Phone Number to Call with Questions (this is public):",
        max: 200
    },
    publicContactEmail: {
        type: String,
        optional: true,
        label: "Email Contact (this is public):",
        max: 200
    },
    otherInfo: {
        type: String,
        optional: true,
        label: "Additional notes:",
        max: 200
    },
    orgId: {
        type:  String,
        label: "Which of your organizations is this connected to?",
        optional: false
    },
    orgName: {
        type:  String,
        label: "Which of your organizations is this connected to?",
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return new Date()
            }
        }
    },
    lastUpdated: {
        type: Date,
        autoValue: function() {
            return new Date()
        }
    },
    createdBy: {
        type: String,
        autoValue: function() {
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return Meteor.userId();
            }
        }
    }  
});

ProcurementContacts.attachSchema(ProcurementContacts.schema);


