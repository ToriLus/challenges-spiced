import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "banana", color: "yellow" },
    { id: 1, name: "orange", color: "orange" },
    { id: 2, name: "apple", color: "red" },
    { id: 3, name: "kaki", color: "orange" },
    { id: 4, name: "grapefruit", color: "pink" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
