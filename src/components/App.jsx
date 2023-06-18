
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useLocalStorage } from 'hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section ';
import css from './App.module.css';


// первоначальное значение для contacts!
// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function App() {

  // // const [contacts, setContacts] = useState(initialContacts);
  // // useLocalStorage используем при использовании хука
  // const [contacts, setContacts] = useLocalStorage("contacts", initialContacts);
  // const [filter, setFilter] = useState('');

  // // name было из-за 2 инпутов. Сейчас реагирует на event input.
  // // handleChange = name => e => {
  // //   this.setState(() => ({ [name]: e.target.value }));
  // // };

  // // берем значение из input и записываем в filter для поиска
  // const handleChange = (e) => {
  //   setFilter(e.target.value);
  // };

  // const addContact = ({ name, number }) => {
  //   if (contacts.find((contact) => contact.name === name)) {
  //     return alert(`${name} is already in contacts`);
  //   } else {
  //     const newContact = {
  //       id: nanoid(5),
  //       name,
  //       number,
  //     };
  //     // получаем пред. массив контактов или пустую строку. Распыляем и добавляем newContact в конец массива, обновляя массив
  //     setContacts((prevState) => [...prevState, newContact]);
  //   }
  // };

  // // deleteContact = id => {
  // //   setContacts(prevState => ({
  // //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  // //   }));
  // // };

  // // удаляем контакт по id удаляемого контакта. setContacts принимает состояние prevState. В новый массив попадают все контакты, id которых не совпадает с переданным для удаления. Перерендереваем
  // const deleteContact = (id) => {
  //   setContacts((prevState) => prevState.filter((contact) => contact.id !== id));
  // };

  // // поиск контакта из списка. Фильтруем массив, все, что включают в себя значения normalizedFilter, возвращаем
  // const handleFilterContacts = () => {
  //   // нормализовали фильтр, приведя к нижнему регистру и удалив отступы спереди и сзади
  //   const normalizedFilter = filter.toLowerCase().trim();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // записываем в переменную результат вызова функции
  // const filteredContacts = handleFilterContacts();


return (
  <Section>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm
    //  addContact={addContact}
      />

    <h2 className={css.title}>Contacts</h2>
    <Filter
    //  filterValue={filter} onChange={handleChange} 
     />
    <ContactsList
      // list={handleFilterContacts()} - это то же самое без записи в переменную, передаём массив
      // list={filteredContacts}
      // deleteContact={deleteContact}
    />
  </Section>
);
}
 



// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount = () => {
//     const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
//     console.log(localStorageContacts);

//     if (localStorageContacts !== null) {
//       return this.setState({ contacts: localStorageContacts });
//     }

//     this.setState({ contacts: initialContacts });
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     const prevContacts = prevState.contacts;
//     const nextContacts = this.state.contacts;

//     if (prevContacts !== nextContacts) {
//       return localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   };

//   handleChange = name => e => {
//     this.setState(() => ({ [name]: e.target.value }));
//   };

//   addContact = ({ name, number }) => {
//     if (this.state.contacts.find(contact => contact.name === name)) {
//       return alert(`${name} is already in contacts`);
//     } else {
//       const newContact = {
//         id: nanoid(5),
//         name,
//         number,
//       };

//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, newContact],
//       }));
//     }
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   handleFilterContacts = () => {
//     const { filter, contacts } = this.state;
//     const normilizedFilter = filter.toLowerCase().trim();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedFilter)
//     );
//   };

//   render() {
//     const filteredContacts = this.handleFilterContacts();
//     return (
//       <Section>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />

//         <h2 className={css.title}>Contacts</h2>
//         <Filter filterValue={this.state.filter} onChange={this.handleChange} />
//         <ContactsList
//           list={filteredContacts}
//           deleteContact={this.deleteContact}
//         />
//       </Section>
//     );
//   }
// }

// export default App;
