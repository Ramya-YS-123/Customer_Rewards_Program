import { useState, useCallback, useMemo } from "react";
import { useRewards } from "../hooks/useRewards";
import TableRow from "./RewardsRow";
import FilterControls from "./FilterControls";
import { FILTER_OPTIONS } from "../constants";
import "../App.css";

// RewardsTable component with search
const RewardsTable = () => {
  const { rewards } = useRewards(); // Fetch rewards data
  const [month, setMonth] = useState("All"); // Month filter
  const [searchTerm, setSearchTerm] = useState(""); // Search by customer name

  // Handle month filter change
  const handleMonthChange = useCallback((e) => {
    setMonth(e.target.value);
  }, []);

  // Handle search input change
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Filtered rewards based on search
  const filteredRewards = useMemo(() => {
    return Object.entries(rewards).filter(([name]) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [rewards, searchTerm]);

  return (
    <div className="table-container">
      <div className="header">
        <h1>Customer Rewards Program</h1>

        {/* Month filter */}
        <FilterControls
          value={month}
          onChange={handleMonthChange}
          options={FILTER_OPTIONS}
        />

        {/* Search input */}
        <input
          type="text"
          placeholder="Search by customer name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>January</th>
            <th>February</th>
            <th>March</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {filteredRewards.map(([name, data]) => (
            <TableRow key={name} name={name} data={data} filter={month} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardsTable;