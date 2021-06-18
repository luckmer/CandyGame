import { useEffect } from "react";
import { HookInterface } from "../interfaces/HookInterface";
import Candy from "../hooks/Candy";

const AutoUpdate = (
  Array: HookInterface[],
  setArray: React.Dispatch<React.SetStateAction<HookInterface[]>>
) => {
  const {
    FillEmptySpace,
    MoveBlockDown,
    DeleteThreeVertical,
    DeleteThreeHorizontal,
  } = Candy(Array, setArray);

  useEffect(() => {
    if (!Array.length) return;
    const timer = setInterval(() => {
      DeleteThreeHorizontal();
      DeleteThreeVertical();
      MoveBlockDown();
      FillEmptySpace();
    }, 100);

    return () => clearInterval(timer);
  }, [
    Array,
    DeleteThreeHorizontal,
    DeleteThreeVertical,
    MoveBlockDown,
    FillEmptySpace,
  ]);
};

export default AutoUpdate;
