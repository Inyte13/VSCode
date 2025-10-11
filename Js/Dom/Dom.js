// childNodes, retorna nodos hijos (elementos, texto, comentarios)
document.childNodes

// children, retorna elementos hijos excepto texto y comentarios
document.children

// getElementById, retorna elementos por su id sino null
document.getElementById("btn1") // <button class="boton-redondo" id="btn1">Cambia el color de la página!</button>

// getElementsByClassName, retorna arr por su clase sino arr vacío
document.getElementsByClassName("btn__redondo") // [button#btn1.btn__redondo, button#btn2.btn__redondo, btn1: button#btn1.btn__redondo, btn2: button#btn2.btn__redondo]

// getElementsByTagName, retorna arr por su etiqueta sino arr vacío
document.getElementsByTagName("button") // [button#btn1.btn__redondo, button#btn2.btn__redondo, btn1: button#btn1.btn__redondo, btn2: button#btn2.btn__redondo]

// querySelector, retorna el primer en coincidir sino null
document.querySelector("#btn1") // button#btn1.btn__redondo

// querySelectoAll, sino arr vacío
document.querySelectorAll(".btn__redondo") // [button#btn1.btn__redondo, button#btn2.btn__redondo]

// getElementsByName, referencia una etiqueta sino arr vacío
document.getElementsByName("robot2")[0] // <img src="./Images/robot2.png" alt="Image 2" name="robot2">

// closest, elemento más cercano (padre o hijo) sino null
robot1.closest(".galeria") // div.galeria

// parentElement, retorna el elemento padre
robot1.parentElement // div.galeria



