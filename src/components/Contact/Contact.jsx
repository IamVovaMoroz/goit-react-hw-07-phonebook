import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import css from './Contact.module.css';
// Импортирую useDispatch
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { deleteContact } from 'redux/fetchAPI';
// Импортируйте  deleteContacts из вашего редьюсера:
// import { deleteContacts } from 'redux/actions';




function Contact({ item }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(item.id));

  return (
    <>
      <li key={nanoid(5)} className={css.item}>
        {`${item.name}: ${item.number}`}
        <Button
          size="small"
          type="submit"
          // dispatch(deleteContacts передаю  deleteContacts как действие (action) и передаёт id
          onClick={handleDeleteContact}
      
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </li>

  
    </>
  );
}


export default Contact;

