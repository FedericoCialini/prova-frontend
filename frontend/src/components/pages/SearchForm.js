import React, {useState} from "react";
import {extractDate,extractTime} from "../../utils/selectFromDate";
import {useDispatch} from "react-redux";
import {addSearchedLoc, removeAllLocs} from "../../redux/reducers/search";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import {BsTrash2} from "react-icons/bs";
import Modal from "./Modal";
const SearchForm = () =>{
    const [searched,setSearched] = useState("");
    const [isModalOpen,setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = async (e) =>{
        e.preventDefault(true);
        try {
            setSearched("");
            const data = await fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${searched}`)
            const result = await data.json();
            const searchedArr = localStorage.getItem("searched-list");
            const date = new Date();
            const {city,village,country,postcode} = result[0].address;
            if(!city && ! village ){
                setIsModalOpen(true);
                return;
            }
            let newSearch = {village,city,country,date: extractDate(date),time : extractTime(date)}
            postcode && (newSearch.postcode = postcode)
            if(!searchedArr){
                localStorage.setItem("searched-list",JSON.stringify([newSearch]));
                sessionStorage.setItem("searched-list",JSON.stringify([newSearch]));
                dispatch(addSearchedLoc(newSearch));
            } else{
                const searchedLocations = JSON.parse(localStorage.getItem("searched-list"));
                searchedLocations.unshift(newSearch);
                dispatch(addSearchedLoc(newSearch));
                localStorage.setItem("searched-list",JSON.stringify(searchedLocations));
                sessionStorage.setItem("searched-list",JSON.stringify(searchedLocations));
            }
            console.log(JSON.parse(localStorage.getItem('searched-list')));
        }catch (e) {
            setIsModalOpen(true);

        }
    }

    const handleChange = (searchedText) =>{
        setSearched(searchedText);
    }

    const handleRemoveAll = () =>{
        localStorage.removeItem("searched-list")
        dispatch(removeAllLocs());
    }

    return <SearchFormStyle>
        {isModalOpen && <Modal log={true} closeModal={setIsModalOpen} text={"An Error Occurred"} message={"City not found"}/>}

        <div className={"search-container"}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type={"text"}
                       placeholder={"Search place"}
                       value={searched}
                       onChange={(e)=>handleChange(e.target.value)}
                />
                <button>
                    <FaSearch className={"search-icon"}
                              title={"Search"}/>
                </button>
            </form>

        </div>
        <button
            id={"remove-all-button"}
            type={"button"}
            onClick={handleRemoveAll}>
            <BsTrash2 id={"remove-all-icon"}
                      title={"Remove all"}/>
        </button>

    </SearchFormStyle>
}

const SearchFormStyle = styled.div`
  display: flex;
  justify-content: space-around;
  row-gap: 30px;
  margin-top: 100px;
  .search-container{
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    width:fit-content;
    justify-content: center;
    border: 1px solid black;
    border-radius: 15px;
    
    input{
      width: 200px;
      height: 40px;
      border-radius: 10px;
      border: transparent;

      background-color: transparent;
      color: black;
      font-size: 30px;
      text-align: center;
      &:focus{
        outline: transparent;
      }
      &::placeholder{
        color: dimgray;
      }
    }
    button {
      background: transparent;
      border: transparent;
      padding-bottom: 10px;
      cursor: pointer;

      .search-icon {
        width: 40px;
        height: 30px;
        &:hover{
          transition: 100ms;
          transform: scale(1.1);
        }
      }
    }
  }
  #remove-all-button{
    border: transparent;
    background-color: transparent;
    cursor: pointer;
    #remove-all-icon{
      font-size: 40px;
      &:hover{
        transition: 100ms;
        transform: scale(1.1);
        color: red;
      }
    }
  }

 
`

export default SearchForm