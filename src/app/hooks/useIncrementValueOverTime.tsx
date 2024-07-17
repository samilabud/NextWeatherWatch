import { useEffect, useState } from "react";

// Function to increase a value over time using setInterval
export const useIncrementValueOverTime = (
  initialValue: number,
  incrementAmount: number,
  intervalEndsAt: number
) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + incrementAmount);
    }, 1000);
    if (value >= intervalEndsAt) {
      clearInterval(interval);
    }

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [incrementAmount, intervalEndsAt, value]);

  return value;
};

export default useIncrementValueOverTime;
