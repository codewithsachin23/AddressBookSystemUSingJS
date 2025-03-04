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

    editDetails(firstName,lastname,newFirstName,newLastName){
      let findContact=this.contacts.filter(Contact => Contact.firstName===firstName &&Contact.lastname===lastname)
      if(findContact.length>0){
       findContact.forEach(Contact=>{
        Contact.firstName=newFirstName
        Contact.lastname=newLastName
      })
      }else{
        console.log("contact is not found")
      }
      console.log(findContact);


    }

    deleteContact(firstName,lastname){
        this.contacts=this.contacts.filter(Contact=>!(Contact.firstName===firstName&&Contact.lastname===lastname));
    }

}
module.exports =AddNewContact;
