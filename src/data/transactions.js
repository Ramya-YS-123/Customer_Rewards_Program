export const transactions = [
  // John
  { id: 1, customer: "John", amount: 120, date: "2024-01-12" },
  { id: 2, customer: "John", amount: 75, date: "2024-02-10" },
  { id: 3, customer: "John", amount: 200, date: "2024-03-05" },
  { id: 4, customer: "John", amount: 50, date: "2024-03-15" }, // edge case =50
  { id: 5, customer: "John", amount: 30, date: "2024-01-25" }, // edge case <50

  // Smith
  { id: 6, customer: "Smith", amount: 90, date: "2024-01-15" },
  { id: 7, customer: "Smith", amount: 110, date: "2024-02-20" },
  { id: 8, customer: "Smith", amount: 60, date: "2024-03-11" },
  { id: 9, customer: "Smith", amount: 100, date: "2024-03-22" }, // edge case =100

  // Alice
  { id: 10, customer: "Alice", amount: 50, date: "2024-01-05" }, // edge case =50
  { id: 11, customer: "Alice", amount: 120, date: "2024-02-18" },
  { id: 12, customer: "Alice", amount: 90, date: "2024-03-08" },
  { id: 13, customer: "Alice", amount: 200, date: "2024-01-28" },

  // Bob
  { id: 14, customer: "Bob", amount: 200, date: "2024-01-25" },
  { id: 15, customer: "Bob", amount: 150, date: "2024-02-14" },
  { id: 16, customer: "Bob", amount: 80, date: "2024-03-22" },
  { id: 17, customer: "Bob", amount: 45, date: "2024-02-05" }, // <50

  // Emma
  { id: 18, customer: "Emma", amount: 70, date: "2024-01-30" },
  { id: 19, customer: "Emma", amount: 95, date: "2024-02-11" },
  { id: 20, customer: "Emma", amount: 110, date: "2024-03-03" },
  { id: 21, customer: "Emma", amount: 50, date: "2024-03-20" }, // edge case =50

  // Additional customers
  { id: 22, customer: "Liam", amount: 130, date: "2024-01-10" },
  { id: 23, customer: "Liam", amount: 80, date: "2024-02-14" },
  { id: 24, customer: "Liam", amount: 60, date: "2024-03-12" },

  { id: 25, customer: "Olivia", amount: 40, date: "2024-01-05" }, // <50
  { id: 26, customer: "Olivia", amount: 150, date: "2024-02-25" },
  { id: 27, customer: "Olivia", amount: 100, date: "2024-03-15" }, // =100

  { id: 28, customer: "Noah", amount: 200, date: "2024-01-12" },
  { id: 29, customer: "Noah", amount: 90, date: "2024-02-18" },
  { id: 30, customer: "Noah", amount: 70, date: "2024-03-07" }
];

export default transactions;