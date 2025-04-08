export const updateUser = async (idNumber, userData) => {
    const res = await fetch(`http://localhost:3000/usuarios/${idNumber}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if(!res.ok) throw new Error('Internal Server Error');
    return res.json();
};