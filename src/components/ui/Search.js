import React, { useState } from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }
    return (
        <div className="search">
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
        </div>
    )
}

export default Search