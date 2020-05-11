import React from "react";
import "./styles.css";
import Card from "./Components/Card/Card";
import FILES from "./FILES";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1> Tracking App </h1>
      </header>
      {FILES.map(file => (
        <Card title={file.title} type={file.type} address={file.address} />
      ))}
    </div>
  );
}
