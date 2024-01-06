const createIssueButton = document.getElementById("create-issue-btn");
const createIssueInput = document.getElementById("create-issue-input");
const todoContainer = document.getElementById("todo");
const containers= document.querySelectorAll(".container");

createIssueButton.addEventListener("click", (e) => {
  createIssueButton.style.display = "none";
  createIssueInput.style.display = "block";
});

createIssueInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const card = document.createElement("div");
    card.innerText = e.target.value.trim();
    card.className = "card3";
    card.draggable = true;
    todoContainer.appendChild(card);

    createIssueButton.style.display = "block";
    createIssueInput.style.display = "none";
    createIssueInput.value = "";
  }
});

let draggedElement = null;

function onDragStart(event) {
  draggedElement = event.target;
}

function onDragOver(event) {
  draggedElement.parentNode;
  if (draggedElement.parentNode.id === event.currentTarget.id) {
    return;
  }
  event.preventDefault();
}

function onDrop(event) {
  event.currentTarget.appendChild(draggedElement);
}
for (let i = 0; i < containers.lenght; i++) {
  containers[i].addEventListener("dragover", onDragOver);
  containers[i].addEventListener("drop", onDrop);
}
