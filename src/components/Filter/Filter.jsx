import { Input } from './Filter.styled';

export default function Filter({ currentFilter, onFilterInputChange }) {
  return (
    <Input
      type="text"
      placeholder="Find by name"
      value={currentFilter}
      onChange={onFilterInputChange}
    />
  );
}
