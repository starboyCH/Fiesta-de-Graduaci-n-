const invitados = [
	{ dni: "", nombre: "", observacion: "" },
	
	{ dni: "4546912", nombre: "Orlando Romero", observacion: "Invitado de Sebastián Romero" },
	{ dni: "9642175", nombre: "Adriana Morales", observacion: "Invitada de Mariangel Heredia" },
	{ dni: "9646219", nombre: "Carlos Heredia", observacion: "Invitado de Mariangel Heredia" },
	{ dni: "9649299", nombre: "Claudia González", observacion: "Invitada de Edwin Palencia" },
	{ dni: "9694376", nombre: "Noelia Domínguez", observacion: "Invitada de María José Rojas" },
	{ dni: "10979679", nombre: "Martin Zamora", observacion: "Invitado de Sebastián Romero" },
	{ dni: "11556244", nombre: "Jacqueline de Espinoza", observacion: "Invitada de Rebeca Espinoza" },
	{ dni: "11920907", nombre: "Roberto Gomez", observacion: "Invitado de Julio Segovia" },
	{ dni: "12137088", nombre: "Martha Ferrer", observacion: "Invitada de Angelica Theran" },
	{ dni: "12139360", nombre: "Luz Utrera", observacion: "Invitada de Sebastián Romero" },
	{ dni: "12170694", nombre: "Lizeth Theran", observacion: "Invitada de Angelica Theran" },
	{ dni: "12570847", nombre: "Leyda Linares", observacion: "Invitada de Arianny Gallardo" },
	{ dni: "13345066", nombre: "Pedro Gallardo", observacion: "Invitado de Arianny Gallardo" },
	{ dni: "14183130", nombre: "Yatsiby Prieto", observacion: "Invitada de Valeria Díaz" },
	{ dni: "14322526", nombre: "Josué Rodríguez", observacion: "Invitado de Andrea Rodríguez" },
	{ dni: "14664467", nombre: "Heidi Caro", observacion: "Invitada de Edwin Palencia" },
	{ dni: "14730181", nombre: "Yilli Yanes", observacion: "Invitada de Samuel Duque" },
	{ dni: "15077863", nombre: "Marcos Rojas", observacion: "Invitado de María José Rojas" },
	{ dni: "16338092", nombre: "Yeisy Montoya", observacion: "Invitada de Johendy Guedez" },
	{ dni: "17016233", nombre: "Andy Guedez", observacion: "Invitado de Johendy Guedez" },
	{ dni: "18022971", nombre: "Hayaris Pérez", observacion: "Invitada de Andrea Rodríguez" },
	{ dni: "18177763", nombre: "Margaret Gallardo", observacion: "Invitada de Arianny Gallardo" },
	{ dni: "18779108", nombre: "Yulimar Bermudez", observacion: "Invitada de Julio Segovia" },
	{ dni: "24344339", nombre: "Sarai Romero", observacion: "Invitada de Sebastián Romero" },
	{ dni: "29808230", nombre: "Valentina Siso", observacion: "Invitada Samuel Duque" },
	{ dni: "30498912", nombre: "Isaac González", observacion: "Invitado de Alejandra Rafe" },
	{ dni: "30772264", nombre: "Johandy Guedez", observacion: "Invitado de Johendy Guedez" },
	{ dni: "31283865", nombre: "Abigail González", observacion: "Invitada de Alejandra Rafe" },
    { dni: "31338930", nombre: "Cynthia Prieto", observacion: "Invitada de Valeria Díaz" },
    { dni: "31696177", nombre: "Carlos Heredia", observacion: "Invitado de Mariangel Heredia" },
    { dni: "31722041", nombre: "Alondra Tamayo", observacion: "Invitada de Alejandra Rafe" },
    { dni: "31842513", nombre: "Angélica Theran", observacion: "Graduando" },
    { dni: "31924788", nombre: "Valeria Díaz", observacion: "Graduando" },
    { dni: "31984234", nombre: "Samuel Duque", observacion: "Graduando" },
    { dni: "32925036", nombre: "Sebastian Romero", observacion: "Graduando" },
    { dni: "32139434", nombre: "Rebeca Espinoza", observacion: "Graduando" },
    { dni: "32377881", nombre: "Julio Segovia", observacion: "Graduando" },
    { dni: "32396086", nombre: "Arianny Gallardo", observacion: "Graduando" },
    { dni: "32436457", nombre: "Andrea Rodríguez", observacion: "Graduando" },
    { dni: "32496728", nombre: "María José Rojas", observacion: "Graduando" },
    { dni: "32544600", nombre: "Johendy Guedez", observacion: "Graduando" },
    { dni: "32597362", nombre: "Alejandra Rafe", observacion: "Graduando" },
    { dni: "32657796", nombre: "Ashly Pacheco", observacion: "Invitada de Johendy Guedez" },
    { dni: "32680301", nombre: "Edwin Palencia", observacion: "Graduando" },
    { dni: "32751816", nombre: "María Gabriela Rojas", observacion: "Invitada de María José Rojas" },
    { dni: "34578358", nombre: "Elisabet Espinoza", observacion: "Graduando" },
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
