import tokenServices from '../../src/Utils/tokenServices'


export function getChores(id) {
  console.log(id)
  if(id){
    return fetch(`chore/get/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
        'Authorization' : 'Bearer ' + tokenServices.getToken()
      },
    })
      .then((resp) =>{
          if(resp.ok) return resp.json();
          throw new Error('could not find chores')
      })
  }else{
    return []
  }
}

export function deleteChore(id){
   return fetch(`chore/delete/${id}`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json",
      'Authorization' : 'Bearer ' + tokenServices.getToken()
    }
   }).then((resp) =>{
      if(resp.ok) return resp.json();
      throw new Error('could not delete')
   })
}

export function addToChore(chore, user){
  console.log(chore,user)
  return fetch(`chore/add/${user.id}`,{
   method: "POST",
   body: JSON.stringify(chore),
   headers:{
     "Content-Type": "application/json",
     'Authorization' : 'Bearer ' + tokenServices.getToken()
   }
  }).then((resp) =>{
     if(resp.ok) return resp.json();
     throw new Error('could not add')
  })
}

export function updateChore(chore,id){
  return fetch(`chore/update/${id}`,{
   method: "PUT",
   body: JSON.stringify(chore),
   headers:{
     "Content-Type": "application/json",
     'Authorization' : 'Bearer ' + tokenServices.getToken()
   }
  }).then((resp) =>{
     if(resp.ok) return resp.json();
     throw new Error('could not update chore')
  })
}

export function updateToggleDone(id){
  return fetch(`chore/updatedone/${id}`,{
   method: "PUT",
   body: JSON.stringify({}),
   headers:{
     "Content-Type": "application/json",
     'Authorization' : 'Bearer ' + tokenServices.getToken()
   }
  }).then((resp) =>{
     if(resp.ok) return resp.json();
     throw new Error('could not toggle done')
  })
}


