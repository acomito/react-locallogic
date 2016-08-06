//NOTES
// http://stackoverflow.com/questions/36512686/react-dynamically-add-input-fields-to-form
// http://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle

import React from 'react';
import Paper from 'material-ui/Paper';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Menu from 'material-ui/Menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
/*import { clusters } from './cluster-constants.js'; */
/*import { clusters_AerospaceDefense, clusters_Agriculture, clusters_Apparel clusters_Education } from './cluster-constants.js';*/


const styles = {
    procurementFormField: {
      width: "80%",
    },
    chipStyles: {
      display: "inline-block",
      margin: "3px",
    },
    chipContainer: {
      marginTop: "10px",
      marginBottom: "10px"
    },
    paperStyles: {
      padding: "30px",
    },
    subHeader: {
      color: "#BDBDBD",
      fontSize: "12px"
    },
    menuItem: {
      minHeight: "60px"
    }
}

const clusters = [
                    { value: 'Aerospace & Defense',
                      subclusters: [
                          {value: 'Aircraft'},
                          {value: 'Search and Navigation Equipment'},
                          {value: 'Missiles and Space Vehicles'},
                        ]
                    },
                    { value: 'Agriculture',
                      subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]
                    },
                { value: 'Apparel',
                    subclusters: [
                          {label: 'Accessories and Specialty Apparel', value: 'Accessories and Specialty Apparel'},
                          {label: 'Apparel Contractors', value: 'Apparel Contractors'},
                          {label: "Women's Clothing", value: "Women's Clothing"},
                          {label: "Men's Clothing", value: "Men's Clothing"},
                      ]

                    },
                    { value: 'Automotive',
                    subclusters: [
                          {label: 'Automotive Parts', value: 'Automotive Parts'},
                          {label: 'Motor Vehicles', value: 'Motor Vehicles'},
                          {label: 'Metal Mills and Foundries', value: 'Metal Mills and Foundries'},
                          {label: 'Gasoline Engines and Engine Parts', value: 'Gasoline Engines and Engine Parts'},
                          {label: 'Small Vehicles', value: 'Small Vehicles'},
                          {label: 'Military Vehicles and Tanks', value: 'Military Vehicles and Tanks'},
                      ]


                    },
                    { value: 'Biopharma',
                    subclusters: [
                          {label: 'Biopharmaceutical Products', value: 'Biopharmaceutical Products'},
                          {label: 'Biological Products', value: 'Biological Products'},
                          {label: 'Diagnostic Substances', value: 'Diagnostic Substances'},
                      ]

                    },
                    { value: 'Business Services',
                    subclusters: [
                          {label: 'Business Support Services', value: 'Business Support Services'},
                          {label: 'Corporate Headquarters', value: 'Corporate Headquarters'},
                          {label: 'Computer Services', value: 'Computer Services'},
                          {label: 'Engineering Services', value: 'Engineering Services'},
                          {label: 'Consulting Services', value: 'Consulting Services'},
                          {label: 'Employment Placement Services', value: 'Employment Placement Services'},
                          {label: 'Architectural and Drafting Services', value: 'Architectural and Drafting Services'},
                          {label: 'Ground Passenger Transportation', value: 'Ground Passenger Transportation'},
                      ]

                    },
                    { value: 'Coal Mining',
                      subclusters: [
                            {value: 'Coal Mining'},
                      ]

                  },
                    { value: 'Commercial Services',
                    subclusters: [
                          {value: 'Local Professional Services'},
                          {value: 'Building Support Services'},
                          {value: 'Security Services'},
                          {value: 'Miscellaneous Repair Services'},
                          {value: 'Laundry and Linen Services'},
                          {value: 'Testing Laboratories'},
                          {value: 'Stationery and Office Supply Retailing'},
                          {value: 'Commercial Photography, Printing and Signmaking'},
                      ]

                  },
                  { value: 'Community Organizations',
                    subclusters: [
                              {value: 'Social Service Organizations'},
                              {value: 'Religious Organizations'},
                              {value: 'Labor Organizations'},
                              {value: 'Business Associations'},
                              {value: 'Political Organizations'},
                          ]
                  },
                  { 
                    value: 'Communications',
                    subclusters: [
                          {value: 'Communications Services'},
                          {value: 'Communications Equipment'},
                          {value: 'Communications Equipment Components'},
                      ]
                    },
                    {
                      value: 'Construction',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    // ---------- START HERE
                    {
                      value: 'Distribution & eCommerce',
                      subclusters: [
                          {label: 'Warehousing and Storage', value: 'Warehousing and Storage'},
                          {label: 'Professional and Commercial Equipment and Supplies', value: ' Professional and Commercial Equipment and Supplies'},
                          {label: 'Wholesale of Electrical and Electronic Goods', value: 'Wholesale of Electrical and Electronic Goods'},
                          {label: 'Wholesale of Industrial Machinery, Equipment, and Supplies', value: 'Wholesale of Industrial Machinery, Equipment, and Supplies'},
                          {label: 'Electronic and Catalog Shopping', value: 'Electronic and Catalog Shopping'},
                          {label: 'Wholesale Trade Agents and Brokers', value: 'Wholesale Trade Agents and Brokers'},
                          {label: 'Wholesale of Drugs and Druggists Sundries', value: 'Wholesale of Drugs and Druggists Sundries'},
                          {label: 'Wholesale of Food Products', value: 'Wholesale of Food Products'},
                          {label: 'Wholesale of Apparel and Accessories', value: 'Wholesale of Apparel and Accessories'},
                          {label: 'Wholesale of Farm Products and Supplies', value: 'Wholesale of Farm Products and Supplies'},
                          {label: 'Rental and Leasing', value: 'Rental and Leasing'},
                          {label: 'Wholesale of Metals and Minerals (except Petroleum)', value: 'Wholesale of Metals and Minerals (except Petroleum)'},
                          {label: 'Wholesale of Chemical and Allied Products', value: 'Wholesale of Chemical and Allied Products'},
                          {label: 'Wholesale of Paper and Paper Products', value: 'Wholesale of Paper and Paper Products'},
                          {label: 'Wholesale of Furniture and Home Furnishing', value: 'Wholesale of Furniture and Home Furnishing'},
                          {label: 'Wholesale of Farm and Garden Machinery and Equipment', value: 'Wholesale of Farm and Garden Machinery and Equipment'},
                          {label: 'Wholesale of Petroleum and Petroleum Products', value: 'Wholesale of Petroleum and Petroleum Products'},
                          {label: 'Support Services', value: 'Support Services'},
                          {label: 'Wholesale of Other Merchandise', value: 'Wholesale of Other Merchandise'},
                          {label: 'Wholesale of Construction and Mining Machinery and Equipment', value: 'Wholesale of Construction and Mining Machinery and Equipment'},
                          {label: 'Wholesale of Sporting and Recreational Goods and Supplies', value: 'Wholesale of Sporting and Recreational Goods and Supplies'},
                          {label: 'Jewelry, Watches, Precious Stones, and Precious Metals', value: 'Jewelry, Watches, Precious Stones, and Precious Metals'},
                          {label: 'Wholesale of Books, Periodicals, and Newspapers', value: 'Wholesale of Books, Periodicals, and Newspapers'},
                          {label: 'Wholesale of Service Establishment Equipment, and Supplies', value: 'Wholesale of Service Establishment Equipment, and Supplies'},
                          {label: 'Transportation Equipment and Supplies (except Motor Vehicles)', value: 'Transportation Equipment and Supplies (except Motor Vehicles)'},
                          {label: 'Wholesale of Toy and Hobby Goods and Supplies', value: 'Wholesale of Toy and Hobby Goods and Supplies'},
                      ]

                    },
                    {
                      value: 'Downstream Chemicals',
                      subclusters: [
                          {label: 'Personal Care and Cleaning Products', value: 'Personal Care and Cleaning Products'},
                          {label: 'Processed Chemical Products', value: 'Processed Chemical Products'},
                          {label: 'Dyes, Pigments and Coating', value: 'Dyes, Pigments and Coating'},
                          {label: 'Lubricating Oils and Greases', value: 'Lubricating Oils and Greases'},
                          {label: 'Explosives', value: 'Explosives'},
                      ]
                    },
                    {
                      value: 'Downstream Metals',
                      subclusters: [
                          {label: 'Metal Products', value: 'Metal Products'},
                          {label: 'Fabricated Metal Structures', value: 'Fabricated Metal Structures'},
                          {label: 'Ammunition', value: 'Ammunition'},
                          {label: 'Metal Containers', value: 'Metal Containers'},
                      ]
                    },
                    {
                      value: 'Education',
                      subclusters: [
                          {label: 'Colleges, Universities, and Professional Schools', value: 'Colleges, Universities, and Professional Schools'},
                          {label: 'Research Organizations', value: 'Research Organizations'},
                          {label: 'Training Programs', value: 'Training Programs'},
                          {label: 'Educational Support Services', value: 'Educational Support Services'},
                          {label: 'Professional Organizations', value: 'Professional Organizations'},
                          {label: 'Elementary and Secondary Schools', value: 'Elementary and Secondary Schools'},
                          {label: 'Job Training Services', value: 'Job Training Services'},
                          {label: 'Recreational and Other Services', value: 'Recreational and Other Services'},
                      ]
                    },
                    {
                      value: 'Electric Power Generation and Transmission',
                      subclusters: [
                          {label: 'Fossil Fuel Electric Power', value: 'Fossil Fuel Electric Power'},
                          {label: 'Alternative Electric Power', value: 'Alternative Electric Power'},
                          {label: 'Electric Power Transmission', value: 'Electric Power Transmission'},
                      ]
                    },
                    {
                      value: 'Environmental Services',
                      subclusters: [
                          {label: 'Waste Processing', value: 'Waste Processing'},
                          {label: 'Waste Collection', value: 'Waste Collection'},
                          {label: 'Other Waste Management Services', value: 'Other Waste Management Services'},
                      ]
                    },
                    {
                      value: 'Entertainment & Media',
                      subclusters: [
                          {value: 'Sporting and Hobby Retailing'},
                          {value: 'Electronic and Photographic Retailing'},
                          {value: 'Newspapers'},
                          {value: 'Electronic Media'},
                          {value: 'Movie Theatres'},
                          {value: 'Book and Periodical Retailing'},
                          {value: 'Musical Instruments Retailing'},
                          {value: 'Video Rental'},
                      ]
                    },
                    {
                      value: 'Fishing and Fishing Products',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Financial Services',
                      subclusters: [
                          {label: 'Credit Intermediation', value: 'Credit Intermediation'},
                          {label: 'Financial Investment Activities', value: 'Financial Investment Activities'},
                          {label: 'Securities Brokers, Dealers, and Exchanges', value: 'Securities Brokers, Dealers, and Exchanges'},
                          {label: 'Credit Bureaus', value: 'Credit Bureaus'},
                          {label: 'Monetary Authorities - Central Bank', value: 'Monetary Authorities - Central Bank'},
                          {label: 'Deposit-taking Institutions', value: 'Deposit-taking Institutions'},
                          {label: 'Insurance Agents and Brokers', value: 'Insurance Agents and Brokers'},
                          {label: 'Tax Return Preparation Services', value: 'Tax Return Preparation Services'},
                          {label: 'Pension, Health, and Welfare Funds', value: 'Pension, Health, and Welfare Funds'},
                          {label: 'Collection Agencies', value: 'Collection Agencies'},
                      ]
                    },
                    {
                      value: 'Food & Beverage',
                      subclusters: [
                          {label: 'Retail Food Stores', value: 'Retail Food Stores'},
                          {label: 'Food Wholesaling', value: 'Food Wholesaling'},
                          {label: 'Commerical and Retail Bakeries', value: 'Commerical and Retail Bakeries'},
                          {label: 'Beer, Wine, and Liquor Retailing', value: 'Beer, Wine, and Liquor Retailing'},
                          {label: 'Vending and Direct Selling', value: 'Vending and Direct Selling'},
                          {label: 'Beer and Liquor Wholesaling', value: 'Beer and Liquor Wholesaling'},
                          {label: 'Tobacco Retailing', value: 'Tobacco Retailing'},
                          {label: 'Restaurants & Cafes', value: 'Restaurants & Cafes'},
                      ]
                    },
                    {
                      value: 'Food Processing',
                      subclusters: [
                          {label: 'Specialty Foods and Ingredients', value: 'Specialty Foods and Ingredients'},
                          {label: 'Baked Goods', value: 'Baked Goods'},
                          {label: 'Dairy Products', value: 'Dairy Products'},
                          {label: 'Packaged Fruit and Vegetables', value: 'Packaged Fruit and Vegetables'},
                          {label: 'Soft Drinks and Ice', value: 'Soft Drinks and Ice'},
                          {label: 'Candy and Chocolate', value: 'Candy and Chocolate'},
                          {label: 'Farm Wholesalers', value: 'Farm Wholesalers'},
                          {label: 'Animal Foods', value: 'Animal Foods'},
                          {label: 'Wineries', value: 'Wineries'},
                          {label: 'Malt Beverages', value: 'Malt Beverages'},
                          {label: 'Milling and Refining of Cereals and Oilseeds', value: 'Milling and Refining of Cereals and Oilseeds'},
                          {label: 'Coffee and Tea', value: 'Coffee and Tea'},
                          {label: 'Glass Containers', value: 'Glass Containers'},
                          {label: 'Milling and Refining of Sugar', value: 'Milling and Refining of Sugar'},
                          {label: 'Distilleries', value: 'Distilleries'},
                      ]
                    },
                    {
                      value: 'Footwear',
                      subclusters: [
                          {label: 'Footwear', value: 'Footwear'},
                          {label: 'Footwear Components', value: 'Footwear Components'},
                      ]
                    },
                    {
                      value: 'Forestry',
                      subclusters: [
                          {label: 'Household Furniture', value: 'Household Furniture'},
                          {label: 'Wood Cabinets and Woodwork', value: 'Wood Cabinets and Woodwork'},
                          {label: 'Office Furniture', value: 'Office Furniture'},
                          {label: 'Institutional Furniture', value: 'Institutional Furniture'},
                          {label: 'Mobile Homes', value: 'Mobile Homes'},
                      ]
                    },
                    {
                      value: 'Furniture',
                      subclusters: [
                          {label: 'Household Furniture', value: 'Household Furniture'},
                          {label: 'Wood Cabinets and Woodwork', value: 'Wood Cabinets and Woodwork'},
                          {label: 'Office Furniture', value: 'Office Furniture'},
                          {label: 'Institutional Furniture', value: 'Institutional Furniture'},
                          {label: 'Mobile Homes', value: 'Mobile Homes'},
                      ]
                    },
                    {
                      value: 'Health Services',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Local Household Goods and Services',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Hospitality',
                      subclusters: [
                          {label: 'Accommodations and Related Services', value: 'Accommodations and Related Services'},
                          {label: 'Tourism Related Services', value: 'Tourism Related Services'},
                          {label: 'Other Tourism Attractions', value: 'Other Tourism Attractions'},
                          {label: 'Amusement Parks and Arcades', value: 'Amusement Parks and Arcades'},
                          {label: 'Gambling Facilities', value: 'Gambling Facilities'},
                          {label: 'Cultural and Educational Entertainment', value: 'Cultural and Educational Entertainment'},
                          {label: 'Spectator Sports', value: 'Spectator Sports'},
                          {label: 'Hospitality Establishments', value: 'Hospitality Establishments'},
                          {label: 'Recreational Facilities and Instruction', value: 'Recreational Facilities and Instruction'},
                          {label: 'Gifts and Souvenirs Retailing', value: 'Gifts and Souvenirs Retailing'},
                      ]
                    },
                    {
                      value: 'Information Technology',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Insurance',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Jewelry and Precious Metals Products',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Leather Products',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Lighting',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Livestock',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Local Logistics',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Marketing, Design, and Publishing ',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Medical Devices',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Metal Mining',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Metalworking',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Local Motor Vehicle Products and Services',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Music and Sound Recording',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Nonmetal Mining',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Oil & Gas',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Paper & Packaging',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Local Personal Services (Non-Medical)',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Performing Arts',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Plastics',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Printing',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Industrial Products',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Production Technology',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Recreational and Small Electric Goods',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      label: 'Real Estate', value: 'Real Estate',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Local Retailing of Clothing and General Merchandise',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Technology Startups',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      label: 'Textiles', value: 'Textiles',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      label: 'Tobacco', value: 'Tobacco',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Trailers & Appliances',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Transportation and Logistics',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Upstream Chemicals',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Upstream Metals',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Video Production and Distribution',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Vulcanized Materials',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Water Transport',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Wood Products',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                    {
                      value: 'Local Utilities',
                      subclusters: [
                          {label: 'Construction', value: 'Biopharma'},
                          {label: 'Construction Components', value: 'Construction Components'},
                          {label: 'Construction Products', value: 'Construction Products'},
                          {label: 'Water, Sewage, and Other Systems', value: 'Water, Sewage, and Other Systems'},
                          {label: 'Construction Materials', value: 'Construction Materials'},
                      ]
                    },
                ];

const originalState = {
          finished: false,
          stepIndex: 0,
          title: '',
          clusters: [],
          summary: '',
          orgId: '',
          contactId: '',
          identificationNumber: '',
          requirements: '',
          proposalDetails: '',
          moreDetailsTitle: '',
          moreDetailsUrl: '',
          proposalStart: new Date() ,
          proposalDue: new Date() ,
          popOverOpen: false,
/*          //sub-clusters
          AerospaceDefense: '',
          Agriculture: '',
          Apparel: '',
          Automotive: '',
          Biopharma: '',
          BusinessServices: '',
          CoalMining: '',
          CommercialServices: '',
          Communications: '',
          Construction: '',
          DistributioneCommerce: '',
          DownstreamChemicals: '',
          DownstreamMetals: '',
          Education: '',
          ElectricPowerGenerationTransmission: '',
          EnvironmentalServices: '',
          EntertainmentMedia: '',
          FishingFishingFishing: '',
          FinancialServices: '',
          Construction: '',

                    {label: 'Education', value: 'Education'},
                    {label: 'Electric Power Generation and Transmission', value: 'Electric Power Generation and Transmission'},
                    {label: 'Environmental Services', value: 'Environmental Services'},
                    {label: 'Entertainment & Media', value: 'Entertainment & Media'},
                    {label: 'Fishing and Fishing Products', value: 'Fishing and Fishing Products'},
                    {label: 'Financial Services', value: 'Financial Services'},
                    {label: 'Food & Beverage', value: 'Food & Beverage'},
                    {label: 'Food Processing', value: 'Food Processing'},
                    {label: 'Footwear', value: 'Footwear'},
                    {label: 'Forestry', value: 'Forestry'},
                    {label: 'Furniture', value: 'Furniture'},
                    {label: 'Health Services', value: 'Health Services'},
                    {label: 'Local Household Goods and Services', value: 'Local Household Goods and Services'},
                    {label: 'Hospitality', value: 'Hospitality'},
                    {label: 'Information Technology', value: 'Information Technology'},
                    {label: 'Insurance', value: 'Insurance'},
                    {label: 'Jewelry and Precious Metals Products', value: 'Jewelry and Precious Metals Products'},
                    {label: 'Leather Products', value: 'Leather Products'},
                    {label: 'Lighting', value: 'Lighting'},
                    {label: 'Livestock', value: 'Livestock'},
                    {label: 'Local Logistics', value: 'Local Logistics'},
                    {label: 'Marketing, Design, and Publishing ', value: 'Marketing, Design, and Publishing '},
                    {label: 'Medical Devices', value: 'Medical Devices'},
                    {label: 'Metal Mining', value: 'Metal Mining'},
                    {label: 'Metalworking', value: 'Metalworking'},
                    {label: 'Local Motor Vehicle Products and Services', value: 'Local Motor Vehicle Products and Services'},
                    {label: 'Music and Sound Recording', value: 'Music and Sound Recording'},
                    {label: 'Nonmetal Mining', value: 'Nonmetal Mining'},
                    {label: 'Oil & Gas', value: 'Oil & Gas'},
                    {label: 'Paper & Packaging', value: 'Paper & Packaging'},
                    {label: 'Local Personal Services (Non-Medical)', value: 'Local Personal Services (Non-Medical)'},
                    {label: 'Performing Arts', value: 'Performing Arts'},
                    {label: 'Plastics', value: 'Plastics'},
                    {label: 'Printing', value: 'Printing'},
                    {label: 'Industrial Products', value: 'Industrial Products'},
                    {label: 'Production Technology', value: 'Production Technology'},
                    {label: 'Recreational and Small Electric Goods', value: 'Recreational and Small Electric Goods'},
                    {label: 'Real Estate', value: 'Real Estate'},
                    {label: 'Local Retailing of Clothing and General Merchandise', value: 'Local Retailing of Clothing and General Merchandise'},
                    {label: 'Technology Startups', value: 'Technology Startups'},
                    {label: 'Textiles', value: 'Textiles'},
                    {label: 'Tobacco', value: 'Tobacco'},
                    {label: 'Trailers & Appliances', value: 'Trailers & Appliances'},
                    {label: 'Transportation and Logistics', value: 'Transportation and Logistics'},
                    {label: 'Upstream Chemicals', value: 'Upstream Chemicals'},
                    {label: 'Upstream Metals', value: 'Upstream Metals'},
                    {label: 'Video Production and Distribution', value: 'Video Production and Distribution'},
                    {label: 'Vulcanized Materials', value: 'Vulcanized Materials'},
                    {label: 'Water Transport', value: 'Water Transport'},
                    {label: 'Wood Products', value: 'Wood Products'},
                    {label: 'Local Utilities', value: 'Local Utilities'},*/
          supplierDiversity_womenOwned: false,
          supplierDiversity_economicallyWomenOwned: false,
          supplierDiversity_minorityOwned: false,
          supplierDiversity_veteranOwned: false,
          supplierDiversity_hubZone: false,
          supplierDiversity_lgbtOwned: false,
          supplierDiversity_disabledVeteranOwned: false,
          supplierDiversity_underutilizedBusiness: false,
          supplierDiversity_workerOwned: false,
          supplierDiversity_bCorp: false,
        };

export class ProcurementInsertForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = originalState;
    this.getSubClusterSelectField = this.getSubClusterSelectField.bind(this);
    this.addClusterChange = this.addClusterChange.bind(this);
  }



    _submitNewProcurementOpp(){
      
        const successfulSubmit = () =>{
          // this is passed down from parent component through props. it just show/hides ths form
          this.props.onFormSubmit();  
        }
      //1. go through the component's state to compile the document to be inserted
      let documentToInsert = {
          title: this.state.title,
          summary: this.state.summary,
          identificationNumber: this.state.identificationNumber,
          requirements: this.state.requirements,
          proposalDetails: this.state.proposalDetails,
          moreDetailsTitle: this.state.moreDetailsTitle,
          moreDetailsUrl: this.state.moreDetailsUrl,
          proposalStart: this.state.proposalStart.toString(),
          proposalDue: this.state.proposalDue.toString(),
          orgId: this.state.orgId,
          contactId: this.state.contactId,
          clusters: this.state.clusters,
          supplierDiversity: {
                womenOwned: this.state.supplierDiversity_womenOwned,
                economicallyWomenOwned: this.state.supplierDiversity_economicallyWomenOwned,
                minorityOwned: this.state.supplierDiversity_minorityOwned,
                veteranOwned: this.state.supplierDiversity_veteranOwned,
                hubZone: this.state.supplierDiversity_hubZone,
                lgbtOwned: this.state.supplierDiversity_lgbtOwned,
                disabledVeteranOwned: this.state.supplierDiversity_disabledVeteranOwned,
                underutilizedBusiness: this.state.supplierDiversity_underutilizedBusiness,
                workerOwned: this.state.supplierDiversity_workerOwned,
                bCorp: this.state.supplierDiversity_bCorp,
              },
      };
      //2. call Meteor method and pass in the document
      Meteor.call('procurementOpps.insert', documentToInsert, function(error, result){
            
            // if error....
            if (error) { Bert.alert('Oops! ' + error.reason, 'error'); return; }

            Bert.alert('procurement opportunity added!', 'success');
            successfulSubmit();           
      });

      

    }

  handleNext() {
    var stepIndex = this.state.stepIndex;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev(){
    var stepIndex = this.state.stepIndex;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

 handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      popOverOpen: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose () {
    this.setState({
      popOverOpen: false,
    });
  }


  _handleSelectChange(fieldName, event, key, payload) {
    let newState = {};
    newState[fieldName] = payload;
    this.setState(newState);
    // see docs for more info about SelectField onChange: http://www.material-ui.com/#/components/select-field
  }

  _handleFieldChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  _handleCheckboxChange(e, isInputChecked) {
    let newState = {};
    newState[e.target.name] = isInputChecked;
    this.setState(newState);
  };

  addClusterChange(event, isInputChecked){
    console.log(event.target.value, isInputChecked);

  };

  _handleproposalStartChange(nully, date){
    this.setState({ proposalStart: date});
  };

  _handleproposalDueChange(nully, date){
    this.setState({ proposalDue: date});
  };


getSubClusterSelectField(inputName, inputLabel, clusterArray) {
  console.log(inputName);
  return <SelectField name={inputName} floatingLabelText={inputLabel} style={styles.procurementFormField}>
                {clusterArray.map(function(cluster){
                  return <MenuItem value={cluster.value} key={cluster.value} primaryText={cluster.value}  />
                })} 
              </SelectField> 
}


  renderStepActions(step) {
    const stepIndex = this.state.stepIndex;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={this.state.stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.state.stepIndex === 2 ? this._submitNewProcurementOpp.bind(this) : this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev.bind(this)}
          />
        )}
      </div>
    );
  }

  render() {
    const stepIndex = this.state.stepIndex;
    const finished = this.state.finished;

    return <div style={{maxWidth: 680, maxHeight: 600, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical" linear={false}>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
              Basic Information
            </StepButton>
            <StepContent>
            <Paper zDepth={2} style={styles.paperStyles}>
              <TextField
                name="title"
                style={styles.procurementFormField}
                hintText="e.g. title of this opportunity"
                floatingLabelText="Title"
                value={this.state.title} 
                onChange={this._handleFieldChange.bind(this)}
              />
              <TextField
              name="identificationNumber"
              style={styles.procurementFormField}
              hintText="e.g. identification Number of this opportunity"
              floatingLabelText="identification Number"
              value={this.state.identificationNumber} 
              onChange={this._handleFieldChange.bind(this)}
             />
            <TextField
              name="summary"
              style={styles.procurementFormField}
              hintText="e.g. summary of this opportunity"
              floatingLabelText="Summary"
              value={this.state.summary} 
              onChange={this._handleFieldChange.bind(this)}
             />

           <SelectField  
                name="orgId"
                floatingLabelText="Organization"
                value={this.state.orgId} 
                onChange={this._handleSelectChange.bind(this, 'orgId')}
                style={styles.procurementFormField}
            >
            {this.props.procurementOrgs.map(function(org){
              return <MenuItem value={org._id} key={org._id} primaryText={org.title}  />
              {/*return <MenuItem value={{id: org._id, name: org.title}} key={org._id} primaryText={org.title}  />*/}
            })} 
          </SelectField>

            {/*{(() => {
                                  switch (this.state.cluster) {
                                    case "Aerospace & Defense":  return this.getSubClusterSelectField('AerospaceDefense', 'Aerospace & Defense Sub-cluster', clusters_AerospaceDefense);
                                    case "Agriculture":  return this.getSubClusterSelectField('Agriculture', 'Agriculture Sub-cluster', clusters_Agriculture);
                                    default:      return;
                                  }
                                })()}*/}

          <div style={styles.chipContainer}>
          { this.state.clusters.length > 0
            ? this.state.clusters.map(function(cluster){return <Chip style={styles.chipStyles} key={cluster}>{cluster}</Chip>})
            : console.log(this.state.clusters.length)
          }
          </div>

                    {this.state.clusters.length > 0
                    ?  <RaisedButton label="Edit Industry Information" onTouchTap={this.handleTouchTap.bind(this)} />
                    : <RaisedButton label="Add Industry Information" onTouchTap={this.handleTouchTap.bind(this)} />
                    }

         
           <Popover
          open={this.state.popOverOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          onRequestClose={this.handleRequestClose.bind(this)}
          >
{/*          <Menu desktop={true} width={320} multiple={true} value={this.state.clusters} >
            {clusters.map(function(cluster){
              return <MenuItem 
                        value={cluster.value} 
                        key={cluster.value} 
                        primaryText={cluster.value}
                        rightIcon={<ArrowDropRight />}
                        menuItems={
                          cluster.subclusters.map(function(subcluster){
                            return <MenuItem 
                                      primaryText={subcluster.value}
                                      value={subcluster.value}
                                      key={subcluster.value}
                                      onTouchTap={this.addClusterChange} 
                                      onClick={this.addClusterChange}                                
                                  />;
                          })
                        }
                        />
            })} 
          </Menu>*/}
              <Menu multiple={true} value={this.state.clusters} onChange={(event, value) => {
                console.log(value);
                    let newState = {};
                    newState[clusters] = value;
                    this.setState(newState);
              }}>
                {clusters.map(function(cluster){
                  return cluster.subclusters.map(function(subcluster, index){
                    return <MenuItem
                              style={styles.menuItem}
                              key={subcluster.value + index} 
                              value={subcluster.value}
                              primaryText={<div>{subcluster.value} - <span style={styles.subHeader}>{cluster.value}</span></div>}
                            >
                            
                          </MenuItem>
                            
                  })
                })}
           
              </Menu>
          </Popover>

                {/*{(() => {
                                  switch (this.state.cluster) {
                                    case "Aerospace & Defense":  return this.getSubClusterSelectField('AerospaceDefense', 'Aerospace & Defense Sub-cluster', clusters_AerospaceDefense);
                                    case "Agriculture":  return this.getSubClusterSelectField('Agriculture', 'Agriculture Sub-cluster', clusters_Agriculture);
                                    default:      return;
                                  }
                                })()}*/}


          
          <SelectField
                name="contactId"
                floatingLabelText="Contact Template"
                value={this.state.contactId} 
                onChange={this._handleSelectChange.bind(this, 'contactId')}
                style={styles.procurementFormField}
            >
            {this.props.procurementContacts.map(function(contact){
              return <MenuItem value={contact._id} key={contact._id} primaryText={contact.publicContactName + ' - ' + contact.orgName}  />
              {/*return <MenuItem value={{id: org._id, name: org.title}} key={org._id} primaryText={org.title}  />*/}
            })} 
          </SelectField>          

            </Paper>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
              Additional Information
            </StepButton>
            <StepContent>
              <Paper zDepth={2} style={styles.paperStyles}>
                <TextField
                  name="requirements"
                  style={styles.procurementFormField}
                  hintText="e.g. Requirements of this opportunity"
                  floatingLabelText="Requirements"
                  value={this.state.requirements} 
                  onChange={this._handleFieldChange.bind(this)}
               />
               <TextField
                name="proposalDetails"
                style={styles.procurementFormField}
                hintText="e.g. proposalDetails of this opportunity"
                floatingLabelText="proposalDetails"
                value={this.state.proposalDetails} 
                onChange={this._handleFieldChange.bind(this)}
               />
               <TextField
                  name="moreDetailsTitle"
                  style={styles.procurementFormField}
                  hintText="e.g. title of link to more Details"
                  floatingLabelText="More Details Title"
                  value={this.state.moreDetailsTitle} 
                  onChange={this._handleFieldChange.bind(this)}
               />
               <TextField
                  name="moreDetailsUrl"
                  style={styles.procurementFormField}
                  hintText="e.g. url link to more details"
                  floatingLabelText="URL link to moreDetails"
                  value={this.state.moreDetailsUrl} 
                  onChange={this._handleFieldChange.bind(this)}
               />
               <DatePicker 
                  name="guidance.proposalStart" 
                  hintText="Proposal Start"
                  value={this.state.proposalStart}
                  onChange={this._handleproposalStartChange.bind(this)}
               />
               <DatePicker 
                  name="guidance.proposalDue" 
                  hintText="Proposal Due"
                  value={this.state.proposalDue}
                  onChange={this._handleproposalDueChange.bind(this)}
               />  
              </Paper>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
              Supplier Diversity
            </StepButton>
            <StepContent>
              <Paper zDepth={2} style={styles.paperStyles}>
                <Checkbox
                  label="Women-Owned"
                  name="supplierDiversity_womenOwned"
                  checked={this.state.supplierDiversity_womenOwned} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="Economically Women-Owned"
                  name="supplierDiversity_economicallyWomenOwned"
                  checked={this.state.supplierDiversity_economicallyWomenOwned} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="Minority-Owned"
                  name="supplierDiversity_minorityOwned"
                  checked={this.state.supplierDiversity_minorityOwned} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="veteranOwned"
                  name="supplierDiversity_veteranOwned"
                  checked={this.state.supplierDiversity_veteranOwned} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="hubZone"
                  name="supplierDiversity_hubZone"
                  checked={this.state.supplierDiversity_hubZone} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="lgbtOwned"
                  name="supplierDiversity_lgbtOwned"
                  checked={this.state.supplierDiversity_lgbtOwned} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="disabledVeteranOwned"
                  name="supplierDiversity_disabledVeteranOwned"
                  checked={this.state.supplierDiversity_disabledVeteranOwned} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="underutilizedBusiness"
                  name="supplierDiversity_underutilizedBusiness"
                  checked={this.state.supplierDiversity_underutilizedBusiness} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="workerOwned"
                  name="supplierDiversity_workerOwned"
                  checked={this.state.supplierDiversity_workerOwned} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
                <Checkbox
                  label="bCorp"
                  name="supplierDiversity_bCorp"
                  checked={this.state.supplierDiversity_bCorp} 
                  onCheck={this._handleCheckboxChange.bind(this)}
                />
              </Paper>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>;
  }
}




/*import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { ClusterMultiselect } from './cluster-multiselect.js';
import Checkbox from 'material-ui/Checkbox';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

const styles = {
    procurementFormCard: {
      width: "50%",
      padding: "30px"
    },
    procurementFormField: {
      width: "80%"
    }
}



export class ProcurementInsertForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          title: '',
          summary: '',
          identificationNumber: '',
          requirements: '',
          proposalDetails: '',
          supplierDiversity: {
            womenOwned: false,
            economicallyWomenOwned: false,
            minorityOwned: false,

          },
        }
  }

  _submitNewProcurementOpp(){
    //1. go through the component's state to compile the document to be inserted
    let documentToInsert = {
        title: this.state.title,
        summary: this.state.summary,
        identificationNumber: this.state.identificationNumber,
        requirements: this.state.requirements,
        proposalDetails: this.state.proposalDetails,
        supplierDiversity: {
              womenOwned: this.state.supplierDiversity.womenOwned,
              economicallyWomenOwned: this.state.supplierDiversity.economicallyWomenOwned,
              minorityOwned: this.state.supplierDiversity.minorityOwned,
            },
    };
    //2. call Meteor method and pass in the document
    Meteor.call('procurementOpps.insert', documentToInsert);
    // 3. set off a bert-alert to let user know the form submitted (todo: move into the callback so it only runs on successful insertion)
    Bert.alert('procurement opportunity added!', 'success');
    // 4. reset all of the state
    this.setState({ 
      title: '',
      summary: '',
      identificationNumber: '',
      requirements: '',
      proposalDetails: '',
      supplierDiversity: {
            womenOwned: false,
            economicallyWomenOwned: false,
            minorityOwned: false,
          },
    });
    // 5. call this function from the parent component. This hides the form and shows the user the current list of procurement
    this.props.onFormSubmit();

  }


  _handleFieldChange(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }


  render() {
    return <div>
            <Card style={styles.procurementFormCard}>
            <TextField
              name="title"
              style={styles.procurementFormField}
              hintText="e.g. title of this opportunity"
              floatingLabelText="Title"
              value={this.state.title} 
              onChange={this._handleFieldChange.bind(this)}
             />
             <TextField
              name="identificationNumber"
              style={styles.procurementFormField}
              hintText="e.g. identification Number of this opportunity"
              floatingLabelText="identification Number"
              value={this.state.identificationNumber} 
              onChange={this._handleFieldChange.bind(this)}
             />
            <TextField
              name="summary"
              style={styles.procurementFormField}
              hintText="e.g. summary of this opportunity"
              floatingLabelText="Summary"
              value={this.state.summary} 
              onChange={this._handleFieldChange.bind(this)}
             />
             <TextField
              name="requirements"
              style={styles.procurementFormField}
              hintText="e.g. Requirements of this opportunity"
              floatingLabelText="Requirements"
              value={this.state.requirements} 
              onChange={this._handleFieldChange.bind(this)}
             />
             <TextField
              name="proposalDetails"
              style={styles.procurementFormField}
              hintText="e.g. proposalDetails of this opportunity"
              floatingLabelText="proposalDetails"
              value={this.state.proposalDetails} 
              onChange={this._handleFieldChange.bind(this)}
             />
            <Checkbox
              label="Women-Owned"
              name="supplierDiversity.womenOwned"
              value={this.state.supplierDiversity.womenOwned} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="Economically Women-Owned"
              name="supplierDiversity.economicallyWomenOwned"
              value={this.state.supplierDiversity.economicallyWomenOwned} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="Minority-Owned"
              name="supplierDiversity.minorityOwned"
              value={this.state.supplierDiversity.minorityOwned} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="veteranOwned"
              name="supplierDiversity.veteranOwned"
              value={this.state.supplierDiversity.veteranOwned} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="hubZone"
              name="supplierDiversity.hubZone"
              value={this.state.supplierDiversity.hubZone} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="lgbtOwned"
              name="supplierDiversity.lgbtOwned"
              value={this.state.supplierDiversity.lgbtOwned} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="disabledVeteranOwned"
              name="supplierDiversity.disabledVeteranOwned"
              value={this.state.supplierDiversity.disabledVeteranOwned} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="underutilizedBusiness"
              name="supplierDiversity.underutilizedBusiness"
              value={this.state.supplierDiversity.underutilizedBusiness} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="workerOwned"
              name="supplierDiversity.workerOwned"
              value={this.state.supplierDiversity.workerOwned} 
              onChange={this._handleFieldChange.bind(this)}
            />
            <Checkbox
              label="bCorp"
              name="supplierDiversity.bCorp"
              value={this.state.supplierDiversity.bCorp} 
              onChange={this._handleFieldChange.bind(this)}
            />
              <CardActions>
                <RaisedButton primary={true} label="submit" type="submit" onClick={this._submitNewProcurementOpp.bind(this)} />
              </CardActions>
            </Card>       
          </div>;
  }

}*/


