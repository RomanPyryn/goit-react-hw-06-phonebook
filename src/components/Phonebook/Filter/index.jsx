import PropTypes from 'prop-types';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ inputName, value, onChange }) => (
  <FilterBox>
    <FilterLabel htmlFor="">
      {inputName}
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel>
  </FilterBox>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
