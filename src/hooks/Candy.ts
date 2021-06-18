import { useCallback } from "react";
import { GRID_TOTAL_SIZE, COLORS, GRID_SIZE } from "../hooks/Constants";
import { HookInterface } from "../interfaces/HookInterface";

const Candy = (
  Array: HookInterface[],
  setArray: React.Dispatch<React.SetStateAction<HookInterface[]>>
) => {
  const mergeAndDeleteForRow = (Array: HookInterface[]) => {
    for (let i = 0; i < GRID_SIZE * GRID_SIZE - 2; i++) {
      const Check = [i, i + 1, i + 2];
      const color = Array[i].color;

      const isSame = Check.every(
        (row) => Array[row].color === color && color !== ""
      );

      if (isSame) {
        Check.forEach((row) => (Array[row].color = ""));
        return Array;
      }
    }
  };

  const mergeAndDeleteForColumn = (Array: HookInterface[]) => {
    for (let i = 0; i < GRID_SIZE ** 2 - GRID_SIZE * 2; i++) {
      const Check = [i, i + GRID_SIZE, i + GRID_SIZE * 2];
      const color = Array[i].color;
      const isSame = Check.every(
        (col) => Array[col].color === color && color !== ""
      );

      if (isSame) {
        Check.forEach((col) => (Array[col].color = ""));
        return Array;
      }
    }
  };

  const DeleteThreeHorizontal = useCallback(() => {
    if (!Array.length) return;
    const result = mergeAndDeleteForRow(Array);
    if (result) setArray([...result]);
  }, [Array, setArray]);

  const DeleteThreeVertical = useCallback(() => {
    if (!Array.length) return;
    const result = mergeAndDeleteForColumn(Array);
    if (result) setArray([...result]);
  }, [Array, setArray]);

  const UpdateBlockDown = (array: HookInterface[], Return: any) => {
    for (let i = 0; i < GRID_TOTAL_SIZE - GRID_SIZE - 1; i++) {
      if (array[i + 8] && array[i + 8].color === "") {
        setTimeout(() => {
          array[i + 8].color = array[i].color;
          array[i].color = "";
          Return(array);
        }, 50);
      }
    }
  };
  const UpdateEmptySpace = (array: HookInterface[], Return: any) => {
    for (let i = 0; i < GRID_TOTAL_SIZE; i++) {
      const random = Math.floor(Math.random() * COLORS.length);

      if (array[i] && array[i].color === "") {
        setTimeout(() => {
          array[i].color = COLORS[random];
          Return(array);
        }, 100);
      }
    }
  };

  const MoveBlockDown = useCallback(
    () =>
      UpdateBlockDown(Array, (list: HookInterface[]) => setArray([...list])),
    [Array, setArray]
  );

  const FillEmptySpace = useCallback(
    () =>
      UpdateEmptySpace(Array, (list: HookInterface[]) => setArray([...list])),
    [Array, setArray]
  );

  return {
    FillEmptySpace,
    MoveBlockDown,
    DeleteThreeVertical,
    DeleteThreeHorizontal,
  };
};

export default Candy;
