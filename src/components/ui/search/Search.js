import React, { useState } from 'react'
import { SearchsContent } from './search.styles'
const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }
    return (
        <SearchsContent>
            <form>
                <input
                    type="text"
                    className="from-control"
                    placeholder="Search User github"
                    value={text}
                    onChange={(e)=>onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </SearchsContent>
    )
}

export default Search