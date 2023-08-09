//Ingreso al centro de ayuda de Movistar

function problemas_linea1() {
    alert("Por favor reinicie el equipo,si el problema persiste pida hablar con asesor");
}

function problemas_linea2() {
    alert("Verifique si cuenta con paquete de datos vigente");
}

function problemas_linea3() {
    alert("Usted tiene un saldo deudo de $3500, por favor abonelo para que se le restaure la linea, muchas gracias");
}


const usuario = "Alberto23"
const contrasenia = "1234"
const opcion1 = 1
const opcion2 = 2
const opcion3 = 3

let cantidad_intentos = 3


alert("Bienvenido al centro de ayuda de Movistar")
let mail = prompt("Ingrese su mail, para continuar con la verificacion de la cuenta")
alert("Usted a recibido un su casilla el usuario y contraseña")

// Bucle de intentos
// Verificacion de cuenta

do{
    let usuar = prompt("Ingrese su usuario")
    let contra = prompt("Ingrese contraseña.")

    if(usuario == usuar && contrasenia == contra){
    alert("Ingreso exitoso, Alberto23!")
    alert("Indique a traves de los numeros la opcion deseada para poder Ayudarlo")

    // Opciones de ayuda
    
    let opcion = prompt("1-Problemas con la linea\n2-Problemas con internet\n3-Estado de cuenta")
    if(opcion==opcion1){
        problemas_linea1();
    }
    if(opcion==opcion2){
        problemas_linea2();
    }
    if(opcion==opcion3){
        problemas_linea3()
    }

    break
    }else{
        alert("Ingreso incorrecto, verifique sus datos")
        cantidad_intentos = cantidad_intentos - 1
    }

        
}while(cantidad_intentos > 0)