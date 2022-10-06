export function getChores() {
  return fetch("chore/get", {
    method: "GET",
    headers: {
      "Content-Type": "applications/json",
    },
  })
    .then((resp) =>{
        if(resp.ok) return resp.json();
        throw new Error('could not find chores')
    })
}

export function deleteChore(id){
   return fetch(`chore/delete/${id}`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json",
    }
   }).then((resp) =>{
      if(resp.ok) return resp.json();
      throw new Error('could not delete')
   })
}

export function addToChore(chore){
  return fetch(`chore/add`,{
   method: "POST",
   body: JSON.stringify(chore),
   headers:{
     "Content-Type": "application/json",
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
   }
  }).then((resp) =>{
     if(resp.ok) return resp.json();
     throw new Error('could not toggle done')
  })
}


