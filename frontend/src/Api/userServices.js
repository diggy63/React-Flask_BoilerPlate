import tokenServices from '../../src/Utils/tokenServices'

export function getUser(){
    const opts = {
        headers: {
            'Authorization' : 'Bearer ' + tokenServices.getToken()
        }
    }
    return fetch("user/get", opts)
        .then((resp) =>{
            if(resp.ok) return resp.json();
            throw new Error('could not find user')
        })
}