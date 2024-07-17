import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasketBallPlayerCard from "./components/BasketBallPlayerCard";

function App() {

  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-10 max-md:gap-40 max-lg:gap-40">
      <BasketBallPlayerCard
        src={'/lebron.png'}
        playername={"Lebron James"}
        position={"Forward"}
        stats={{ pointer: 15, assist: 100, rebound: 30 }}
      />

      <BasketBallPlayerCard
        src={'/stephenCurry.png'}
        playername={"Stephen Curry"}
        position={"Mid"}
        stats={{ pointer: 5, assist: 10, rebound: 30 }}
      />

<BasketBallPlayerCard
        src={'/jordan.png'}
        playername={"Michael Jordan"}
        position={"Forward"}
        stats={{ pointer: 150, assist: 1000, rebound: 300 }}
      />
    </div>
  );
}

export default App;
