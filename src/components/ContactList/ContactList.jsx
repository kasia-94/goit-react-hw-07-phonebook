import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button, Item } from './ContactList.styled';
import {
  selectFilter,
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller));
    return () => controller.abort();
  }, [dispatch]);

  const showContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
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
      )}
    </>
  );
};

export default ContactList;
