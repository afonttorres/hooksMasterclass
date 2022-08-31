import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import useCharacter from "./hooks/useCharacter";
import Search from "./Search";

const initialState = {
    favorites: []
}

const API = "https://rickandmortyapi.com/api/character";

//reducer
const favoriteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

const Characters = () => {

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);
    const characters = useCharacter(API);

    //reducer
    const handleClick = (favorite) => {
        dispatch({ type: "ADD_TO_FAVORITE", payload: favorite })
    }

    // useRef/useMemo
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     setSearch(searchInput.current.value)
    // }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])

    // reducer output
    const filterUser = useMemo(() => {
        if (search.length < 4) return;
        return characters.filter(user => { return user.name.toLowerCase().includes(search.toLocaleLowerCase()) })
    }, [characters, search])


    return (
        <div>
            {favorites.favorites && favorites.favorites.map(f => (<li key={f.id}><ul>{f.name}</ul></li>))}

            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

            {filterUser && filterUser.map((c) => {
                return (
                    <div key={c.id}>
                        <div >{c.name}</div>
                        <button type="button" onClick={() => handleClick(c)}>Agregar a favoritos</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Characters;