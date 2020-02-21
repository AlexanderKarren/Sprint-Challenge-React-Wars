import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color:#F5F5F5;
    border-radius:6px;
    width:400px;
    margin: 10px 0 10px 0;
`

const CardHeader = styled.div`
    background-color:#4682B4;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    width:100%;
    display:flex;
    justify-content:center;
`

const NameContainer = styled.div`
    border:2px solid white;
    border-radius:10px;
    color:white;
    font-family: 'Playfair Display', sans-serif;
    font-size:120%;
    width:50%;
    margin: 20px 10px;
    padding:20px 30px;
`

const InformationContainer = styled.div`
    width:100%;
    display:flex;
`

const InformationPanel = styled.div`
    width:50%;
    text-align:left;
    padding:10px;
    font-family: "Lora", sans-serif;
`

const Bold = styled.span`
    font-weight:bold;
`

const CharacterCard = (props) => {
    return (
        <Card>
            <CardHeader>
                <NameContainer>{props.person.name}</NameContainer>
            </CardHeader>
            <InformationContainer>
                <InformationPanel>
                    <div><Bold>Born:</Bold>&nbsp;{props.person.birth_year}</div>
                    <div><Bold>Gender:</Bold>&nbsp;{props.person.gender}</div>
                    <div><Bold>Height:</Bold>&nbsp;{props.person.height}</div>
                    <div><Bold>Mass:</Bold>&nbsp;{props.person.mass}</div>
                </InformationPanel>
                <InformationPanel>
                    <div><Bold>Hair Color:</Bold>&nbsp;{props.person.hair_color}</div>
                    <div><Bold>Skin Color:</Bold>&nbsp;{props.person.skin_color}</div>
                    <div><Bold>Eye Color:</Bold>&nbsp;{props.person.eye_color}</div>
                </InformationPanel>
            </InformationContainer>
        </Card>
    )
}

export default CharacterCard;