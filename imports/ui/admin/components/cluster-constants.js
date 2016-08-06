import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export const clusters_AerospaceDefense = [
	{label: 'Aircraft', value: 'Aircraft'},
	{label: 'Search and Navigation Equipmen', value: 'Search and Navigation Equipmen'},
	{label: 'Missiles and Space Vehicles', value: 'Missiles and Space Vehicles'},
];

export const clusters_Agriculture = [
	{label: 'Agricultural Services', value: 'Agricultural Services'},
    {label: 'Farm Management and Labor Services', value: 'Farm Management and Labor Services'},
    {label: 'Fertilizers', value: 'Fertilizers'},
];

export const clusters_Apparel = [
					{label: 'Accessories and Specialty Apparel', value: 'Accessories and Specialty Apparel'},
                    {label: 'Apparel Contractors', value: 'Apparel Contractors'},
                    {label: "Women's Clothing", value: "Women's Clothing"},
                    {label: "Men's Clothing", value: "Men's Clothing"},
];

export const clusters_Education = [
					{label: 'Colleges, Universities, and Professional Schools', value: 'Colleges, Universities, and Professional Schools'},
                    {label: 'Research Organizations', value: 'Research Organizations'},
                    {label: 'Training Programs', value: 'Training Programs'},
                    {label: 'Educational Support Services', value: 'Educational Support Services'},
                    {label: 'Professional Organizations', value: 'Professional Organizations'},
                    {label: 'Elementary and Secondary Schools', value: 'Elementary and Secondary Schools'},
                    {label: 'Job Training Services', value: 'Job Training Services'},
                    {label: 'Recreational and Other Services', value: 'Recreational and Other Services'},
];




export const clusters = [
                    { value: 'Aerospace & Defense',
                      subclusters: [
                          {value: 'Aircraft'},
                          {value: 'Search and Navigation Equipmen'},
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
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]

                    },
                    { value: 'Automotive',
                    subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]


                    },
                    { value: 'Biopharma',
                    subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]

                    },
                    { value: 'Business Services',
                    subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]

                    },
                    { value: 'Coal Mining',
                    subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]

                  },
                    { value: 'Commercial Services',
                    subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]

                  },
                    {label: 'Community Organizations', value: 'Community Organizations',
                  subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]},
                    {label: 'Communications', value: 'Communications',
                  subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]},
                    {label: 'Construction', value: 'Construction',
                  subclusters: [
                          {value: 'Agricultural Services'},
                          {value: 'Farm Management and Labor Services'},
                          {value: 'Fertilizers'},
                      ]},
/*                    {label: 'Distribution & eCommerce', value: 'Distribution & eCommerce'},
                    {label: 'Downstream Chemicals', value: 'Downstream Chemicals'},
                    {label: 'Downstream Metals', value: 'Downstream Metals'},
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
                ];




