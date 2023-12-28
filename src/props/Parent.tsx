import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log("CLiscked!");
      }}
    >
      ssszzzzzzzzzzzzzzzzzzzzzzzzzzz
    </ChildAsFC>
  );
};

export default Parent;
