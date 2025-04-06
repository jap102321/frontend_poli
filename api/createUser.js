

export const createUser = async ( userData )=> {
    const res = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        body: JSON.stringify(userData),
    })

    if(!res.ok) throw new Error('Bad Request Error')

    return res.json();
}