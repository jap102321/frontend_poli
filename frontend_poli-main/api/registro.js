document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, verifica.");
        return;
    }

    // Simula el registro (puedes reemplazar esto con una llamada a una API)
    alert(`Registro exitoso para: ${nombre} (${email})`);
    document.getElementById("registroForm").reset(); // Limpia el formulario
});