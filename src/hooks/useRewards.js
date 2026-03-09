import { useState, useMemo } from "react";
import transactions from "../data/transactions";
import { calculateRewardPoints } from "../utils/rewardCalculator";
import { INITIAL_REWARDS } from "../constants";

// useRewards hook with memoization
export const useRewards = () => {
  const [loading, setLoading] = useState(false);

  // Use useMemo to avoid recalculating rewards unless transactions change
  const rewards = useMemo(() => {
    setLoading(true);

    const result = {};

    transactions.forEach(({ customer, amount, date }) => {
      const month = new Date(date).toLocaleString("default", { month: "long" });
      const points = calculateRewardPoints(amount);

      if (!result[customer]) {
        result[customer] = { ...INITIAL_REWARDS };
      }

      result[customer][month] += points;
      result[customer].total += points;
    });

    setLoading(false);
    return result;
  }, [transactions]); // recalculates only if transactions change

  return { rewards, loading };
};