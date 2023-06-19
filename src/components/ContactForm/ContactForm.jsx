
import { useDispatch, useSelector  } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import css from './ContactForm.module.css';

import { Notify } from 'notiflix';
import { addContacts } from 'redux/fetchAPI';
import { getContacts } from 'redux/contactSelector';


export default function ContactForm() {
  const dispatch = useDispatch();

const contacts = useSelector(getContacts)

  const handleSubmit = e => {
    e.preventDefault();
      // получаем form из формы при submit, для сброса после отправки
    const form = e.target;
    // получаем name из формы при submit
  const name = e.target.name.value;
    // получаем number из формы при submit
  const number = e.target.number.value;
// если пользователь есть в списке, нового не добавляем
  if (contacts.find(contact => contact.name === name)) {
    Notify.warning(`${name} this contact is already in the contact list`);
    return;
  }



  dispatch(addContacts({  name, number }));
  form.reset();
  };
  

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={css.list}>
      <label>
        <TextField
          // inputProps={{
          //   pattern:
          //     "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          // }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          // value={name}
          // onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <TextField
          // inputProps={{
          //   // inputMode: 'numeric',
          //   pattern:
          //     '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
          // }}
          id="outlined-basic"
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          // value={number}
          // onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
}