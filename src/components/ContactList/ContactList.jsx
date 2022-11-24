import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button, Item, Name } from './ContactList.styled';
import {
  selectFilter,
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';

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
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <List>
          {showContact().map(({ id, name, number }) => (
            <Item key={id}>
              <Name>{name}:</Name>
              <p>{number}</p>
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
