import PropTypes from "prop-types";
import React from "react";
import { MONTHS } from "../constants"; // import dynamic month list

// TableRow component
// Renders a single row in a table showing a customer's name and monthly data.
// Displays data for a month only if it matches the selected filter or if "All" is selected.
// Always displays the total value.
const TableRow = React.memo(({ name, data, filter }) => {
  return (
    <tr>
      <td>{name}</td>

      {MONTHS.map((month) => (
        <td key={month}>
          {filter === "All" || filter === month ? data[month] : "-"}
        </td>
      ))}

      <td>{data.total}</td>
    </tr>
  );
});

// Prop validation
TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    January: PropTypes.number.isRequired,
    February: PropTypes.number.isRequired,
    March: PropTypes.number.isRequired
  }).isRequired,
  filter: PropTypes.string.isRequired
};

// Default props (optional, useful if future months are added)
TableRow.defaultProps = {
  data: {
    January: 0,
    February: 0,
    March: 0
  }
};

export default TableRow;