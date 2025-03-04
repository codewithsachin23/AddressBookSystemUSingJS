const Contact = require('./contactApp'); 
const AddNewContact = require('./addNewContact'); 

let addNewContact = new AddNewContact(); 

try {
    let contact1 = new Contact("Sachin", "Shukla", "Anand Nagar Bhopal", "Bhopal", "Madhya Pradesh", "462022", "7879268756", "sachinshukla@gmail.com");
    addNewContact.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "456 Avenue", "Los Angeles", "California", "789012", "8765432109", "jane.smith@example.com");
    addNewContact.addContact(contact2);
} catch (error) {
    console.error(error.message);
}

addNewContact.displayContacts();

addNewContact.editDetails("Sachin","Shukla","Ramm","Shukla");

console.log("before delation")
addNewContact.displayContacts();
addNewContact.deleteContact("Sachin","Shukla");
console.log("After Deletion")

addNewContact.countContact();
