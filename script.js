const invitados = [
    { dni: "12345678", nombre: "Juan Pérez", observacion: "Graduando" },
    { dni: "87654321", nombre: "María López", observacion: "Profesor" },
    { dni: "11223344", nombre: "Carlos Sánchez", observacion: "Invitado de graduando" }
];

// Cargar invitados verificados desde el localStorage
let invitadosVerificados = JSON.parse(localStorage.getItem('invitadosVerificados')) || {};

document.getElementById('verificar').addEventListener('click', function() {
    const dni = document.getElementById('dni').value;
    const invitado = invitados.find(persona => persona.dni === dni);

    if (invitado) {
        if (!invitadosVerificados[dni]) {
            document.querySelector('input[placeholder="Nombre"]').value = invitado.nombre;
            document.querySelector('input[placeholder="Observación"]').value = invitado.observacion;
            
            // Marcar como verificado y guardar en el localStorage
            invitadosVerificados[dni] = true;
            localStorage.setItem('invitadosVerificados', JSON.stringify(invitadosVerificados));
        } else {
            alert("Esta persona ya ha sido verificada.");
        }
    } else {
        alert("Ésta persona no está en la lista de invitados.");
    }
});

// Habilitar la tecla "Enter" para verificar
document.getElementById('dni').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita que se envíe el formulario
        document.getElementById('verificar').click();
    }
});

// Función para reiniciar el sistema y borrar el localStorage
function reiniciarSistema() {
    localStorage.removeItem('invitadosVerificados');
    invitadosVerificados = {};
    alert("Sistema reiniciado. Las cédulas verificadas han sido borrados.");
}

// Ejemplo de cómo puedes llamar a la función de reinicio:
// reiniciarSistema();  // Descomenta esta línea para reiniciar el sistema manualmente.
