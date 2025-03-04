const Contact = require('./contactApp'); 
const AddNewContact = require('./addNewContact'); 

let addNewContact = new AddNewContact(); 

try {
    let contact1 = new Contact("Sachin", "Shukla", "Anand Nagar Bhopal", "Bhopal", "Madhya Pradesh", "462022", "7879268756", "sachinshukla@gmail.com");
    addNewContact.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "456 Avenue", "Los Angeles", "California", "789012", "8765432109", "jane.smith@example.com");
    addNewContact.addContact(contact2);

    let contact3 = new Contact("Vivek", "Sahu", "Anand Nagar Bhopal", "Bhopal", "Madhya Pradesh", "462022", "7879268756", "sachinshukla@gmail.com");
    addNewContact.addContact(contact3);
} catch (error) {
    console.error(error.message);
}

addNewContact.displayContacts();

addNewContact.viewByCity("Bhopal");
addNewContact.viewBySatate("Madhya Pradesh")
