import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';

import {  getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filtersSlice';

function ContactsList(
  // { list, deleteContact }
  ) 
 
  {
    //  используем хук useSelector для получения состояния contacts.  getContacts возвращает список контактов из состояния. 
    const contacts = useSelector(getContacts);
    // хук useSelector для получения значения состояния filter.
    const filter = useSelector(getFilter);
   
// фильтр приводим к нижнему реестру и убираем пробелы, для сравнения со значения в контактах
// const normalizedFilter = filter.toLowerCase().trim();
const normalizedFilter = filter ? filter.toLowerCase().trim() : '';
  // console.log('normolizedFilter', normalizedFilter)

    // фиьтруем список контактов, на основе normolizedFilter . Оставляем список только тех, что есть в этом фильтре
    const list = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter) );





      
  return (
    <ul>

      {list.map(contact => {
        return (<Contact  item={contact}  key={nanoid(5)}
      
           
       
          />
        );
      })}
    </ul>
  );
}


export default ContactsList;


// ContactsList.propTypes = {
//   list: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
