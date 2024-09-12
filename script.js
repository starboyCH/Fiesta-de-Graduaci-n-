const invitados = [
	{ dni: "", nombre: "", observacion: "" },
	
	{ dni: "4546912", nombre: "Orlando Romero", observacion: "Invitado de Sebastián Romero" },
	{ dni: "9642175", nombre: "Adriana Morales", observacion: "Invitada de Mariangel Heredia" },
	{ dni: "9646219", nombre: "Carlos Heredia", observacion: "Invitado de Mariangel Heredia" },
	{ dni: "9649299", nombre: "Claudia González", observacion: "Invitada de Edwin Palencia" },
	{ dni: "9655823", nombre: "Eddar Morales", observacion: "Invitado de Profesora Yajaira" },
	{ dni: "9668189", nombre: "Glenda Guevara", observacion: "Profesora invitada" },
	{ dni: "9694376", nombre: "Noelia Domínguez", observacion: "Invitada de María José Rojas" },
	{ dni: "9684122", nombre: "Giovanni Ferrer", observacion: "Invitado de Jesús Ferrer" },
	{ dni: "10979679", nombre: "Martin Zamora", observacion: "Invitado de Sebastián Romero" },
	{ dni: "12121556", nombre: "Yohanna Galindez", observacion: "Invitada de Jesús Ferrer" },
	{ dni: "12336333", nombre: "Sandy Martínez", observacion: "Invitada de Giselle Córdova" },
	{ dni: "11920907", nombre: "Roberto Gomez", observacion: "Invitado de Julio Segovia" },
	{ dni: "11982602", nombre: "Yajaira Fernández", observacion: "Madrina de Promoción" },
	{ dni: "12137088", nombre: "Martha Ferrer", observacion: "Invitada de Angelica Theran" },
	{ dni: "12139360", nombre: "Luz Utrera", observacion: "Invitada de Sebastián Romero" },
	{ dni: "12170694", nombre: "Lizeth Theran", observacion: "Invitada de Angelica Theran" },
	{ dni: "12570847", nombre: "Leyda Linares", observacion: "Invitada de Arianny Gallardo" },
	{ dni: "13345066", nombre: "Pedro Gallardo", observacion: "Invitado de Arianny Gallardo" },
	{ dni: "13518236", nombre: "Jesús Véliz", observacion: "Padrino de Promoción" },
	{ dni: "13625157", nombre: "Marcel Figuera", observacion: "Madrina de Promoción" },
	{ dni: "14183130", nombre: "Yatsiby Prieto", observacion: "Invitada de Valeria Díaz" },
	{ dni: "14322526", nombre: "Josué Rodríguez", observacion: "Invitado de Andrea Rodríguez" },
	{ dni: "14532503", nombre: "Angel Córdova", observacion: "Invitado de Giselle Córdova" },
	{ dni: "14578777", nombre: "Lisbeth Rodríguez", observacion: "Invitada de Fabián Nieves" },
	{ dni: "14664467", nombre: "Heidi Caro", observacion: "Invitada de Edwin Palencia" },
	{ dni: "14730181", nombre: "Yilli Yanes", observacion: "Invitada de Samuel Duque" },
	{ dni: "14730594", nombre: "Hector Hernández", observacion: "Invitado de la Profesora Marcel" },
	{ dni: "14787931", nombre: "Felix Gamarra", observacion: "Invitado de José Gamarra" },
	{ dni: "15077514", nombre: "Harry García", observacion: "Invitado de la Profesora Alina" },
	{ dni: "15818673", nombre: "Eliany Palma", observacion: "Invitada de Johendy Guedez" },
	{ dni: "16338092", nombre: "Yeisy Montoya", observacion: "Invitada de Johendy Guedez" },
	{ dni: "17016233", nombre: "Andy Guedez", observacion: "Invitado de Johendy Guedez" },
	{ dni: "17274757", nombre: "Alina Ubán", observacion: "Madrina de Promoción" },
	{ dni: "17367812", nombre: "Vanesa Marin", observacion: "Invitada de Frank Contreras" },
	{ dni: "17703450", nombre: "Andreina Barroeta", observacion: "Invitada de José Gamarra" },
	{ dni: "18022971", nombre: "Hayaris Pérez", observacion: "Invitada de Andrea Rodríguez" },
	{ dni: "18177763", nombre: "Margaret Gallardo", observacion: "Invitada de Arianny Gallardo" },
	{ dni: "18779108", nombre: "Yulimar Bermudez", observacion: "Invitada de Julio Segovia" },
	{ dni: "20450636", nombre: "Luisana Contreras", observacion: "Invitada de Rebeca Espinoza" },
	{ dni: "23798439", nombre: "Charles Mourre", observacion: "Invitado de Camila Jiménez" },
	{ dni: "24344339", nombre: "Sarai Romero", observacion: "Invitada de Yuliana Sulvaran" },
	{ dni: "27611349", nombre: "Maria Briceño", observacion: "Invitada de Camila Jiménez" },
	{ dni: "28025475", nombre: "Edgar Silva", observacion: "Invitado de Fabián Nieves" },
	{ dni: "28267626", nombre: "Bárbara Rodríguez", observacion: "Invitada de Fabián Nieves" },
	{ dni: "29808230", nombre: "Valentina Siso", observacion: "Invitada Samuel Duque" },
	{ dni: "29924346", nombre: "David Siena", observacion: "Invitado de Sarahy Bolívar" },
	{ dni: "30555645", nombre: "José Guevara", observacion: "Invitado de David Mendoza" },
	{ dni: "30772264", nombre: "Johandy Guedez", observacion: "Invitado de Johendy Guedez" },
	{ dni: "31106891", nombre: "Yorves España", observacion: "Invitada de Jarbinson Mendoza" },
	{ dni: "31128203", nombre: "Roxelis Iriarte", observacion: "Invitada de Williamnys Iriarte" },
	{ dni: "31338930", nombre: "Cynthia Prieto", observacion: "Invitada de Valeria Díaz" },
    { dni: "31158455", nombre: "Génesis Bolívar", observacion: "Invitada de Sarahy Bolívar" },
    { dni: "31696177", nombre: "Carlos Heredia", observacion: "Invitado de Orlando Nieto" },
    { dni: "31721970", nombre: "Diana Rangel", observacion: "Invitada de Johendy Guedez" },
    { dni: "31842513", nombre: "Angélica Theran", observacion: "Graduando" },
    { dni: "31855938", nombre: "Jarbinson Mendoza", observacion: "Graduando" },
    { dni: "31863060", nombre: "David Mendoza", observacion: "Graduando" },
    { dni: "31924788", nombre: "Valeria Díaz", observacion: "Graduando" },
    { dni: "31925036", nombre: "Sebastian Romero", observacion: "Graduando" },
    { dni: "31931661", nombre: "Jhonathan Colorado", observacion: "Invitado de David Mendoza" },
    { dni: "31951277", nombre: "Jesús Ferrer", observacion: "Graduando" },
    { dni: "31984234", nombre: "Samuel Duque", observacion: "Graduando" },
    { dni: "32056422", nombre: "Frank Contreras", observacion: "Graduando" },
    { dni: "32112646", nombre: "Juan González", observacion: "Invitado de Fabián Nieves" },
    { dni: "32139434", nombre: "Rebeca Espinoza", observacion: "Graduando" },
    { dni: "32142039", nombre: "Giselle Córdova", observacion: "Graduando" },
    { dni: "32251979", nombre: "Leonel Heras", observacion: "Graduando" },
    { dni: "32290707", nombre: "José Gamarra", observacion: "Graduando" },
    { dni: "32302566", nombre: "Valeria Castillo", observacion: "Graduando" },
    { dni: "32313230", nombre: "Kevin Linares", observacion: "Invitado de Arianna Montilla" },
    { dni: "32340273", nombre: "Leonardo Deuscht", observacion: "Invitado de Maria José Rojas" },
    { dni: "32340310", nombre: "Mariana Freites", observacion: "Graduando" },
    { dni: "32377881", nombre: "Julio Segovia", observacion: "Graduando" },
    { dni: "32396086", nombre: "Arianny Gallardo", observacion: "Graduando" },
    { dni: "32396223", nombre: "Daniela Rodríguez", observacion: "Invitada de José Gamarra" },
    { dni: "32435486", nombre: "Yubeily Roa", observacion: "Invitada de Orlando Nieto" },
    { dni: "32436457", nombre: "Andrea Rodríguez", observacion: "Graduando" },
    { dni: "32496477", nombre: "Hilary López", observacion: "Invitada de Leonel Heras" },
    { dni: "32496503", nombre: "Samuel Cordero", observacion: "Invitado de Williamnys Iriarte" },
    { dni: "32496728", nombre: "María José Rojas", observacion: "Graduando" },
    { dni: "32544600", nombre: "Johendy Guedez", observacion: "Graduando" },
    { dni: "32545025", nombre: "Sol Chacua", observacion: "Graduando" },
    { dni: "32545061", nombre: "Arleidis Ostos", observacion: "Graduando" },
    { dni: "32589251", nombre: "Orlando Nieto", observacion: "Graduando" },
    { dni: "32603084", nombre: "Mariangel Heredia", observacion: "Graduando" },
    { dni: "32606950", nombre: "Fabián Nieves", observacion: "Graduando" },
    { dni: "32657796", nombre: "Ashly Pacheco", observacion: "Invitada de Johendy Guedez" },
    { dni: "32680301", nombre: "Edwin Palencia", observacion: "Graduando" },
    { dni: "32680522", nombre: "Sarahy Bolívar", observacion: "Graduando" },
    { dni: "32724135", nombre: "Arianna Montilla", observacion: "Graduando" },
    { dni: "32751816", nombre: "María Gabriela Rojas", observacion: "Invitada de María José Rojas" },
    { dni: "33054647", nombre: "Camila Jiménez", observacion: "Graduando" },
    { dni: "33182701", nombre: "Ivanna Freites", observacion: "Invitada de Mariana Freites" },
    { dni: "33269260", nombre: "Williamnys Iriarte", observacion: "Graduando" },
    { dni: "33337495", nombre: "Kristiangel Gónzalez", observacion: "Invitada de Leonel Heras" },
    { dni: "33863042", nombre: "Ramses Rosales", observacion: "Invitado de Mariana Freites" },
    { dni: "34578358", nombre: "Elisabet Espinoza", observacion: "Graduando" },
    
];

let invitadosVerificados = JSON.parse(localStorage.getItem('invitadosVerificados')) || {};

// Muestra el número de invitados verificados en la consola
function mostrarInvitadosVerificados() {
    console.log(`Número de invitados verificados: ${Object.keys(invitadosVerificados).length}`);
}

document.getElementById('verificar').addEventListener('click', function() {
    const dni = document.getElementById('dni').value;
    const invitado = invitados.find(persona => persona.dni === dni);

    if (invitado) {
        if (!invitadosVerificados[dni]) {
            document.querySelector('input[placeholder="Nombre"]').value = invitado.nombre;
            document.querySelector('input[placeholder="Observación"]').value = invitado.observacion;

            invitadosVerificados[dni] = true;
            localStorage.setItem('invitadosVerificados', JSON.stringify(invitadosVerificados));
        } else {
            alert("Esta persona ya ha sido verificada.");
        }
    } else {
        alert("Ésta persona no está en la lista de invitados.");
    }
});

document.getElementById('dni').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('verificar').click();
    }
});

// Reiniciar el sistema
function reiniciarSistema() {
    localStorage.removeItem('invitadosVerificados');
    invitadosVerificados = {};
    alert("Sistema reiniciado. Las cédulas verificadas han sido borradas.");
}
