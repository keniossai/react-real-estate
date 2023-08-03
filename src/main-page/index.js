import { useEffect, useState, useMemo } from "react";
import "./main.css";
import Header from "./header";

function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouse = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    }
    fetchHouse();
  }, [])

  const featuredHouse = useMemo(() => {
    if (allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
    
  return (
    <div className="container">
      <Header subtitle="Provide houses all over the world" title="Some title" />
    </div>
  );
}

export default App;
