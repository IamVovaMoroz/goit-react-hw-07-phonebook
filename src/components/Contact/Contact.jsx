import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import css from './Contact.module.css';
// Импортирую useDispatch
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

// Импортируйте  deleteContacts из вашего редьюсера:
// import { deleteContacts } from 'redux/actions';




function Contact({ item }) {
  const dispatch = useDispatch();
  return (
    <>
      <li key={nanoid(5)} className={css.item}>
        {`${item.name}: ${item.number}`}
        <Button
          size="small"
          type="submit"
          // dispatch(deleteContacts передаю  deleteContacts как действие (action) и передаёт id
          onClick={() => dispatch(deleteContact(item.id))}
          // onClick={() => deleteContact(item.id)}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </li>

      {/* <button type="submit" onClick={() => deleteContact(item.id)}>
        delete
      </button> */}
    </>
  );
}


export default Contact;

// Contact.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }),
// };
