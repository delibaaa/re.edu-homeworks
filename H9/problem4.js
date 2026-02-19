class ContactManager {
  constructor() {
    this.contacts = [];
    this.nextId = 1;
  }

  addNewContact(name, phone, email) {
    if (this.contacts.find(c => c.email === email)) {
      return console.log("email already exists");
    }
    if (this.contacts.find(c => c.phone === phone)) {
      return console.log("phone already exists");
    }
    this.contacts.push({ id: this.nextId++, name, phone, email });
  }

  viewAllContacts() {
    console.log(this.contacts);
  }

  updatePhone(id, phone) {
    if (this.contacts.find(c => c.phone === phone)) {
      return console.log("phone already exists");
    }
    const contact = this.contacts.find(c => c.id === id);
    if (contact) contact.phone = phone;
  }

  deleteContact(id) {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}

const manager = new ContactManager();
manager.addNewContact("angelina numero uno", "599-1234", "angelinaN1@gmail.com");
manager.addNewContact("candice", "555-5678", "candice@gmail.com");
manager.addNewContact("nanka kalatozishvili <3", "555-1234", "nancho@gmail.com"); 
manager.addNewContact("nino chkheidze", "555-9999", "nincho@gmail.com"); 
manager.viewAllContacts();
manager.updatePhone(1, "555-0000");
manager.deleteContact(2);
manager.viewAllContacts();