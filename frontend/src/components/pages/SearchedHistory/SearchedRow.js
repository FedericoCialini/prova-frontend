import React from "react";
import {MdLocationCity} from "react-icons/md";
import {GiVillage} from "react-icons/gi";
import {BsClockHistory,BsMailbox} from "react-icons/bs";
import styled from "styled-components";

const SearchedRow = ({city,village,country,time,date,postcode}) =>{
    return <RowStyleWrapper className={"search-card"}>
        <header>
            <h2> {country} </h2>
        </header>
        <div className={"content-container"}>
            {city && <div className={"city-container"}>
                <MdLocationCity className={"city-icon icon"}/>
                <div>
                    <h3>{city}</h3>
                </div>
            </div>}
            {village && <div className={"city-container"}>
                <GiVillage className={"village-icon icon"}/>
                <div>
                    <h3>{village}</h3>
                </div>

            </div>}
            {postcode && <div className={"post-container"}>
                <BsMailbox className={"post-icon icon"}/>
                <div>
                    <h4>{postcode}</h4>
                </div>
            </div>}
            <div className={"date-container"}>
                <BsClockHistory className={"date-icon icon"}/>
                <div>
                    <h4> {date}</h4>
                    <h4> {time}</h4>
                </div>
            </div>
        </div>

    </RowStyleWrapper>
}

const RowStyleWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 500px;
  border-radius: 15px;
  margin-bottom: 50px;
  background-color: #323232;
  
  @media screen and (max-width: 790px){
    width: 300px;
  }
  @media screen and (min-width: 791px){
    width: 450px;
  }






  &:hover{
    transform: scale(1.1);
    transition: 200ms;
  }
  header{
    float: top;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #464646;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    h2{
      font-size: 30px;
      font-family: "DejaVu Sans",sans-serif;
      letter-spacing: 1px;
      color: white;
      font-weight: bolder;
      text-transform: uppercase;
    }
  }
  .content-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    
    div{
      position: relative;
      margin-left: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      
      .icon{
        color: white;
        font-size: 40px;
        font-weight: bolder;
      }
      div{
        display: flex;
        flex-direction: row;
        column-gap: 10px;
      }
      h3,h4{
        max-width: 25ch;
        color: white;
        &::selection{
          background-color: #f3f3f3;
          color: black;
        }
      }
      h3{
        font-size: 25px;
      }
      h4{
        font-size: 20px;
      }
    
    }
  }
 
  
`

export default SearchedRow;