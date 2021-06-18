import { HookInterface } from "../interfaces/HookInterface";
import * as _ from "../css/views/Game.style";

const CandyCreator = (
  i: number,
  Back: string,
  el: HookInterface,
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void,
  handleDragStart: (e: React.DragEvent<HTMLDivElement>) => void,
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void
) => {
  return (
    <_.Candy
      key={i}
      Props={Back}
      id={el.id ? el.id.toString() : ""}
      draggable
      data-id={el.color}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDrop={handleDrop}
    />
  );
};
export default CandyCreator;
