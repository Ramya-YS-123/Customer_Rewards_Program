// calculateRewardPoints function
// Calculates reward points based on the transaction amount:
// - 2 points for every dollar spent over $100
// - 1 point for every dollar spent over $50 (up to $100)
// Returns the total points for the given amount.

export const calculateRewardPoints = (amount) => {
  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2; // 2 points per dollar over 100
    points += 50; // 1 point per dollar for 51-100
  } else if (amount > 50) {
    points += amount - 50; // 1 point per dollar over 50
  }

  return points;
};