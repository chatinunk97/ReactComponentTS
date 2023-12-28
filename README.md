# Typescript with React Component

Parents and Children Component
TS helps us to check we are sending the PROPS correctly and using it properly

- 1 Way : Using Interface to add type annotation to the props
  Downside : TS doesn't know that this is an React Component , they will it as a function
  React Component has some props provided auto like propTypes displayName defaultProps contextTypes which TS now is't aware of

```
interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

```

- 2 Using React.FC

We are telling TS that this is a React Component and which takes a props color
and also other React component props that is auto added
(Well if you don't want to use the prop that is auto stick with React Component you might get back to 1.)

```
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};

```

# There's nothing much to Functional component TS

```
import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState([]);

  const onClick = (name) => {
    setName("");
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
      <button
        onClick={() => {
          onClick(name);
        }}
      >
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;

```

This is our typical React Component
except the type annotation to the React Compoennt itself

```
GuestList: React.FC
```

However now there's an error with TS on the useState()
TS tries to apply type inference (the way TS knows the type without we doing type annotation) but they will not now useState([]) it will be "never[]"

TS will think that the array will always be an empty array. So we need to give TS a hint
