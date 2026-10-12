import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState({});

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
    setResults(response.data.meaning);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=74b8442a4oa25823t288ab70d171ef48`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
