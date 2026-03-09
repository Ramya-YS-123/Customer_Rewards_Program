import PropTypes from "prop-types";

// FilterControls component
// Renders a dropdown menu that allows the user to select a filter option.
// Calls the onChange callback whenever the selected option changes.
const FilterControls = ({ value, onChange, options }) => {
  return (
    <div className="filter">
      <label>Filter:</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

// Prop validation
FilterControls.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FilterControls;
