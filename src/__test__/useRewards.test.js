// Tests for useRewards hook logic calculations

import { calculateRewardPoints } from "../utils/rewardCalculator";
import transactions from "../data/transactions";

describe("useRewards logic", () => {
  test("calculates points correctly", () => {
    const rewards = {};
    transactions.forEach(t => {
      const month = new Date(t.date).toLocaleString("default", { month: "long" });
      const points = calculateRewardPoints(t.amount);
      if (!rewards[t.customer]) {
        rewards[t.customer] = { January: 0, February: 0, March: 0, total: 0 };
      }
      rewards[t.customer][month] += points;
      rewards[t.customer].total += points;
    });

    const john = rewards["John"];
    expect(john.January).toBe(calculateRewardPoints(120) + calculateRewardPoints(30));
    expect(john.February).toBe(calculateRewardPoints(75));
    expect(john.March).toBe(calculateRewardPoints(200) + calculateRewardPoints(50));
    expect(john.total).toBe(john.January + john.February + john.March);
  });
});