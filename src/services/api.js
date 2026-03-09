// fetchTransactions function
// Simulates fetching transaction data from an API.

import transactions from "../data/transactions";

export const fetchTransactions = async () => {
  return Promise.resolve(transactions);
};