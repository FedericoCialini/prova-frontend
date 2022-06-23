import React from "react";
import SearchForm from "../components/pages/SearchForm";
import SearchedList from "../components/pages/SearchedHistory/SearchedList";
import styled from "styled-components";
import sfondo from "../media/sfondo2.jpg";

const Search = () =>{
    return <SearchStyleWrapper background={sfondo}>
        <SearchForm/>
        <div>
            <SearchedList id={"search-list"}/>

        </div>

    </SearchStyleWrapper>
}

const SearchStyleWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  column-gap: 50px;
  background: -webkit-linear-gradient(to right, #eef2f3 , #8e9eab);  
  background: linear-gradient(to right, #eef2f3 , #8e9eab); 
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`

export default Search;