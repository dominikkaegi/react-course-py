import React, { useState } from "react";

// npx creat-create-app "applicationName"
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// React rendering to the Page
// Components
// Components with properties
// Handling Events
// Using State

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ maxWidth: "800px", padding: "20px" }}>
        {/* <IntroJSX /> */}
        {/* <RenderingElements /> */}
        {/* <Components /> */}
        {/* <ComponentsWithProps /> */}
        {/* <HandlingEvents /> */}
        {/* <RenderingLists /> */}
      </div>
    </div>
  );
}

//  JSX
function IntroJSX() {
  return (
    <div>
      <h3>JSX Introduction</h3>
      <p>
        This seems to be HTML, but in reality it is just JSX. JSX is a syntax
        extension of javascript. This means jsx is just javascript. This text is
        currently is a argument string within a javascript function.
      </p>
    </div>
  );
}

// React Elements
function RenderingElements() {
  const p = React.createElement("p", null, "This is a paragraph");
  const div = React.createElement("div", null, "This is a div element", p, p);

  return (
    <div>
      <h3>RenderingElements</h3>
      <p>
        It does not matter if you create elements with JSX or with the
        `React.createElement` function. Both return react elements which we can
        render to the DOM with the `react-dom` library.
      </p>
      {div}
      {p}
    </div>
  );
}

// Components
function Components() {
  return (
    <div>
      <h3>Components</h3>
      <p>
        All these weird functions which return JSX are in fact react components.
        We can compose react components to our liking. For example we can just
        reuse the previous component `RenderingElement` by adding {`<`} and{" "}
        {`>`}
        around it:
      </p>
      <div>
        <p>
          <RenderingElements />
        </p>
      </div>
    </div>
  );
}

// Props
function ComponentsWithProps() {
  return (
    <div>
      <h3>Components with Props</h3>
      <p>
        We can pass on props (short for properties) to any component. For
        example to make the next paragraph red we can pass on a style props
      </p>
      <p style={{ color: "red" }}>Red Paragraph</p>
    </div>
  );
}
function CustomParagraph(props) {
  return <p style={{ color: "red" }}>{props.text}</p>;
}

// -----------------------
// LET THEM WORK
// -----------------------
// -----------------------
// -----------------------
// -----------------------

function HandlingEvents() {
  const handleClick = () => {
    console.log("handling event in parent");
  };

  return (
    <div>
      <h5>Parent Element</h5>
      <CustomButton onClick={handleClick} />
    </div>
  );
}
function CustomButton(props) {
  const handleClick = () => {
    console.log("handeling initial event in child");
    // Do some calculation
    props.onClick();
  };

  return (
    <div>
      <button style={{ color: "red" }} onClick={handleClick}>
        Fire Action
      </button>
    </div>
  );
}

// Conditional rendering
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// Conditional rendering
function RenderingLists() {
  const users = [
    {
      name: "jimmy",
      id: "1"
    },
    {
      name: "john",
      id: "2"
    },
    {
      name: "Anni",
      id: "3"
    },
    {
      name: "Sabringa",
      id: "4"
    }
  ];

  const list = users.map(user => <li key={user.name}>{user.name}</li>);

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}

// -----------------------
// LET THEM WORK
// -----------------------
// -----------------------
// -----------------------
// -----------------------

// Using sate
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Value</button>
    </div>
  );
}

// -----------------------
// LET THEM WORK
// -----------------------
// -----------------------
// -----------------------
// -----------------------

// Children -> Composability
function RenderChildren({ children }) {
  return (
    <div>
      <h2>Child</h2>
      {children}
    </div>
  );
}

function RedParagraph({ children }) {
  return <div styles={{ color: "red" }}>{children}</div>;
}

function RenderChildren({ children }) {
  return (
    <div>
      <RedButton>This text is written in red</RedButton>
      <RedButton>
        This text is written in red,
        <span style={{ color: "blue" }}>but this part is blue</span>
      </RedButton>
    </div>
  );
}

function RedButton() {}

// -----------------------
// LET THEM WORK
// -----------------------
// -----------------------
// -----------------------
// -----------------------
