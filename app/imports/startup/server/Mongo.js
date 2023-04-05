import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contacts.js';

/* eslint-disable no-console */
// Initialize the database with a default data document.
const addContactsData = (data) => {
  console.log(`  Adding: ${data.firstName} ${data.lastName} (${data.owner})`);
  Contacts.collection.insert(data);
};

// Initialize the ContactsCollection if empty.
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating contact data.');
    Meteor.settings.defaultContacts.forEach(data => addContactsData(data));
  }
}
