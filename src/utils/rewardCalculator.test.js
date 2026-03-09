import { calculateRewardPoints } from "../utils/rewardCalculator";

// Test case: amount greater than 100
// Should calculate 2 points per dollar over 100 + 1 point per dollar for 51-100
test("amount greater than 100", () => {
  const result = calculateRewardPoints(120); // 20*2 + 50 = 90
  expect(result).toBe(90);
});

// Test case: amount between 50 and 100
// Should calculate 1 point per dollar over 50
test("amount between 50 and 100", () => {
  const result = calculateRewardPoints(80); // 80-50 = 30
  expect(result).toBe(30);
});