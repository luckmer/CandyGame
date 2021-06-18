import { useState, useMemo, useEffect } from "react";
import { GRID_TOTAL_SIZE, COLORS } from "../hooks/Constants";
import { HookInterface } from "../interfaces/HookInterface";

const ArrayCreator = () => {
  const [array, setArray] = useState<HookInterface[]>([]);

  useEffect(() => {
    const box: HookInterface[] = [];
    for (let i = 0; i < GRID_TOTAL_SIZE; i++) {
      const colors = Math.floor(Math.random() * COLORS.length);
      const newData = {
        id: i,
        name: i,
        color: COLORS[colors],
      };
      box.push(newData);
    }

    setArray(box);
  }, []);

  const Array = useMemo(() => array, [array]);

  return { Array, setArray };
};

export default ArrayCreator;
