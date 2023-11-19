const inputDeTarea = document.getElementById("inpunt-tarea");
    const botonAgregar = document.getElementById("btn-agregar");
    const listados = document.getElementById("List");

    botonAgregar.addEventListener("click", () => {
      let tarea = inputDeTarea.value;
      if (tarea !== "") {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `
          ${tarea}
          <button class="btn btn-danger btn-sm quitar">Eliminar</button>
        `;
        listados.appendChild(listItem);
        inputDeTarea.value = "";
      }
    });

    //  use una delegacion de evento
    listados.addEventListener("click", (event) => {
      if (event.target && event.target.matches(".quitar")) {
        event.target.closest("li").remove();
      }
    });
