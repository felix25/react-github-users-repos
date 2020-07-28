import React from 'react'
import { CardsContentIn } from './user.styles'
const userItems = ({item}) => {
    return (
        <CardsContentIn>
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.avatar_url} alt=''/>
                </div>
                <div className="card-back">
                    <h1>{item.login}</h1>
                    <a href={`user/${item.login}`}>view profile</a>
                </div>
            </div>
        </CardsContentIn>
    )
}

export default userItems
