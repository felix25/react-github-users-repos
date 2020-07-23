import React from 'react'
import UserItem from './userItems'
import Spinner from '../ui/Spinner'
const userGrid = ({items, isLoading}) => {
    return isLoading ? <Spinner/> :
    (
        <section className={`cards ${items.length === 0 ? 'not-cards' : ''}`}>{items.length > 0 ? items.map(item=>(
                <UserItem key={item.id} item={item}></UserItem>
            )): <h2>no resul</h2>}</section>
    )
}

export default userGrid
