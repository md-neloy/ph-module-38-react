import "./App.css";
import Button from "../src/component/Button";
import Todo from "./component/Todo";
function App() {
  const container = {
    width: "80%",
    margin: "0 auto",
  };
  return (
    <>
      <div style={container}>
        <h1>react</h1>
        <Person></Person>
        <Device name="Laptop" price="1000"></Device>
        <Device name="Desktop" price={10000}></Device>
        <Device name="Mobile"></Device>
        <ul style={{ listStyle: "none" }}>
          <Todo task="React" isDone={false}></Todo>
          <Todo task="Tailwind" isDone={true}></Todo>
        </ul>
      </div>
    </>
  );
}

const Person = () => {
  const box = {
    padding: "10px",
    border: "2px solid black",
    borderRadius: "8px",
  };
  return (
    <div style={box}>
      <h3>Hello React World</h3>
    </div>
  );
};

const Device = (props) => {
  const box = {
    padding: "10px",
    border: "2px solid black",
    borderRadius: "8px",
    margin: "15px 0",
  };
  const { name, price = 0 } = props;
  return (
    <div style={box}>
      Device Name: {props.name}
      price:{price}
      <br></br>
      <Button btnName="Next Page"></Button>
    </div>
  );
};
export default App;
