import { useCallback, useEffect, useRef, useState } from "react";

export const useNumbers = (n: number) => {
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [count, setCount] = useState(() => {
    if (typeof n === "number" && Number.isFinite(n)) {
      return Math.floor(Math.abs(n));
    }
    return 0;
  });
  const [numbers, setNumbers] = useState<number[]>([]);
  const setNumberCount = useCallback((newN: number) => {
    if (typeof newN === "number" && Number.isFinite(newN)) {
      setCount(Math.floor(Math.abs(newN)));
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      const numberArray = Array(count)
        .fill(null)
        .map((_, i) => i);
      for (let i = count - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];
      }
      setNumbers(numberArray);
    }, 500);
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, [count]);
  return {
    numbers,
    setNumberCount,
  };
};
