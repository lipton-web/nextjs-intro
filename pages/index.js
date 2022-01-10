import { useState } from "react";
import Seo from "../components/Seo";


export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Seo title="Home"/>
      <h1>hello {counter}</h1>
      <button onClick={() => setCounter((prev) => prev +1)}>+</button>
    </div>
  );
}