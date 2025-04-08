export const deleteUser = async (idNumber) => {
    const res = await fetch(`http://localhost:3000/usuarios/${idNumber}`, {
        method: 'DELETE',
    });
    if(!res.ok) throw new Error('Internal Server Error');
    return res.ok;
};