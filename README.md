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

I assume useState here is also a generic function so we can put in string[]

```
  const [guests, setGuests] = useState<string[]>([]);
```

# TS with event handler

This is the typical Component we use in React
but if we implement this directly TS will error the (e)

```
export const EventComponent: React.FC = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};
```

Note that if it's an Inline event there would not be an error

```
<input onChange={(e)=>{console.log(e)}} />
```

WHY ?

This is because TS is aware of the type onChange which will auto get an event argument
(Type inference system)

However, this does not happen to the function onChange we define beforehand
because it's not known to TS where this functon will be executed

- Add " React.ChangeEvent<HTMLInputElement> "

```
export const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};
```

But like we knoe there are many event handler to handle
The easy way to find the right types for each event handler, just ctrl + click on the onClick / onChange prop that's it

# useRef with TS

Just a recap useRef is used to store a reference to an HTML element
which normally be done by just defining a useRef to a variable and stick it to a HTML element by ref={theuseRef}

```
  const inputRef = useRef<HTMLInputElement>();
  .
  .
  .
  .
   return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

```

But for TS we must be more specific, of course, we just put in the type accordingly to the HTML element that we are planning to stick the useRef with

However, this still shows an error at ref
Because eventho we define the inputRef we 'might' not assigned it to anything
like ust create the ref and do nothing so the value MAY be null in some case.
So we must handle that too

```
const inputRef = useRef<HTMLInputElement | null>(null);
```

Remeber since the useRef can be null we have to check it first before doing the focus

```
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);
```

This is a handy way to make some input already focussed when the user enter the page so they can type righ away without having to click on the input box

The main take away from using hooks in a React Component

Find the right type or the generic function !

```
const inputRef = useRef<HTMLInputElement | null>(null);
```
