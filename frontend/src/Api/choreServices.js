export function getChores() {
  return fetch("/get", {
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
   return fetch(`/delete/${id}`,{
    method: "DELETE",
    headers:{
      "Content-Type": "applications/json",
    }
   }).then((resp) =>{
      if(resp.ok) return resp.json();
      throw new Error('could not delete')
   })
}
