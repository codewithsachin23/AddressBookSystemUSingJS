class Contact{
    constructor(firstname,lastname,address, city, state, zip, phonenumber,email){
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
}

let contact1=new Contact("sachin","shukla","anand Nagar Bhopal","Bhopal","madhya pradesh","462022","787926.....","sachinshukla@gmail.com");
console.log(contact1);
console.log(contact1.toString());