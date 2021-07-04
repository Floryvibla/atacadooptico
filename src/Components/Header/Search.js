import React from 'react'
import styled from 'styled-components'
import img from './images/search.png'

const SearchArea= styled.input`
    background-image: url(${img});
    opacity: 0.5;
    background-position: 98%;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    /* background-color: #00000023; */
    border: 2px solid #00000023;
    height: 50px;
    width: 100%;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 40px;
    font-size: 20px;

    &::placeholder{
        color: #00000090;
        font-style: italic;
    }
    &:focus::placeholder{
        color: #00000090;
        font-style: italic;
        opacity: 0.8;
    }

    &:focus{
        outline: none;
        border: 2px solid #00000023;
        opacity: 1;
    }
`

const Search = (props) => {

    return (
        <SearchArea 
            className="input"
            // value={props.value} 
            // onChange={e => props.onChangeText(e)}
            placeholder={props.placeholder ?? "O que está procurando hoje?"}
        />
    )
}

export default Search
