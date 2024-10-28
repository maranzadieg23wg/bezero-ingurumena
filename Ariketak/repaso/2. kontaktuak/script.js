const arrayTareas = [];

function crearFormulario() {
    const index = arrayTareas.length;
    arrayTareas.push({
        nombre: "",
        prioridad: "",
        completada: "",
        array: [],
    });
    const formContainer = document.getElementById("formContainer");
    const form = document.createElement("form");
    form.setAttribute('oninput', `actualizarTarea(${index})`);
    form.innerHTML = `
        <h1>Formulario de Tarea</h1>
        Nombre: <input type="text" name="nombre" placeholder="Nombre" required>
        Prioridad:
        <select id="prioridad" name="prioridad" required>
            <option value="">Selecciona prioridad</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
        </select>
        Completada: <input type="checkbox" name="completada">
        Array: <input type="text" name="array" placeholder="arraydata" required>
    `;
    formContainer.appendChild(form);
}

function actualizarTarea(index) {
    const form = document.forms[index];
    arrayTareas[index].nombre = form.nombre.value;
    arrayTareas[index].prioridad = form.prioridad.value;
    arrayTareas[index].completada = form.completada.checked;
    arrayTareas[index].array[0] = form.array.value;


    console.log(`Tarea ${index + 1} actualizada:`, arrayTareas[index]);
}

function mostrarTareas() {
    console.log("llamada mostrarTareas func");

    // Abre una nueva ventana y guarda la referencia
    const nuevaVentana = window.open("", "Tareas", "width=400,height=400");

    // Genera el contenido HTML de la nueva ventana
    nuevaVentana.document.write("<h1>Lista de Tareas</h1><div id='listaTareas'></div>");

    // Obtén el contenedor en la nueva ventana
    const listaTareas = nuevaVentana.document.getElementById("listaTareas");
    listaTareas.innerHTML = "";

    arrayTareas.forEach(tarea => {
        const tareasDiv = document.createElement('div');
        tareasDiv.innerHTML = `
            <hr style="border: 1px solid #333; width: 10%; margin: 20px 0;">
            <strong>Nombre: ${tarea.nombre} <br>
            Prioridad: ${tarea.prioridad} <br>
            Completada: ${tarea.completada ? "Sí" : "No"}</strong>
            <hr style="border: 1px solid #333; width: 10%; margin: 20px 0;">
        `;
        listaTareas.appendChild(tareasDiv);
    });
}
