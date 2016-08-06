import React from 'react';
import AddContactModal from '../containers/add-contact-modal.js';
import ContactList from '../containers/contact-list.js';

export class AdminContacts extends React.Component {

  constructor(props) {
    super(props);
  }


  render(){
    return (
        <div>
          <AddContactModal />
          <ContactList />
        </div>
      );
  }

}