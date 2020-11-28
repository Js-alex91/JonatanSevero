const typed = new Typed('.typed',{

    strings: [
        '<i class="LetrasEdit">Capacidad de aprendizaje,<br>Automotivación,Organización,<br>Sentido de la responsabilidad.</i>',
        '<i class="LetrasEdit">Iniciativa,Creatividad,<br>Gestión del estrés y Presión,<br>Capacidad de análisis</i>',
		'<i class="LetrasEdit">Seguridad y confianza,<br>Capacidad de trabajo en equipo,<br>Inteligencia emocional,<br>Concentración.</i>','<i class="LetrasEdit">Habilidades comunicativas,<br>Pensamiento critico,<br>Indagación y negociación,<br>Influenciar y mostrar liderazgo.</i>','<i class="LetrasEdit">Idiomas <br> Portugues <br> Ingles <br> Español Nativo</i>'

  
    ],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 55, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 10, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});


// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});




