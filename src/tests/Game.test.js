import Game from "../views/Game";
import ReactDOM from "react-dom";

describe("Game", () => {
  test("load Game without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game />, div);
  });
});
