const dieta = [
    {
        dia: 'Lunes',
        comidas: {
            desayuno: 'Smoothie Fresas con Crema',
            ingredientesDesayuno: [
                '1 taza de leche de coco o almendras sin azúcar',
                '1/2 taza de yogurt griego sin azúcar',
                '1 taza de fresas o frutos rojos',
                '1 cda. de crema de almendras',
                'Hielos al gusto',
                '1 huevo al gusto, 1 tortilla de nopal'
            ],
            colacion1: 'Piña con Jícama',
            ingredientesColacion1: [
                '1/2 taza de jícama rallada',
                '3/4 taza de piña picada'
            ],
            comida: 'Pechuga de Pollo al Vapor',
            ingredientesComida: [
                '120 g de pechuga de pollo',
                '1/3 taza de arroz integral o blanco',
                'Verduras opcionales (brócoli, coliflor, calabaza, chayote, soya germinada, zanahoria)'
            ],
            colacion2: '1 toronja en gajos',
            cena: 'Calabacitas a la Mexicana',
            ingredientesCena: [
                'Calabacitas, chile, tomate, cebolla, elotito',
                '1 tostada horneada'
            ]
        }
    },
    {
        dia: 'Martes',
        comidas: {
            desayuno: 'Omelet de Espinacas',
            ingredientesDesayuno: [
                '3 claras de huevo',
                'Un puñado de espinacas',
                '1 rebanada de pan integral'
            ],
            colacion1: 'Gelatina',
            ingredientesColacion1: [
                '1 taza de gelatina sin azúcar'
            ],
            comida: 'Taquitos de Asada',
            ingredientesComida: [
                '120 g de carne pulpa negra o pulpa bola en trocitos',
                '1/2 aguacate machacado',
                '3 tortillas de nopal',
                'Salsa mexicana, verde o roja',
                'Ensalada verde (lechuga, tomate, pepino)'
            ],
            colacion2: '1 tz de jícama',
            cena: 'Chicken Rice',
            ingredientesCena: [
                '1/2 taza de arroz integral de preferencia',
                '50 g de pollo',
                'Pimiento morrón rojo, chile chipotle'
            ]
        }
    },
    {
        dia: 'Miércoles',
        comidas: {
            desayuno: 'Sándwich de Pollo',
            ingredientesDesayuno: [
                '2 rebanadas de pan integral',
                '60g de pollo',
                'Espinaca o lechuga',
                'Tomate',
                'Cebolla (opcional)',
                '1/3 de aguacate'
            ],
            colacion1: 'Piña con Jícama',
            ingredientesColacion1: [
                '1/2 taza de jícama rallada',
                '3/4 taza de piña picada'
            ],
            comida: 'Atún Guisado',
            ingredientesComida: [
                '1 y ½ lata de atún',
                'Chile, tomate, cebolla',
                '1/2 taza de arroz integral o blanco',
                'Ensalada verde (lechuga, tomate, pepino)'
            ],
            colacion2: '10 almendras',
            cena: 'Tostadas de aguacate/frijol',
            ingredientesCena: [
                '2 tostadas horneadas untadas con frijol sin guisar',
                'Salsa bandera',
                '1/3 pieza de aguacate'
            ]
        }
    },
    {
        dia: 'Jueves',
        comidas: {
            desayuno: 'Omelette',
            ingredientesDesayuno: [
                '1 huevo',
                'Verduras al gusto, 1 rebanada de jamón',
                '2 tostadas horneadas',
                'Licuado: 1 taza de leche de coco, 1/2 plátano'
            ],
            colacion1: 'Gelatina',
            ingredientesColacion1: [
                '1 taza de gelatina sin azúcar'
            ],
            comida: 'Pechuga de Pollo Deshebrado',
            ingredientesComida: [
                '120 g de pechuga de pollo',
                '2 tostadas horneadas',
                'Lechuga finamente picada',
                'Zanahoria rallada',
                'Pepino',
                'Cebolla curtida (Opcional)',
                '1 cucharada de queso Cotija',
                '1/3 de aguacate'
            ],
            colacion2: '1 toronja en gajos',
            cena: 'Chilaquiles',
            ingredientesCena: [
                '50gr de totopos',
                '1/2 de pieza de Jitomate',
                '1 pieza de chile serrano',
                '1/2 taza de frijol cocido',
                '40gr de queso'
            ]
        }
    },
    {
        dia: 'Viernes',
        comidas: {
            desayuno: 'Huevo con Jamón',
            ingredientesDesayuno: [
                '1 huevo',
                '2 rebanadas de jamón',
                'Verdura al gusto',
                '1 tortilla de nopal'
            ],
            colacion1: 'Piña con Jícama',
            ingredientesColacion1: [
                '1/2 taza de jícama rallada',
                '1/2 taza de piña picada'
            ],
            comida: 'Camarones Rancheros',
            ingredientesComida: [
                '11 camarones',
                'Chile serrano, cebolla, tomate',
                '1/2 taza de arroz integral o blanco',
                'Ensalada verde (lechuga, tomate, pepino)'
            ],
            colacion2: '2 tzs de jícama',
            cena: 'Club Sándwich',
            ingredientesCena: [
                '2 panes integrales',
                '40gr de pechuga de pollo',
                '1 cucharada de mayonesa light',
                'Espinaca, lechuga orejona, germinado, pepino'
            ]
        }
    },
    {
        dia: 'Sábado',
        comidas: {
            desayuno: 'Wafles',
            ingredientesDesayuno: [
                '3/4 taza de avena',
                '1/2 plátano',
                '1 huevo',
                '1 cda. de vainilla',
                'Canela en polvo',
                '1 cda. de fruto del monje o un sobre de Stevia',
                '5 fresas o un equivalente de fruta para acompañar'
            ],
            colacion1: 'Gelatina',
            ingredientesColacion1: [
                '1 taza de gelatina sin azúcar'
            ],
            comida: 'Enchiladas de Pechuga de pollo',
            ingredientesComida: [
                '120 g de pollo deshebrado',
                '3 tortillas de nopal',
                '1/4 de taza de frijol machacado',
                '1/2 aguacate',
                '30gr de queso panela molido',
                'Ensalada verde (lechuga, tomate, pepino)'
            ],
            colacion2: '1 taza de piña picada',
            cena: 'Tuna Lettuce Tacos',
            ingredientesCena: [
                '1 lata de atún',
                '2/3 tz de elote en grano',
                '1/4 de aguacate',
                'Cilantro, cebolla, jitomate, pepino, limón',
                'Hojas de lechuga orejona'
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
            cena: 'Libre'
        }
    }
];

function mostrarDia(diaIndex) {
    const diaSeleccionado = dieta[diaIndex];

    // Rellena la sección del desayuno
    if (Array.isArray(diaSeleccionado.comidas.ingredientesDesayuno)) {
        let desayunoContenido = `<p class = "tituloPlatillo">${diaSeleccionado.comidas.desayuno}</p><ul class = "lista">`;
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
        let comidaContenido = `<p class = "tituloPlatillo">${diaSeleccionado.comidas.comida}</p><ul class = "lista" >`;
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
        let cenaContenido = `<p class = "tituloPlatillo">${diaSeleccionado.comidas.cena}</p><ul class = "lista" >`;
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


