import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="input-group mb-3">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" />
                <button className="btn btn-outline-secondary" type="submit" >Search</button>
            </form>
        </div>
    )
}

export default SearchArea;