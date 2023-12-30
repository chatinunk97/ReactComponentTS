import { useState } from "react";

const GuestList: React.FC = () => {
  //Normal usestate in react component 
  // differs from Class component
  const [name, setName] = useState("");
  const [ testState , setTestState] = useState('')
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    // This just normal spread
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>Guest List\</h3>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Add Guest</button>
      <ul>
        {guests.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default GuestList;
