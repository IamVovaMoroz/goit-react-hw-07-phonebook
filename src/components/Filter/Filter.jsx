// import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { getFilterValue } from 'redux/actions';
// import { getFilter } from 'redux/selectors';
// import { getFilterValue } from 'redux/filtersSlice';

// import { getFilterValue } from 'redux/actions';
import { getFilter, setFilter } from 'redux/filtersSlice';
// import { getFilterValue } from 'redux/actions';

function Filter(
  // { filterValue, onChange }
  ) {
    const dispatch = useDispatch();
    const handleFilterChange = e => {
      // получаем значение с инпута , что вводит пользователь и передаем в action getFilterValue
     
     
      const filterValue = e.currentTarget.value;
      dispatch(setFilter(filterValue));
      // console.log('getFilterValue', getFilterValue)
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


// Filter.propTypes = {
//   filterValue: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };