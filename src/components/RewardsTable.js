import { useState, useCallback } from "react";
import { useRewards } from "../hooks/useRewards";
import TableRow from "./RewardsRow";
import FilterControls from "./FilterControls";
import { FILTER_OPTIONS } from "../constants";
import "../App.css";

const RewardsTable = () => {
  const { rewards } = useRewards();
  const [filter, setFilter] = useState("All");

  // useCallback ensures the handler reference is stable and prevents unnecessary re-renders
  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div className="table-container">
      <div className="header">
        <h1>Customer Rewards Program</h1>
        <FilterControls
          value={filter}
          onChange={handleFilterChange}
          options={FILTER_OPTIONS}
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
          {Object.entries(rewards).map(([name, data]) => (
            <TableRow
              key={name}
              name={name}
              data={data}
              filter={filter}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardsTable;