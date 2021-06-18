import React from 'react'

import SearchArea from './styled'


const Search = (props) => {

    return (
        <div>
            <SearchArea 
                className="input"
                value={props.value} 
                onChange={e => props.onChangeText(e)}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Search
