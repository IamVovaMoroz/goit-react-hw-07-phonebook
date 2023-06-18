// import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter} from 'redux/filtersSlice';
import { setFilter } from 'redux/filtersSlice';


function Filter(
  // { filterValue, onChange }
  ) {
    const dispatch = useDispatch();
    const handleFilterChange = e => {
      // получаем значение с инпута , что вводит пользователь и передаем в action getFilterValue
     
     
      const filterValue = e.target.value;
      dispatch(setFilter(filterValue));
    
    };
    // получаем 
    const filter = useSelector(getFilter);
  return (
    <label className={css.filter}>
      Find contacts by name
      <TextField
        id="standard-basic"
        label="Print name ..."
        variant="standard"
        type="text"
        name="filter"
        // берем текущее значение из state  передаем в value, для отображения пользователю
        value={filter}

        // убираем вызов функции, оставляем только ссылку onChange={onChange('filter')}
        onChange={handleFilterChange}
      />
    </label>
  );
}


export default Filter;


