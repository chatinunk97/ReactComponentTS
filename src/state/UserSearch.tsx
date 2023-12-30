import { useState } from "react";

const users = [
  { name: "Sarach", age: 20 },
  { name: "Alex", age: 18 },
  { name: "Michael", age: 19 },
];

interface foundUser {
  name?: string;
  age?: number;
}
const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [foundUser, setFoundUser] = useState<foundUser | undefined>({});

  const onClick = () => {
    //My solution
    // setFoundUser(
    //   users.filter((el) =>
    //     el.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase())
    //   )[0]
    // );

    const foundUser = users.find((user) => {
      return user.name.toLowerCase().startsWith(name.toLowerCase());
    });
    setFoundUser(foundUser);
  };
  return (
    <div>
      User Search
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Search</button>
      <hr />
      <h3>Found User</h3>
      {foundUser ? (
        <>
          <h4>Username : {foundUser && foundUser.name}</h4>
          <h4>Username : {foundUser && foundUser.age}</h4>
        </>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
};

export default UserSearch;
