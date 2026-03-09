// Tests for TableRow component filtering logic

import { calculateRewardPoints } from "../utils/rewardCalculator";

describe("calculateRewardPoints", () => {
  test("amount > 100 gives correct points", () => {
    expect(calculateRewardPoints(120)).toBe(90);
  });

  test("amount between 50 and 100 gives correct points", () => {
    expect(calculateRewardPoints(80)).toBe(30);
  });

  test("amount <= 50 gives 0 points", () => {
    expect(calculateRewardPoints(50)).toBe(0);
    expect(calculateRewardPoints(30)).toBe(0);
  });
});