import { useEffect, useState } from "react";
import "./main.css";
import Header from "./header";

function App() {
  useState([]);
  useEffect(() => {
    const fetchHouse = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
    }
    fetchHouse();
  }, [])
  return (
    <div className="container">
      <Header subtitle="Provide houses all over the world" title="Some title" />
    </div>
  );
}

export default App;
