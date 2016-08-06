import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const ProcurementOrgs = new Mongo.Collection('ProcurementOrgs');

ProcurementOrgs.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const Schemas = {};

Schemas.Address = new SimpleSchema({
    address: {
        type: String
    },
    lat: {
        type: Number,
        decimal: true
    },
    lng: {
        type: Number,
        decimal: true
    },
    geometry: {
        type: Object,
        blackbox: true
    },
    placeId: {
     type: String
    },
    gmaps: {
        type: Object,
        blackbox: true
     }
});



ProcurementOrgs.schema = new SimpleSchema({
  title: {
    type: String
  },
    summary: {
        type: String,
        label: "Brief Summary of Procurement Opportunity:",
        optional: true,
        max: 2000,
    },
    logo: {
        type: String,
        optional: true,
    },
    location: {
        type: Schemas.Address,
        optional: true,
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

ProcurementOrgs.attachSchema(ProcurementOrgs.schema);


