import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};
// React18 we don't use this anymore tho
ReactDOM.render(<App />, document.querySelector("#root"));
