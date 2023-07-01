let modal1, modal2 , modal3 , modal4;
let abrirModal1 , abrirModal2 , abrirModal3 , abrirModal4;
let cerrarModal1 , cerrarModal2 , cerrarModal3 , cerrarModal4

// VARIABLES DE CADA MODAL ---------------------
modal1 = document.querySelector(".modal1");
abrirModal1 = document.querySelector(".btn-abrir-modal1");
cerrarModal1 = document.querySelector(".btn-cerrar-modal1");

modal2 = document.querySelector(".modal2");
abrirModal2 = document.querySelector(".btn-abrir-modal2");
cerrarModal2 = document.querySelector(".btn-cerrar-modal2");

modal3 = document.querySelector(".modal3");
abrirModal3 = document.querySelector(".btn-abrir-modal3");
cerrarModal3 = document.querySelector(".btn-cerrar-modal3");

modal4 = document.querySelector(".modal4");
abrirModal4 = document.querySelector(".btn-abrir-modal4");
cerrarModal4 = document.querySelector(".btn-cerrar-modal4");

// MODAL 1 ------------------------------------------------------
abrirModal1.addEventListener('click', ()=>{
    modal1.showModal();
});

cerrarModal1.addEventListener('click', ()=>{
    modal1.close();
});

// MODAL 2 ------------------------------------------------------
abrirModal2.addEventListener('click', ()=>{
    modal2.showModal();
});

cerrarModal2.addEventListener('click', ()=>{
    modal2.close();
});

// MODAL 3 ------------------------------------------------------
abrirModal3.addEventListener('click', ()=>{
    modal3.showModal();
});

cerrarModal3.addEventListener('click', ()=>{
    modal3.close();
});

// MODAL 4 ------------------------------------------------------
abrirModal4.addEventListener('click', ()=>{
    modal4.showModal();
});

cerrarModal4.addEventListener('click', ()=>{
    modal4.close();
});







