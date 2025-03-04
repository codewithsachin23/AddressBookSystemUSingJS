class Contact{
    constructor(firstname,lastname,address, city, state, zip, phonenumber,email){
       if(!this.isValidName(firstname)) throw new Error("First character must be Capital and minimum 3 character");
       if(!this.isValidName(lastname))throw new Error("First character must be Capital and minimum 3 character");
       if(!this.isValidAddress(address))throw new Error("must be minimum 4 character");
       if(!this.isValidAddress(city))throw new Error("must be minimum 4 character");
       if(!this.isValidAddress(state))throw new Error("must be minimum 4 character");
       if(!this.isValidpin(zip))throw new Error("must be 6 digit");
       if(!this.isValidNumber(phonenumber))throw new Error("phone number must be 10 digit And Start from 6 to 9");
       if(!this.isValidGmail(email))throw new Error("writen valid email");

     
        this.firstName=firstname;
        this.lastname=lastname;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phonenumber=phonenumber;
        this.email=email;
    }

    toString(){
        return `${this.firstName},${this.lastname},${this.address},${this.city},${this.state},${this.zip},${this.phonenumber},${this.email},`;
    }

   isValidName(name) {
    let nameRegex=/^[A-Z][a-zA-Z]{2,}$/;
    return nameRegex.test(name);
    } 
    
    isValidAddress(address) {
    let addressRegex=/^[a-zA-Z0-9\s]{4,}$/;
    return addressRegex.test(address);
    } 

    isValidpin(pin){
        let pinRegex=/^\d{6}$/;
        return pinRegex.test(pin);
    }
    
    isValidNumber(phonenumber){
        let phonenumberRegex=/^[6789]\d{9}$/;
        return phonenumberRegex.test(phonenumber);
    }
    isValidGmail(gmail){
        let gmailRegex=/^[a-zA-Z0-9.+-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return gmailRegex.test(gmail);
    }

}
module.exports = Contact;

