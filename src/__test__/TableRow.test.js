// Tests for TableRow component filtering logic

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import TableRow from "../components/RewardsRow";

const sampleData = { January: 50, February: 30, March: 20, total: 100 };

describe("TableRow filtering", () => {
  test("shows all months if filter='All'", () => {
    render(
      <table>
        <tbody>
          <TableRow name="TestCustomer" data={sampleData} filter="All" />
        </tbody>
      </table>
    );

    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  test("shows only filtered month", () => {
    render(
      <table>
        <tbody>
          <TableRow name="TestCustomer" data={sampleData} filter="February" />
        </tbody>
      </table>
    );

    expect(screen.getByText("30")).toBeInTheDocument(); // February
    expect(screen.getAllByText("-").length).toBe(2);     // January & March
  });
});