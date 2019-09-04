function saludar(){

alert("Hola Mundo")
}
function Down(){
    alert("Down")
}
function Press(){
    alert("Press")
}
function Up(){
    alert("up")
}
function rojo(){
    let element= document.getElementById("titulo");
    console.log(element);
    console.log(element.innerText);
    console.log(element.id);

    element.innerText="rojo";
    element.classList.add("rojo");
    element.style.background="yellow";
}