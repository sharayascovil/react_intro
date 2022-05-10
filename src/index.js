import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const render = () => {

document.getElementById('mountNode').innerHTML = `
  <div>
    Hello HTML
  </div>
`;

ReactDOM.render(
  React.createElement(
    'div',
    null,
    'Hello React',
  ),
  document.getElementById('mountNode2'),
);

document.getElementById('mountNode').innerHTML = `
  <div>
    Hello HTML
    <input />
  </div>
`;

ReactDOM.render(
  React.createElement(
    "div",
    null,
    "Hello React ",
    React.createElement("input")
  ),
  document.getElementById('mountNode2'),
);

document.getElementById('mountNode1').innerHTML = `
  <div>
    Hello HTML
    <input />
    <pre>${new Date().toLocaleTimeString()}</p>
  </div>
`;

ReactDOM.render(
  React.createElement(
    'div',
    null,
    'Hello React ',
    React.createElement('input'),
    React.createElement(
      'pre',
      null,
      new Date().toLocaleTimeString()
    )
  ),
  document.getElementById('mountNode2')
  );
};

const SearchEngines = ({ engines }) => {
  return (
    <List>
      {engines.map(engine => <ClickableImage {...engine} />)}
    </List>
  );
};

ReactDOM.render(
 <SearchEngines engines={data} />,
 document.getElementById("mountNode")
);

const Button = () => {
  let count = 0;

  return (
    <button>{count}</button>
  );
};

ReactDOM.render(<Button />, mountNode);

function Button() {
  let count = 0;

  return (
    <button onClick={() => console.log('Button clicked')}>
      {count}
    </button>
  );
}

ReactDOM.render(<Button />, mountNode);

function func() {}

<button onClick={func} />;

const [count, setCount] = React.useState(0);

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

ReactDOM.render(<Button />, mountNode);

incrementCounter = (incrementValue) => {
  setCount(count + incrementValue);
};

const Button = ({ clickValue, clickAction }) => {
  return (
    <button onClick={() => clickAction(clickValue)}>
      +{clickValue}
    </button>
  );

  const CharacterCounter = () => {
    return (
      <div>
        <textarea cols={80} rows={10} />
        <div>Count: X</div>
      </div>
    );
  };
  
  ReactDOM.render(<CharacterCounter />, mountNode);


useEffect(() => {
  // Do something after each render
  // but only if dep1 or dep2 changed
}, [dep1, dep2]);

};

reportWebVitals();
