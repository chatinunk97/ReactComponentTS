import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";

//The first example : Add guest List
// const App = () => {
//   return (
//     <div>
//       <GuestList />
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <UserSearch />
      <EventComponent />
    </div>
  );
};
// React18 we don't use this anymore tho
ReactDOM.render(<App />, document.querySelector("#root"));
