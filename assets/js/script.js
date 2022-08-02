// password = prompt("introduce password")
// if (password == "Pawaco1993"){
//     alert("conoces el password")
// }
// if (password != "Pawaco1993"){
//     alert("contraseña invalida")
// }

// const btn = document.getElementById("btnpass")

// btn.addEventListener("click", function () {
//     const password = document.getElementById("pass").value
//     let parrafo = document.getElementById("parrafo")
// if (password == "secret"){
//     parrafo.innerHTML = "bienvenido"
// }
// else {
//     parrafo.innerHTML = "clave incorrecta"
// }
// })


const img = document.getElementById("img")

img.addEventListener("click", () => {
    // img.classList.toggle("border")

    if (img.classList.contains("border")) {
        img.classList.remove("border")
    } else {
        img.classList.add("border")
    }
})

const btn = document.getElementById("btn")
btn.addEventListener("click", ()=> {
const sticker1 = document.getElementById("sticker-1").value;
const sticker2 = document.getElementById("sticker-2").value;
const sticker3 = document.getElementById("sticker-3").value;
const msg = document.getElementById("msg");

const total = Number(sticker1) + Number(sticker2) + Number(sticker3);

if (total > 10){
    msg.innerHTML = "llevas demasiados stickers";
}
else {
    msg.innerHTML = "llevas " + total + " stickers";
}
})


const btnIngresar = document.getElementById("pass-btn");
btnIngresar.addEventListener("click", ()=> {
let select1 = document.getElementById("select-1").value;
let select2 = document.getElementById("select-2").value;
let select3 = document.getElementById("select-3").value;
const passMsg = document.getElementById("pass-msg");

if (select1 == 9 & select2 == 1 & select3 == 1){
passMsg.innerHTML = "password 1 correcto";
}
else if (select1 == 7 & select2 == 1 & select3 == 4){
passMsg.innerHTML = "password 2 correcto"; 
}
else {
    passMsg.innerHTML = "password incorrecto";   
}
})


