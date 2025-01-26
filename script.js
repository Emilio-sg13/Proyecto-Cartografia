// Reemplazar jQuery con JavaScript puro

// Selección del botón
const toggleButton = document.querySelector('.js-toggle');

// Evento de clic para el toggle
toggleButton.addEventListener('click', function() {
    const mapBase = document.querySelector('.map-base');
    mapBase.classList.toggle('active');
});

// Inicialización de reconocimiento de voz
const artyom = new Artyom();

// Comandos para el reconocimiento de voz
var commands = [
    {
        indexes: ["up to no good"],  // Cambio de la frase para que coincida con tu comando
        action: function() {
            document.querySelector('.map-base').classList.add('active');
        }
    },
    {
        indexes: ["mischief managed"],
        action: function() {
            document.querySelector('.map-base').classList.remove('active');
        }
    }
];

// Agregar los comandos a Artyom
artyom.addCommands(commands);

// Función para iniciar el reconocimiento de voz
function startContinuousArtyom() {
    artyom.fatality();  // Detener cualquier reconocimiento anterior

    setTimeout(function() {
        artyom.initialize({
            lang: "en-GB",  // Puedes cambiar el idioma si es necesario
            continuous: true,
            listen: true,
            speed: 1
        }).then(function() {
            console.log("Ready to work!");
        });
    }, 250);
}

// Llamada a la función para iniciar el reconocimiento de voz
startContinuousArtyom();
