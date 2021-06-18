import { HookInterface } from "../interfaces/HookInterface";
import { GRID_SIZE } from "../hooks/Constants";

const DragAndDrop = (
  Array: HookInterface[],
  setArray: React.Dispatch<React.SetStateAction<HookInterface[]>>
) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void =>
    e.preventDefault();

  const Return = (el: HookInterface, targetColor: string) => {
    return {
      ...el,
      color: targetColor,
    };
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const type = (e.target as HTMLElement).dataset.id!;
    const ID = (e.target as HTMLElement).id;
    e.dataTransfer.setData("Color", type);
    e.dataTransfer.setData("ColorId", ID);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const Curr = e.target as HTMLElement;
    const targetColor = e.dataTransfer.getData("Color");
    const targetID = e.dataTransfer.getData("ColorID");
    const targetNumber = Number(targetID);
    const obj = Number(Curr.id);
    const objColor = Curr.dataset.id!;

    const OneMove = [
      targetNumber,
      targetNumber - 1,
      targetNumber + 1,
      targetNumber + GRID_SIZE,
      targetNumber - GRID_SIZE,
    ];

    if (
      OneMove.includes(obj) &&
      targetColor !== objColor &&
      targetColor !== "" &&
      objColor !== ""
    ) {
      const Update = Array.map((el) => {
        if (el.id === targetNumber) return Return(el, objColor);
        if (el.id === obj) return Return(el, targetColor!);
        return el;
      });
      setArray(Update);
    }
  };

  return { handleDragOver, handleDrop, handleDragStart };
};

export default DragAndDrop;
