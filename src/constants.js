// FILTER_OPTIONS: options displayed in the filter dropdown
// "All" shows all months, followed by individual months
export const FILTER_OPTIONS = [
  "All",
  "January",
  "February",
  "March"
];

// MONTHS: array of month names used for calculations or rendering table columns
export const MONTHS = [
  "January",
  "February",
  "March"
];

export const INITIAL_REWARDS = {
  January: 0,
  February: 0,
  March: 0,
  total: 0
};

// Initial state for the hook
export const INITIAL_STATE = {
  rewards: {},
  loading: false // not true by default
};