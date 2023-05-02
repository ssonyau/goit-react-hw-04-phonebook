
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import React, { useState } from 'react';




const App = () => {
const [contacts, setContacts] = useState([])
const [filter, setFilter] = useState('')

const filterContacs = () => {
   const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredContacts;
};

const searchEngine = evt => {
  evt.preventDefault();
  setFilter(evt.target.value)
};

const addContact = fieldResult => {
  const newContact = {
    id: nanoid(),
    name: fieldResult.name,
    number: fieldResult.number,
  };

  let presents = contacts.some(
    item => item.name.toLowerCase() === newContact.name.toLowerCase()
  );
  if (presents === false) {
    setContacts(prevContacts=>[...prevContacts,newContact]
    )
  
  } else {
    alert(`${newContact.name} is already in contacts`);
  }
};

const removeItem = elemName => {
  setContacts(prevContacts=>prevContacts.filter(contact => contact.name !== elemName))

};




  return (
    <div className={css.goitTemplateMarkup}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={addContact} />

          <h2>Contacts</h2>
          <Filter
            searchEngine={searchEngine}
            inputValue={filter}
          />
          <ContactList
            filterContacs={filterContacs}
            removeItem={removeItem}
          />
        </div>
      </div>
  )
}

export {App}


