// ------------------------- BASE -------------------------------------------

const div = document.createElement("div");

    div.className = "formulario";

const h1 = document.createElement("h1");

    h1.innerHTML = "Bienvenido al formulario CODERHOUSE"
    h1.className = "titulo";

const labelNombre = document.createElement("label");

    labelNombre.setAttribute("for", "nombre");
    labelNombre.innerHTML = "<b>Nombre del alumno</b> <br><br>";

const inputNombre = document.createElement("input");

    inputNombre.setAttribute("id", "nombre");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("placeholder", "Nombre Completo");
    inputNombre.setAttribute("name","Nombre Completo");
    inputNombre.setAttribute("required","");

const labelMail = document.createElement("label");

    labelMail.setAttribute("for", "mail");
    labelMail.innerHTML = "<br><br> <b>Mail</b> <br><br>";

const inputMail = document.createElement("input");

    inputMail.setAttribute("id", "mail");
    inputMail.setAttribute("type", "email");
    inputMail.setAttribute("placeholder", "mail@gmail.com");
    inputMail.setAttribute("name","mail");
    inputMail.setAttribute("required","");

const labelOpinion = document.createElement("label");

    labelOpinion.setAttribute("for", "seleccion");
    labelOpinion.innerHTML = "<br><br> <b>¿Que tan complicada te parecio la pre-entrega3?</b> <br><br>";

const inputSelect = document.createElement("select");

    inputSelect.setAttribute("name", "Dificultad");
    inputSelect.setAttribute("id", "seleccion")

const optionFacil = document.createElement("option");

    optionFacil.setAttribute("value", "facil")
    optionFacil.innerHTML = "Facil"

const optionIntermedio = document.createElement("option");

    optionIntermedio.setAttribute("value", "intermedia")
    optionIntermedio.innerHTML = "Intermedio"

const optionDificil = document.createElement("option");

    optionDificil.setAttribute("value", "dificil")
    optionDificil.innerHTML = "Dificil"

const botonSubmit = document.createElement("button");

    botonSubmit.setAttribute("id", "boton");
    botonSubmit.innerHTML = ("ENVIAR")
    botonSubmit.setAttribute("onclick", "registrarDatos()")


// ------------------------- INPUTS -------------------------------------------


const dataDiv = document.createElement("div")

const dataNombre = document.createElement("p")

const dataMail = document.createElement("p")

const dataSeleccion = document.createElement("p")

const dataTip = document.createElement("p")


// ------------------------- APPENDS -------------------------------------------

    
document.body.append(div);
div.appendChild(h1);
div.appendChild(labelNombre);
div.appendChild(inputNombre);
div.appendChild(labelMail);
div.appendChild(inputMail);
div.appendChild(labelOpinion);
div.appendChild(inputSelect);
inputSelect.appendChild(optionFacil);
inputSelect.appendChild(optionIntermedio);
inputSelect.appendChild(optionDificil);
div.appendChild(botonSubmit);

document.body.append(dataDiv);
dataDiv.appendChild(dataNombre);
dataDiv.appendChild(dataMail);
dataDiv.appendChild(dataSeleccion);
dataDiv.appendChild(dataTip);


// ------------------------- EVENTOS -------------------------------------------


labelNombre.addEventListener("mouseover", () => {
    labelNombre.classList.add("hover")
})

labelNombre.addEventListener("mouseout", () => {
    labelNombre.classList.remove("hover")
})

labelMail.addEventListener("mouseover", () => {
    labelMail.classList.add("hover")
})

labelMail.addEventListener("mouseout", () => {
    labelMail.classList.remove("hover")
})

labelOpinion.addEventListener("mouseover", () => {
    labelOpinion.classList.add("hover")
})

labelOpinion.addEventListener("mouseout", () => {
    labelOpinion.classList.remove("hover")
})


// ------------------------- FUNCIONES -------------------------------------------


function registrarDatos ()  {
    
    let datoNombre = document.getElementById("nombre").value
    let datoMail = document.getElementById("mail").value;
    let datoSelect = document.getElementById("seleccion").value;
    console.log(datoNombre);
    console.log(datoMail);
    console.log(datoSelect);

    if (datoNombre == "" ){
        alert("Por favor introduce un Nombre valido") 

    } else if (datoMail == "" ){
        alert("Por favor introduce un Mail valido") 

    } else if( datoSelect == "facil"){

        dataDiv.className = "dataDiv";
        dataNombre.innerHTML = `Bienvenido ${datoNombre}`
        dataMail.innerHTML = `Tu mail es ${datoMail}`
        dataSeleccion.innerHTML = `la dificultad de la tercer pre-entrega te parecio ${datoSelect}`
        dataTip.innerHTML = "¡Que bueno que te parecio facil! segui asi"

    } else if (datoSelect == "intermedia"){

        dataDiv.className = "dataDiv";
        dataNombre.innerHTML = `Bienvenido ${datoNombre}`
        dataMail.innerHTML = `Tu mail es ${datoMail}`
        dataSeleccion.innerHTML = `la dificultad de la tercer pre-entrega te parecio ${datoSelect}`
        dataTip.innerHTML = "¡Segui practicando hasta que lo domines!"

    } else if (datoSelect == "dificil" ){

        dataDiv.className = "dataDiv";
        dataNombre.innerHTML = `Bienvenido ${datoNombre}`
        dataMail.innerHTML = `Tu mail es ${datoMail}`
        dataSeleccion.innerHTML = `la dificultad de la tercer pre-entrega te parecio ${datoSelect}`
        dataTip.innerHTML = "No te preocupes, todo es cosa de practica, no aflojes"
            
    
    } else{
        alert = ("datos invalidos");
    }


// ------------------------- LOCAL STORAGE -------------------------------------------


    
    localStorage.setItem("Nombre del usuario", datoNombre);
    localStorage.setItem("Mail del usuario", datoMail);
    localStorage.setItem("Opiniones del usuario", datoSelect);

}   


// -------------------------------------------------------------------------------------