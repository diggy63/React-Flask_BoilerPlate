// export function getChores() {
//     return fetch("chore/get", {
//       method: "GET",
//       headers: {
//         "Content-Type": "applications/json",
//       },
//     })
//       .then((resp) =>{
//           if(resp.ok) return resp.json();
//           throw new Error('could not find chores')
//       })
//   }

export function signup(info) {
  console.log(info);
  return fetch(`auth/signup`, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => {
    if (resp.ok) return resp.json();
    throw new Error("could sign up");
  });
}

export function login(info) {
  return fetch(`auth/login`, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => {
    if (resp.ok) return resp.json();
    throw new Error("could not login");
  });
}

//   export function updateChore(chore,id){
//     return fetch(`chore/update/${id}`,{
//      method: "PUT",
//      body: JSON.stringify(chore),
//      headers:{
//        "Content-Type": "application/json",
//      }
//     }).then((resp) =>{
//        if(resp.ok) return resp.json();
//        throw new Error('could not update chore')
//     })
//   }

//   export function updateToggleDone(id){
//     return fetch(`chore/updatedone/${id}`,{
//      method: "PUT",
//      body: JSON.stringify({}),
//      headers:{
//        "Content-Type": "application/json",
//      }
//     }).then((resp) =>{
//        if(resp.ok) return resp.json();
//        throw new Error('could not toggle done')
//     })
//   }
