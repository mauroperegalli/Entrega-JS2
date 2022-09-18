const pizzas = [
    {
        id : 1,
        nombre : "Napolitana",
        ingredientes:["Muzzarella", "Tomate", "Ajo"],
        precio: 500,
    },
    {
        id : 2,
        nombre : "Hawaiana",
        ingredientes:["Muzzarella", "Anana", "Jamon"],
        precio: 700,
    },
    {
        id : 3,
        nombre : "Rucula",
        ingredientes:["Muzzarella", "Jamon", "Rucula"],
        precio: 750,
    },
    {
        id : 4,
        nombre : "Jamon y morron",
        ingredientes:["Muzzarella", "Jamon", "Morron Verde", "Morron Rojo"],
        precio: 550,
    },
    {
        id : 5,
        nombre : "Fugazzeta",
        ingredientes:["Muzzarella", "Cebolla"],
        precio: 700,
    },
    {
        id : 6,
        nombre : "De la casa",
        ingredientes:["Muzzarella", "Cheddar", "Salchichas","Panceta"],
        precio: 900,
    }

];


const input = document.getElementById('input-number');
const submitbtn = document.getElementById('submit');
const nombre = document.getElementById('name');
const precio = document.getElementById('prize');


function showpizza (idnumber){
    const Lapizzaelegida = pizzas.filter((pizza) => pizza.id == idnumber)
    for (pizza of Lapizzaelegida){
            nombre.innerHTML = `${pizza.nombre}`;
            precio.innerHTML = `$${pizza.precio}`;
    }
}


function showError () {
    nombre.innerHTML = 'Id Invalido';
    precio.innerHTML = `Escoja otro entre 1 y ${pizzas.length}`;
}

submitbtn.addEventListener('click', submit);

function submit  (e) {
    e.preventDefault();
    var idnumber = input.value.trim();
    if(idnumber <= pizzas.length && idnumber > 0){
        showpizza(idnumber);
    }
    else{
        showError();
    }
}

