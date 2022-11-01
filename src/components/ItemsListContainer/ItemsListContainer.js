import React from 'react'
import './ItemsListContainer.css'

const ItemsListContainer = (props) => {
    console.log(props);
    return (
        <div className='message-greetings-container'>
            <h2 className='title-message'>{props.name}</h2>
        </div>
    )
}

export default ItemsListContainer