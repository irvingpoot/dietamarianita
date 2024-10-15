const dieta = [
    {
        dia: 'Lunes',
        comidas: {
            desayuno: 'Sincronizadas',
            ingredientesDesayuno: [
                '2 tortillas de nopal',
                '60 gramos de queso fresco o panela',
                '1 rebanada de jamón de pavo',
                'Salsa bandera',
                '1/3 pieza de aguacate',
                '1 taza de café',
                'Jugo verde'
            ],
            colacion1: '1 gelatina sin azúcar',
            ingredientesColacion1: ['1 gelatina sin azúcar'],
            comida: 'Pollo con crema y chipotle',
            ingredientesComida: [
                '120 gr de pollo, crema y chipotle al gusto (Preparación al gusto)',
                '1 taza de verduras al vapor',
                '1 tostada horneada o 1 tortilla de nopal'
            ],
            colacion2: '1 taza de jícama',
            cena: 'Guacamole con totopos',
            ingredientesCena: [
                '1 pieza de tomate',
                '1 pieza de aguacate',
                '2 cucharadas de cebolla',
                'Sal y pimienta',
                '1 paquete de salmas'
            ]
        }
    },
    {
        dia: 'Martes',
        comidas: {
            desayuno: 'Chilaquiles',
            ingredientesDesayuno: [
                '3 tortillas de nopal',
                '½ pieza de jitomate',
                '1 pieza de chile serrano',
                '½ taza de frijol cocido',
                '1 huevo',
                'Jugo verde'
            ],
            colacion1: '1 taza de jícama',
            ingredientesColacion1: ['1 taza de jícama'],
            comida: 'Brochetas de res',
            ingredientesComida: [
                '100 gramos de carne de res en cubos',
                'Verduras (pimientos rojos, verdes, amarillos, cebolla blanca, champiñones)',
                '2 cucharadas de aceite',
                '2 cucharadas de salsa de soya',
                '½ taza de arroz blanco con elote amarillo'
            ],
            colacion2: '½ taza de jícama con Tajín bajo en sodio',
            cena: 'Sopa de fideo con verduras',
            ingredientesCena: [
                '1 taza de fideo hervido',
                'Cebolla, tomate (para el caldo)',
                '½ taza de zanahoria',
                '½ taza de chícharos',
                '1 tortilla de nopal'
            ]
        }
    },
    {
        dia: 'Miércoles',
        comidas: {
            desayuno: 'Sándwich ligero',
            ingredientesDesayuno: [
                '2 rebanadas de pan integral',
                '2 rebanadas de jamón de pavo',
                '½ pieza de pepino en rebanadas',
                'Tomate rebanado',
                'Cebolla, pimiento y cilantro',
                '1 cucharada de mayonesa',
                'Jugo verde'
            ],
            colacion1: '1 gelatina',
            ingredientesColacion1: ['1 gelatina'],
            comida: 'Pescado empapelado',
            ingredientesComida: [
                '120 gramos de filete de pescado',
                '½ taza de espinacas',
                '½ taza de pimiento picado',
                '½ taza de zanahoria picada',
                '1 pieza de tomate en rodajas',
                'Condimentos al gusto'
            ],
            colacion2: '1 chocolate Turin (Tu puedes, mi amor &#9829;)',
            cena: 'Tacos de lechuga con pollo',
            ingredientesCena: [
                '50 gramos de fajitas de pollo',
                'Hojas de lechuga orejona',
                'Salsa bandera (1 tomate picado, ½ taza cebolla blanca, chile serrano y cilantro al gusto)',
                '1/3 pieza de aguacate',
                '1 cucharada de aderezo'
            ]
        }
    },
    {
        dia: 'Jueves',
        comidas: {
            desayuno: 'Licuado de blueberries y fresa',
            ingredientesDesayuno: [
                '1 taza de leche light o de soya',
                '1 taza de fresas',
                '¼ taza de blueberries',
                '10 almendras',
                'Jugo verde'
            ],
            colacion1: '1 taza de jícama y zanahoria rallada',
            ingredientesColacion1: ['1 taza de jícama y zanahoria rallada'],
            comida: 'Consomé de pollo',
            ingredientesComida: [
                '1 taza de consomé de pollo',
                '1 taza de verduras al vapor (Las que tu elijas)',
                '½ taza de arroz blanco con elote amarillo',
                '90 gramos de pechuga de pollo desmenuzada',
                '1 tortilla de nopal'
            ],
            colacion2: '½ taza de jícama con Tajín bajo en sodio',
            cena: 'Sándwich de atún',
            ingredientesCena: [
                '2 rebanadas de pan integral',
                '30 gramos de atún',
                '1/3 pieza de aguacate',
                'Lechuga y tomate'
            ]
        }
    },
    {
        dia: 'Viernes',
        comidas: {
            desayuno: 'Huevo con verdura',
            ingredientesDesayuno: [
                '1 pieza de huevo',
                '½ taza de verduras al gusto',
                '1 cucharada de aceite',
                '1 tortilla de nopal',
                '1 taza de café',
                'Jugo verde'
            ],
            colacion1: '1 toronja',
            ingredientesColacion1: ['1 toronja'],
            comida: 'Cocido',
            ingredientesComida: [
                '80 gramos de carne molida',
                'Papa, zanahoria, repollo, elote, calabaza, ejotes',
                '1 tortilla de nopal'
            ],
            colacion2: '1 chocolate Turin (Yo confío en ti &#9829;)',
            cena: 'Pizza',
            ingredientesCena: [
                '1 pieza de pan pita',
                'Salsa de tomate casera',
                '30 gr de queso oaxaca',
                '1 rebanada de jamón o pepperoni'
            ]
        }
    },
    {
        dia: 'Sábado',
        comidas: {
            desayuno: 'Huevo con jamón',
            ingredientesDesayuno: [
                '1 huevo',
                '1 rebanada de jamón',
                '1 tortilla de nopal',
                '1 taza de café',
                'Jugo verde'
            ],
            colacion1: '1 gelatina sin azúcar',
            ingredientesColacion1: ['1 gelatina sin azúcar'],
            comida: 'Tostadas mexicanas',
            ingredientesComida: [
                '2 tostadas horneadas',
                '½ taza de frijol molido',
                'Lechuga',
                '1/3 pieza de aguacate',
                '30 gramos de queso fresco',
                '60 gramos de carne desmenuzada'
            ],
            colacion2: '½ taza de jícama con Tajín bajo en sodio',
            cena: 'Wrap de jamón',
            ingredientesCena: [
                '1 pieza de pan pita',
                '2 rebanadas de jamón de pavo',
                '1 taza de lechuga',
                '1/2 pieza de tomate',
                '1/3 pieza de aguacate'
            ]
        }
    },
    {
        dia: 'Domingo',
        comidas: {
            desayuno: 'Repetir cualquier desayuno de la semana',
            colacion1: 'Libre',
            comida: 'Repetir cualquier comida de la semana',
            colacion2: 'Libre',
            cena: 'Tu novio <3 (Libre)'
        }
    }
];

function mostrarDia(diaIndex) {
    const diaSeleccionado = dieta[diaIndex];

    // Rellena la sección del desayuno
    if (Array.isArray(diaSeleccionado.comidas.ingredientesDesayuno)) {
        let desayunoContenido = `<p class = "tituloPlatillo">&#10048; &nbsp;${diaSeleccionado.comidas.desayuno}&nbsp;&#10048;</p><ul class = "lista">`;
        diaSeleccionado.comidas.ingredientesDesayuno.forEach(ingrediente => {
            desayunoContenido += `<li>${ingrediente}</li>`;
        });
        desayunoContenido += '</ul>';
        document.getElementById('desayuno-contenido').innerHTML = desayunoContenido;
    } else {
        document.getElementById('desayuno-contenido').innerHTML = `<p class = "lista">${diaSeleccionado.comidas.desayuno}</p>`;
    }

    // Primera colación
    document.getElementById('colacion1-contenido').innerHTML = `<p class = "lista">${diaSeleccionado.comidas.colacion1}</p>`;

    // Rellena la comida
    if (Array.isArray(diaSeleccionado.comidas.ingredientesComida)) {
        let comidaContenido = `<p class = "tituloPlatillo">&#10048; &nbsp;${diaSeleccionado.comidas.comida}&nbsp;&#10048;</p><ul class = "lista" >`;
        diaSeleccionado.comidas.ingredientesComida.forEach(ingrediente => {
            comidaContenido += `<li>${ingrediente}</li>`;
        });
        comidaContenido += '</ul>';
        document.getElementById('comida-contenido').innerHTML = comidaContenido;
    } else {
        document.getElementById('comida-contenido').innerHTML = `<p class = "lista">${diaSeleccionado.comidas.comida}</p>`;
    }

    // Segunda colación
    document.getElementById('colacion2-contenido').innerHTML = `<p class = "lista">${diaSeleccionado.comidas.colacion2}</p>`;

    // Cena
    if (Array.isArray(diaSeleccionado.comidas.ingredientesCena)) {
        let cenaContenido = `<p class = "tituloPlatillo">&#10048; &nbsp;${diaSeleccionado.comidas.cena}&nbsp;&#10048;</p><ul class = "lista" >`;
        diaSeleccionado.comidas.ingredientesCena.forEach(ingrediente => {
            cenaContenido += `<li>${ingrediente}</li>`;
        });
        cenaContenido += '</ul>';
        document.getElementById('cena-contenido').innerHTML = cenaContenido;
    } else {
        document.getElementById('cena-contenido').innerHTML = `<p class = "lista">${diaSeleccionado.comidas.cena}</p>`;
    }

    const links = document.querySelectorAll('#menu-dias-ul a');
    links.forEach((link, index) => {
        if (index == diaIndex) {
            link.classList.add('selected');
        } else {
            link.classList.remove('selected');
        }
    });

    // Resaltar el día seleccionado en el menú desplegable
    const select = document.getElementById('menu-dias-select');
    select.value = diaIndex;
}

function mostrarDiaSelect(selectElement) {
    const diaIndex = selectElement.value;
    mostrarDia(diaIndex);
}

function resaltarDiaActual() {
    const today = new Date().getDay(); // Obtiene el día actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    let diaIndex = today - 1; // Ajustar el índice (0 = Lunes en nuestra dieta)
    if (diaIndex < 0) diaIndex = 6; // Si es Domingo, ajustar al último índice

    mostrarDia(diaIndex); // Mostrar y resaltar el día actual
}

// Mostrar el día actual al cargar la página
window.onload = () => {
    const hoy = new Date().getDay(); // getDay() devuelve 0 para domingo
    mostrarDia(hoy === 0 ? 6 : hoy - 1); // Si es domingo (0), usar el índice 6 para domingo, de lo contrario usar hoy - 1.
    resaltarDiaActual();
};


