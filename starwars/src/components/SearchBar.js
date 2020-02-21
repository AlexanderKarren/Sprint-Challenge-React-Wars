import React from "react";
import styled from "styled-components";

const TopContainer = styled.div`
    margin:30px 0 20px 0;
    width:100%;
    display:flex;
    justify-content:center;
`

const SearchForm = styled.form`
    width:40%;
    outline:none;
    border:1px solid lightgray;
    border-radius:5px;
    background-color:rgb(211,211,211, 0.3);
    padding:10px;
    display:flex;
`

const Icon = styled.div`
    color:white;
    display:flex;
    align-items:center;
    margin-right:5px;
`

const SearchInput = styled.input`
    width:100%;
    outline:none;
    background-color:rgb(211,211,211, 0);
    font-size:120%;
    border:0;
    color:white;
`

const SearchBar = (props) => {

    const handleChange = (event) => {
        props.updateSearch(event.target.value);
    }

    return (
        <TopContainer>
            <SearchForm>
                <Icon><i class="fas fa-search"></i></Icon>
                <SearchInput type="text" onChange={handleChange}></SearchInput>
            </SearchForm>
        </TopContainer>
    )
}

export default SearchBar;