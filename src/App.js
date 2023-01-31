import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {


  const [data, setData] = useState();

  const apiFetching = async () => {
    const response = await fetch(urlApi);
    const responsed = await response.json();
    setData(responsed);
  };

  useEffect(() => {
    apiFetching();
  }, []);

  console.log("DATA STATE SAVED =>", data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, This is a review of api fetching on React.</p>
        <p>
          Here I'm fetching Rick and Morty public api, wich is mostly used to
          educational purposes and is open source.
        </p>
        <p>
          I'm gonna use data which is declared with use State hook, and where is
          located the data fetched of rick and morty api. And i'm going to
          render it: </p>
        {data ? (
          <>
          <h3>To access to the characters use the link down below: </h3>
            <p>{data.characters}</p>
          </>
        ) : null}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
