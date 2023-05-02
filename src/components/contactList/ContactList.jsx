import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ filterContacs, removeItem }) => {
  const a = filterContacs();
  // console.log('a', a);
  return (
    <ul>
      {a.map(value => (
        <ContactListItem
          key={value.id}
          name={value.name}
          number={value.number}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacs: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ContactList;
