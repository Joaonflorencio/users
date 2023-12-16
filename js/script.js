const listaUsuarios = document.getElementById('listaUsuarios');

// Obtener datos de la API de usuarios (simulado)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (respuesta) {
        if (!respuesta.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        return respuesta.json();
    })
    .then(function (usuarios) {
        // Crear un nuevo array con spread y añadir edades aleatorias
        console.log('USERS',usuarios)
        const usuariosConEdades = usuarios.map(function (usuario) {
            return {
                ...usuario,
                age: generarEdadAleatoria(18, 50),
                img: `${usuario.id}`,
                company: usuario.company.name,
                address: `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`
            };
        });

        // Mostrar detalles de cada usuario
        usuariosConEdades.forEach(function (usuario) {
            mostrarDetallesUsuario(usuario);
            console.log(usuario)
        });
    })
    .catch(function (error) {
        console.error('Error al obtener datos de usuarios:', error.message);
    });

// Función para generar una edad aleatoria entre min y max
function generarEdadAleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mostrar detalles de un usuario en la lista
function mostrarDetallesUsuario({ name, age, username,img, phone, email, company, address }) {

    const infoUsuario = `
    <li class="usuario">
    <div class="usuario-data">
      <div class="usuario">
          <strong>Nombre:</strong> ${name}<br>
          <strong>Edad:</strong> ${age}<br>
          <strong>Username:</strong> ${username}<br>
          <strong>Teléfono:</strong> ${phone}<br>
          <strong>Email:</strong> ${email}
          </div>
          <img src="../assets/img/${img}.jpeg" alt=""/>
          </div>
      <div>
        <strong>Compañía:</strong> ${company}<br>
        <strong>Dirección:</strong> ${address}
      </div>
    </li>
    `;

    listaUsuarios.innerHTML += infoUsuario;
}