import "./styles.css";

export default function App() {
  return (
    <h1>
      Hello
      <Greeting name="Amy" />
    </h1>
  );
}

function Greeting({ name }) {
  return <h1> {name} </h1>;
}
