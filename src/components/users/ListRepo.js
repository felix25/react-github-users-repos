import React from 'react'
import Svg from '../ui/Svg'
const ListRepo = ({item}) => {
    return (
        <li>
            <div className="git-list">
                <h1><a href={item.html_url} target='_blank' rel="noopener noreferrer" >{item.name}</a></h1>
                <p>{item.description}</p>
                <div className="icon">
                    {
                        item.language && (
                            <div>
                                <span><Svg item="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></span>
                                <span>{item.language}</span>
                            </div>
                        )
                    }
                    {
                        item.stargazers_count > 0 && (
                            <div>
                                <span><Svg item="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></span>
                                <span>{item.stargazers_count}</span>
                            </div>

                        )
                    }
                    {
                        item.forks > 0 && (
                            <div>
                                <span>
                                    <Svg 
                                        item="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                                    />
                                </span>
                                <span>{item.forks}</span>
                            </div>

                        )
                    }
                </div>
            </div>
        </li>
    )
}

export default ListRepo
