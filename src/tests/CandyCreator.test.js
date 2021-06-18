import CandyCreator from "../views/CandyCreator";
import ReactDOM from "react-dom";

describe("CandyCreator", () => {
  test("should load CandyCreator without crashing", () => {
    const div = document.createElement("div");

    const i = 1;
    const el = { id: 39, name: 39, color: "green" };
    const handleDragOver = () => {};
    const handleDragStart = () => {};
    const handleDrop = () => {};

    ReactDOM.render(
      CandyCreator(i, el, handleDragOver, handleDragStart, handleDrop),
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
