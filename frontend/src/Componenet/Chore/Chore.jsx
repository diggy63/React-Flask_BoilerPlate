import React from 'react'

export default function Chore({item, handleChoreDelete}){
    function handleDelete(id){
        handleChoreDelete(id)
    }
    return(
        <>
        <h2>{item.chore}{item.id}</h2>
        <button onClick={() => handleDelete(item.id)}>X</button>
        </>
    )
}