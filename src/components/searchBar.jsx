import { useState } from "react";
import { getRecipeByName } from "../api.js";

export default function Research({onSearchResult, setLoading, setErrorMessage}){
    const [text, setText] = useState("");

    const handleClick = async () => {
        if (!text.trim()){
            return;
        }
        setErrorMessage("");
        setLoading(true);
        try{
            const result = await getRecipeByName(text.trim());
            //return result;
            //on remonte le resultat dans App.jsx
            onSearchResult(result);
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="search-box">
            <SearchBar text={text} onChange={setText}/>
            <SubmitSearch onClick={handleClick}/>
        </div>
    );
}

function SearchBar({text, onChange}){
    const handleChange = (e) => {onChange(e.target.value)};
    return (
        <input type="text" id="searchInput" value={text} onChange={handleChange}/>
    );
};

function SubmitSearch({onClick}){
    return (
        <button id="searchBtn" onClick={onClick}>Search</button>
    );
}