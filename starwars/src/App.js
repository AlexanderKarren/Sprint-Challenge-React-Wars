import React, { useState, useEffect } from 'react';
import CharacterCard from "./components/CharacterCard";
import SearchBar from './components/SearchBar';
import Links from "./components/Links";
import './App.css';
import axios from "axios";
import styled from "styled-components";

const TopContainer = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchValue, updateSearch] = useState("");
  const [prevPage, updatePrevPage] = useState(null);
  const [nextPage, updateNextPage] = useState(null);
  const [currentPage, updateCurrentPage] = useState("https://swapi.co/api/people/");

  const colors = ["#4682B4", "#8B0000", "#00BFFF", "#800080", "#FF4500", "#2F4F4F", "#228B22", "#DAA520", "#A52A2A", "#FF1493"];

  const getCharacters = () => {
    axios.get(currentPage).then(response => {
      setPersons(response.data.results);
      updatePrevPage(response.data.previous);
      updateNextPage(response.data.next);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect(getCharacters, []);

  return (
    <TopContainer className="App">
      <SearchBar updateSearch={updateSearch}/>
      <Links getCharacters={getCharacters} updateCurrentPage={updateCurrentPage} prevPage={prevPage} nextPage={nextPage}/>
      {persons.map((person, index) => {
        if (person.name.includes(searchValue)) {
          return <CharacterCard person={person} color={colors[index]}/>
        }
      })}
    </TopContainer>
  );
}

export default App;
