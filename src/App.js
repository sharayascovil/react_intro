import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Button (props) {
  return React.createElement(
    "button",
    { type: "submit" },
    props.label
  );
}

ReactDOM.render(
  React.createElement(Button, { label: "Save"}),
  mountNode
);

const Button = ({ label }) => (
  <button type="submit">{label}</button>
);

const RandomValue = () => (
  <div>
    { Math.floor(Math.random() * 100) }
  </div>
);

ReactDOM.render(<RandomValue />, mountNode);

const ErrorDisplay = ({ message }) => (
  <div style={ { color:'red', backgroundColor:'yellow' } }>
    {message}
  </div>
);

ReactDOM.render(
  <ErrorDisplay
    message="These aren't the droids you're looking for"
  />,
  mountNode
);

class ConditionalStyle extends React.Component {
  render() {
    return (
      <div style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>
        How do you like this?
      </div>
    );
  }
}

ReactDOM.render(
  <ConditionalStyle />,
  mountNode,
);

<ul>
  {todos.map(todo =>
    <li>{todo.body}</li>
  )}
</ul>

React.createElement(
  "ul",
  null,
  todos.map(todo =>
    React.createElement("li", null, todo.body)
  ),
);

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.label}</button>
    );
  }
}

// Use it (same syntax)
ReactDOM.render(<Button label="Save" />, mountNode);

function Display(props) {
  return (
    <pre>COUNT VALUE HERE...</pre>
  );
}

ReactDOM.render(<><Button /><Display /></>, mountNode);

ReactDOM.render(
  <div>
    <Button />
    <Display />
  </div>,
  mountNode
);

const CountManager = () => {
  return (
    <>
      <Button />
      <Display />
    </>
  );
};

ReactDOM.render(<CountManager />, mountNode);

const Button = () => {
  return (
    <button onClick={() => console.log('TODO: Increment counter')}>
      +1
    </button>
  );
};

const Display = ({ content }) => (
  <pre>{content}</pre>
);

const CountManager = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button />
      <Display content={count} />
    </>
  );
};

ReactDOM.render(<CountManager />, mountNode);

function CountManager() {
  // ....
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // ...
};

const Button = ({ clickAction }) => {
  return (
    <button onClick={clickAction}>
      +1
    </button>
  );
};

// ...

const CountManager = () => {
  // ...

  return (
    <>
      <Button clickAction={incrementCounter} clickValue={1} />
      <Button clickAction={incrementCounter} clickValue={5} />
      <Button clickAction={incrementCounter} clickValue={10} />
      <Display content={count} />
    </>
  );

};





export default App;
