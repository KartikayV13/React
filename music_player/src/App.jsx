import { useState } from "react";
import SideBar from "./Components/SideBar";
import Player from "./Components/Player";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" h-screen bg-black">
        <div className="h-[90%] flex">
          <SideBar />
        </div>
        <Player/>
      </div>
    </>
  );
}

export default App;
