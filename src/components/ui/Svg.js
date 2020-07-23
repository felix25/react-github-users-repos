import React from 'react'

const Svg = ({item}) => {
    return (
        <svg 
            stroke="currentColor" 
            fill="currentColor" 
            strokeWidth="0" 
            viewBox="0 0 14 16" 
            className="repo-info-icon" 
            height="1.2em" 
            width="1.2em" 
            xmlns="http://www.w3.org/2000/svg">
                <path 
                    fillRule="evenodd" 
                    d={item}>
                </path>
        </svg>
    )
}


export default Svg
