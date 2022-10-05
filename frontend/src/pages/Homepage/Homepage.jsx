import react from 'react'

import Chore from '../../Componenet/Chore/Chore'

export default function Homepage({chores, handleChoreDelete}){
    const choreShow = chores.map((item,i) =>{
        return(
            <Chore key={i} item={item} handleChoreDelete={handleChoreDelete}/>
        )
    })
    return(
        <>
        <h1>Homepage</h1>
        {choreShow}
        </>
    )
}