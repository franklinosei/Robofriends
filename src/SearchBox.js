import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
    return(
        <input 
        className='pa3 shadow-5 ma2 b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots' 
        onChange = {searchChange}
        /> 
    );
}

export default SearchBox;