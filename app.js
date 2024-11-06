// URL del API JSONPlaceholder
const url = 'https://jsonplaceholder.typicode.com/users';

// Hacer la solicitud fetch al API
fetch(url)
    .then(response => response.json())  // Convertir la respuesta en formato JSON
    .then(data => {
        // Encontrar el elemento <ul> donde vamos a poner los usuarios
        const userList = document.getElementById('user-list');

        // Iterar sobre cada usuario y agregarlo a la lista
        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${user.name}, Email: ${user.email}`;
            userList.appendChild(li);
        });
    })
    .catch(error => console.log('Error:', error)); // Manejo de errores
