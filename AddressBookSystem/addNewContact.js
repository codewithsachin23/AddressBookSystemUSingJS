const Contact=require('./contactApp');

class AddNewContact{
    constructor (){
        this.contacts=[];
    }
    addContact(newcantact){
        if(newcantact instanceof Contact){
        this.contacts.push(newcantact);
        console.log("Contact was added")
        }else{
            console("invalid object")
        }
    }

    displayContacts(){
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("Contacts in Address Book:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }

}
module.exports =AddNewContact;
