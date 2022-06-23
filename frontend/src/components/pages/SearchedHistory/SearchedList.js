import React from "react";
import SearchedRow from "./SearchedRow";
import {useSelector} from "react-redux";
import styled from "styled-components";

const SearchedList = () =>{
    const {searchedList} = useSelector(state=>state.search)
    return <ListStyleWrapper className={"row-list"}>
        {searchedList.length>0 || <h2> Nessuna ricerca effettuata </h2>}
        {searchedList.length>0 && searchedList.map(
            (obj,idx,arr) =>{
                console.log(idx)
                return <SearchedRow className={"row"} key={idx} {...obj}/>
            }
        )}
    </ListStyleWrapper>
}

const ListStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  h2{
    text-align: center;
    font-size: 50px;
    font-weight: bolder;
    font-family: "DejaVu Sans Condensed",sans-serif;
  }
 
`

export default SearchedList;