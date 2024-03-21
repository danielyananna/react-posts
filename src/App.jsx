import Header from "./components/Header";
import './App.css';
import './assets/media/style.css'
import Posts from "./components/Posts";
import { useState } from "react";

function App() {

  const [query, setQuery] = useState("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <Posts query={query} />
    </>
  )
}

export default App
