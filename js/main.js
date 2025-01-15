const dragItems = document.querySelectorAll('img[draggable="true"]');

dragItems.forEach(item => {
    item.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text", event.target.id);
    });
});

const dropAreas = document.querySelectorAll('.box');

dropAreas.forEach(area => {
    area.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    area.addEventListener("drop", function(event) {
        event.preventDefault();
        const draggedItemId = event.dataTransfer.getData("text");
        const draggedElement = document.getElementById(draggedItemId);

        const targetAnimal = area.getAttribute("data-animal")

        if(draggedItemId === targetAnimal){
            area.appendChild(draggedElement);
            textoError.innerHTML = '';
        }else{
            textoError = document.getElementById("text")
            textoError.textContent = "Error Animal incorrecto ❌"
            document.appendChild(textoError);
        }
    });
});
