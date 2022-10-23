let descuentoCat;
const precio = 200
let totalPagar;

const formulario = document.getElementById('formulario')

const inputs = document.querySelectorAll("#formulario input")



const valor = document.getElementById("inputcantidad")

const btnResumen = document.getElementById("btnResumen")

let rtadoPagar = document.getElementById("rtadoPagar")

const btnBorrar = document.getElementById("btnBorrar")

const precioEstudiante = 200 * .2

function calcularPrecio(seleccion){
    if (seleccion == "estudiante"){
        descuento= 200 * 0.80
        return (precio - descuento)
    }else if(seleccion == "trainee"){
        descuento = 200 * 0.50
        return (precio - descuento)

    }else{
        descuento = 200 * 0.15
        return(precio -descuento)
    }
}



function calcular(e){
    e.preventDefault();
    
    nuevoPrecio = calcularPrecio(seleccion.value)
    
    totalPagar = nuevoPrecio* (valor.value)
    
    rtadoPagar.innerHTML= `Total a Pagar: $ ${totalPagar}`


    /*  formulario validacion  */

    if(campos.nombre && campos.apellido && campos.correo && campos.cantidad){
        
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            
			icono.classList.remove('formulario__grupo-correcto');
		});

        
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
    

    
}

function resetearForm(){
   formulario.reset()
   rtadoPagar.innerHTML= `Total a Pagar: $ `
   

   document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
   document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
    icono.classList.remove('formulario__grupo-correcto');

   })
   document.querySelectorAll('.formulario__grupo-incorrecto').forEach((icono) => {
            
    icono.classList.remove('formulario__grupo-incorrecto');
   })
   document.querySelectorAll('.formulario__input-error').forEach((icono) => {
            
    icono.classList.remove('formulario__input-error-activo');
   })

   
};

    



/*

validacion formulario
*/

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cantidad: /^[1-9]+$/
}

const campos ={
    nombre:false,
    apellido : false,
    correo:false,
    cantidad:false
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
             validarCampo(expresiones.nombre, e.target, 'nombre')
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido')
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
            break;
        case "cantidad":
            validarCampo(expresiones.cantidad, e.target, 'cantidad')
            break;
    }
}


const validarCampo =( expresion, input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo}  .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo]=true
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`) .classList.remove('fa-check-circle')
   
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo]=false
    }
}






inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})










btnResumen.onclick=calcular;










