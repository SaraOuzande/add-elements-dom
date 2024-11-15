 // Aquí tu código

const botonAgregar = document.getElementById('agregar');
const lista = document.getElementById('lista');


botonAgregar.addEventListener('click', () => {

    const nuevoElemento = prompt('Introduce un elemento para agregar a la lista:');

   
    if (nuevoElemento) {
        
        const li = document.createElement('li');
        li.textContent = nuevoElemento;

       
        lista.appendChild(li);
    } else {
        alert('No ingresaste ningún elemento.');
    }
});

 