
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section ';
import css from './App.module.css';
import { fetchContacts } from 'redux/fetchAPI';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    
  }, [dispatch]);
  

return (
  <Section>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm
 
      />

    <h2 className={css.title}>Contacts</h2>
    <Filter
  
     />
    <ContactsList
      
    />
  </Section>
);
}
 

