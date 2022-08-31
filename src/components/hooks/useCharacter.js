import React, { useEffect, useState } from "react";

const useCharacter = (url) => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        async function fetchCharacter() {
            const response = await fetch(url)
            const characters = await response.json()
            setCharacters(characters.results)
        }

        fetchCharacter();
    }, [url])
    return characters;
}

export default useCharacter;