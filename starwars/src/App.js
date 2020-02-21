import React, { useState, useEffect } from 'react';
import CharacterCard from "./components/CharacterCard";
import './App.css';
import axios from "axios";
import styled from "styled-components";
import SearchBar from './components/SearchBar';

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

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(response => {
      setPersons(response.data.results);
      console.log(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <TopContainer className="App">
      <SearchBar updateSearch={updateSearch}/>
      {persons.map(person => {
        if (person.name.includes(searchValue)) {
          return <CharacterCard person={person}/>
        }
      })}
    </TopContainer>
  );
}

export default App;
