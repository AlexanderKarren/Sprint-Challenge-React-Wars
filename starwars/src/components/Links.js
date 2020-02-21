import React from "react";
import styled from "styled-components";

const TopContainer = styled.div`
    display:flex;
`

const Button = styled.button`
    padding:5px;
    border:2px solid white;
    border-radius:2px;
    background-color:#4682B4;
    color:white;
    margin: 0 30px 0 30px;
    font-family:inherit;
    outline:none;
`

const Links = (props) => {
    const prevPage = (event) => {
        props.updateCurrentPage(props.prevPage);
        props.getCharacters();
    }

    const nextPage = (event) => {
        props.updateCurrentPage(props.nextPage);
        props.getCharacters();
    }

    return (
        <TopContainer>
            <Button onClick={prevPage}>Previous Page</Button>
            <Button onClick={nextPage}>Next Page</Button>
        </TopContainer>
    )
}

export default Links;