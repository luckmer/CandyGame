import * as _ from "../css/views/Game.style";
import DragAndDrop from "../hooks/DragAndDrop";
import ArrayCreator from "../hooks/ArrayCreator";
import AutoUpdate from "../hooks/AutoUpdate";
import CandyCreator from "./CandyCreator";

const Game = () => {
  const { Array, setArray } = ArrayCreator();
  const { handleDragOver, handleDrop, handleDragStart } = DragAndDrop(
    Array,
    setArray
  );

  AutoUpdate(Array, setArray);

  return (
    <_.Container>
      <_.ContainerMain>
        <_.GameStyle>
          {Array.map((el, i) => {
            const Back: string = el.color;
            return CandyCreator(
              i,
              Back,
              el,
              handleDragOver,
              handleDragStart,
              handleDrop
            );
          })}
        </_.GameStyle>
      </_.ContainerMain>
    </_.Container>
  );
};

export default Game;
