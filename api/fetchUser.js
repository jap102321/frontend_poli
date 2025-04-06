export const getUsers = async () => {
    const res = await fetch("http://localhost:3000/usuarios")
    if(!res.ok) throw new Error('Internal Server Error');

    return res.json();
}

export const getUserById = async (idNumber)=> {
    const res = await fetch(`http://localhost:3000/usuarios/${idNumber}`)
    if(!res.ok) throw new Error('Internal Server Error');

    return res.json();
}