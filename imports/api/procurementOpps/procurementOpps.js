import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const ProcurementOpps = new Mongo.Collection('ProcurementOpps');

ProcurementOpps.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const Schemas = {};


Schemas.MoreDetails = new SimpleSchema({
    title: {
        type: String,
        optional: true,
        label: 'title:'
    },
    url: {
        type: String,
        optional: true,
        label: 'URL/link:'
    }
});




Schemas.SupplierDiversity = new SimpleSchema({
    womenOwned: { 
        type: Boolean,
        optional: true,
    },
    economicallyWomenOwned: {
        type: Boolean,
        optional: true,
    },
    minorityOwned: {
        type: Boolean,
        optional: true,
    },
    veteranOwned: {
        label: "Certified Veteran-Owned Businesses",
        type: Boolean,
        optional: true,
    },
    hubZone: {
        label: "Certified HUBZone Businesses",
        type: Boolean,
        optional: true,
    },
    lgbtOwned: {
        label: "Certified LGBT-owned Businesses",
        type: Boolean,
        optional: true,
    },
    disabledVeteranOwned: {
        label: "Certified Service Disabled Veteran-owned Businesses (SDVOB)",
        type: Boolean,
        optional: true,
    },
    underutilizedBusiness: {
        label: "Certified Historically Underutilized Businesses",
        type: Boolean,
        optional: true,
    },
    workerOwned: {
        label: "Certified Worked-owned Cooperatives",
        type: Boolean,
        optional: true,
    },
    bCorp: {
        label: "Certified B-corps",
        type: Boolean,
        optional: true,
    }
});


ProcurementOpps.schema = new SimpleSchema({
  title: {
    type: String
  },
   identificationNumber: {
        type: String,
        optional: true,
        label: "Identification Number (Bid/Solicitation Number, etc.)",
        max: 200
    },
    orgId: {
        type: String,
        optional: true,
    },
    contactId: {
        type: String,
        optional: true,
    }, 
    summary: {
        type: String,
        label: "Brief Summary of Procurement Opportunity:",
        optional: true,
        max: 2000,
    },
    requirements: {
        type: String,
        label: "Requirements/Other Info",
        max: 3000,
        optional: true,
    },
    proposalDetails: {
        type: String,
        label: 'How would you like to see the proposal structured?',
        optional: true,
        max: 2000,
    },
    supplierDiversity: {
        type: Schemas.SupplierDiversity,
        optional: true,
    },
    moreDetails: {
        type: Schemas.MoreDetails,
        optional: true,
    },
    proposalStart: {
        type: Date,
        optional: false,
    },
    proposalDue: {
        type: Date,
        optional: false,
    },
    clusers: {
        type: [String],
        optional: true,
    },
/*    proposalDueTime: {
        type: String,
        optional: true,
    }*/
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

ProcurementOpps.attachSchema(ProcurementOpps.schema);


