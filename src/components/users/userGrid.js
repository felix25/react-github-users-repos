import React from 'react'
import UserItem from './userItems'
import Spinner from '../ui/Spinner'
import { CardsContent } from './user.styles'
const userGrid = ({items, isLoading}) => {
    return isLoading ? <Spinner/> :
    (
        <CardsContent>{items.length > 0 ? items.map(item=>(
                <UserItem key={item.id} item={item}></UserItem>
            )): <h2>no resul</h2>}</CardsContent>
    )
}

export default userGrid
