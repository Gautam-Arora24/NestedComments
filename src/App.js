import { useState } from "react";
import "./App.css";
import data from "./data";
import NestedComments from "./NestedComments";

function App() {
  const [object] = useState(JSON.parse(data));
  return <NestedComments data={object}></NestedComments>;
}

export default App;
