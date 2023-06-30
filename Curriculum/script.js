let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sql");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("dart");
        habilidades[5].classList.add("firebase");
        habilidades[6].classList.add("python");
        habilidades[7].classList.add("cmas");
        habilidades[8].classList.add("github");
        habilidades[9].classList.add("excel");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Validaciones correo de contacto
const correo = document.getElementById("correo")
const nombre = document.getElementById("nombre")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")
const validateForm = document.getElementById("validateForm")
const formulario = document.getElementById("formulario")

// Función para validar si el nombre tiene numeros
// Podrian ser caracteres especiales tambien pero otro dia
function notNumberss(val){
    numbers =["0", "1", "2", "3","4", "5","6","7","8","9"]
    for(x in numbers){
        console.log(val, x)
        if(val.includes(x))
            return true;
    }
    return false;
}
// Función para enviar los datos al comprobar isValidate
function isValidatee(isValidate){
    if(isValidate.includes(false))
    return false;
    return true;
}

formulario.addEventListener('submit', e => {
    validateForm.innerHTML="";
    //se ingresa variable para verificar todos los campos
    var isValidate = [false, false, false, false];
                //Correo, Nommbre, Asunto y Mensaje 
    e.preventDefault();
    // Validacion de correo
    if(correo.value.length >4)
        {
        if(correo.value.includes('@') && correo.value.split('@')[0].length > 0) //Valid que contenga @ y que el lado izq del arroba tenga algo
            if(correo.value.split('@')[1].includes(".") && //valida que haya un punto en el lado derecho
            correo.value.split('@')[1].split('.')[1].length > 0 && //aquie está el problema
            correo.value.split('@')[1].split('.')[0].length > 0) isValidate[0] = true;      
            else validateForm.innerHTML += "<p>Correo sin dominio</p>";
        else validateForm.innerHTML += "<p>Correo sin nombre de usuario</p>";
        }
    else validateForm.innerHTML += "<p>Correo debe tener más de 4 caracteres</p>";
    // Validación de nombre
    if(notNumberss(nombre.value) == false && nombre.value.length > 0) isValidate[1] = true;
    else validateForm.innerHTML += "<p>Nombre sin numeros y al menos 1 caracter</p>";

    // Validación de asunto
    if(asunto.value.length > 0) isValidate[2] = true;
    else validateForm.innerHTML += "<p>Asunto debe tener al menos 1 caracter</p>";

    // Validacion de mensaje
    if(mensaje.value.length > 0) isValidate[3] = true;
    else validateForm += "<p>Mensaje debe tener al menos 1 caracteres</p>";
    // Validacion de array
    isValidatee(isValidate) ? formulario.submit() : validateForm.innerHTML += "<p>Formulario sin exito</p>";
} )



function delayRedirect(){
    document.getElementById('delayMsg').innerHTML = 'Serás redireccionado despues de <span style="padding-left:5px; padding-right:5px" id="countDown">3</span> segundos....';
    var count = 3;
    setInterval(function(){
        count--; 
        document.getElementById('countDown').innerHTML = count;
        if (count == 0) {
            window.location = 'https://famous-toffee-61da28.netlify.app/index.html'; 
        }
    },1000);
}
function redirect(){
    window.location = 'https://famous-toffee-61da28.netlify.app/index.html';
}
