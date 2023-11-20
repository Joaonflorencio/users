async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();
        return usuarios;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

function mostrarUsuariosEnDOM(usuarios) {
    const listaUsuarios = document.getElementById('listaUsuarios');
    usuarios.forEach(usuario => {
        
        usuario.edad = Math.floor(Math.random() * 100);

      
        const elementoUsuario = document.createElement('li');
        elementoUsuario.innerHTML = `
            <img src="assets/img/${usuario.id}.jpeg" alt="Imagen del usuario">
            <h2>${usuario.name} (${usuario.edad})</h2>
            <p>Username: ${usuario.username}</p>
            <p>Teléfono: ${usuario.phone}</p>
            <p>Email: ${usuario.email}</p>
            <p>Compañía: ${usuario.company.name}</p>
            <p>Dirección: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}</p>
        `;

       
        listaUsuarios.appendChild(elementoUsuario);
    });
}


async function main() {
    const usuarios = await obtenerUsuarios();
    mostrarUsuariosEnDOM(usuarios);
}


main();