import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <form>
            <div className="form-control">
                <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
            </div>
        </form>
    )
}

export default Search;