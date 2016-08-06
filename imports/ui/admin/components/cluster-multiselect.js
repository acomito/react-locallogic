import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

const clusters = [
                    {label: 'Aerospace & Defense', value: 'Aerospace & Defense'},
                    {label: 'Agriculture', value: 'Agriculture'},
                    {label: 'Apparel', value: 'Apparel'},
                    {label: 'Automotive', value: 'Automotive'},
                    {label: 'Biopharma', value: 'Biopharma'},
                    {label: 'Business Services', value: 'Business Services'},
                    {label: 'Coal Mining', value: 'Coal Mining'},
                    {label: 'Commercial Services', value: 'Commercial Services'},
                    {label: 'Community Organizations', value: 'Community Organizations'},
                    {label: 'Communications', value: 'Communications'},
                    {label: 'Construction', value: 'Construction'},
                    {label: 'Distribution & eCommerce', value: 'Distribution & eCommerce'},
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
                    {label: 'Local Utilities', value: 'Local Utilities'},
                ];


class ClusterMenuItems extends React.Component {
    render(){
      return <div>
              {clusters.map(function(cluster){
                return <MenuItem key={cluster.label} value={cluster.label} primaryText={cluster.label} />
              })}
              </div>
    }     
  }


export class ClusterMultiselect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event, index, value) {
    this.setState({value: value});
  }

  render() {
    return (
      <div>
        <SelectField hintText="Select One" value={this.state.value} onChange={this.handleChange.bind(this)} floatingLabelText="Industry" >
        {clusters.map(function(cluster){
                return <MenuItem key={cluster.label} value={cluster.label} primaryText={cluster.label} />
              })}
        </SelectField>
      </div>
    );
  }
}