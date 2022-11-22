import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button, Item } from './ContactList.styled';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const showContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {showContact().map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
