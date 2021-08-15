const socket = io();

const noteForm = document.querySelector("#note-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  socket.emit("client:newnote", {
    title: title.value,
    description: description.value,
  });

  socket.on("server:updatenote", (data) => {
    const noteDescription = document.querySelector("#note-description");
    noteDescription.innerHTML = data.description;
  });

  console.log({ title: title.value, description: description.value });
});
