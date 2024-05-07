import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";





function App() {
  const[color,setColor]=useState([]);

  async function getColors(){
    let data=await fetch("https://www.csscolorsapi.com/api/colors");
    data=await data.json();
    setColor(data.colors);
  }
  
  useEffect(() => {
    getColors();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-wrap justify-center  " >
      <h1 className=" font-extrabold text-3xl  "  >Color Palette</h1>
      
      <Cards className=" flex"  data={color}></Cards>

    </div>
  );
}

export default App;
