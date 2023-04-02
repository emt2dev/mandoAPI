const feedDisplay = document.querySelector("#feed")


fetch('http://localhost:3001/mando')
    .then(response => response.json())
    .then(data => console.log(data))