import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
import { Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <Input
      type="text"
      placeholder="Filter by name"
      value={filterValue}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
}
