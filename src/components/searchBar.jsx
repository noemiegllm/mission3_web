import { useState } from "react";
import { getRecipeByName } from "../api.js";

export default function Research({onSearchResult, setLoading, loading, setErrorMessage}){
    const [text, setText] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        onSearchResult([]);
        if (!text.trim()){
            setErrorMessage("Please, enter a term in the search bar");
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
        <form className="search-box" onSubmit={handleClick}>
            <SearchBar text={text} onChange={setText}/>
            <SubmitSearch loading={loading}/>
        </form>
    );
}

function SearchBar({text, onChange}){
    const handleChange = (e) => {onChange(e.target.value)};
    return (
        <input type="text" id="searchInput" value={text} onChange={handleChange}/>
    );
};

function SubmitSearch({onClick, loading}){
    return (
        <button id="searchBtn" onClick={onClick} disabled={loading}>Search</button>
    );
}