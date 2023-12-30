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

ReactDOM.render(<App />, document.querySelector("#root"));
