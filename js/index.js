//Función para capturar datos del formulario de cotización
function captura() {
    let precioFinal;
    var ciCliente = document.getElementById("ci_cliente").value;
    var nombresCliente = document.getElementById("nombres_cliente").value;
    var apellidosCliente = document.getElementById("apellidos_cliente").value;
    var direccionCliente = document.getElementById("direccion_cliente").value;
    var seleccionCarro = document.getElementById("eleccion").value;
    var precioCarro = document.getElementById("price").value;
    if (ciCliente == "") {
        alert("El número de ci/ruc es obligatorio");
        document.getElementById("ci_cliente").focus();
    } else {
        if (nombresCliente == "") {
            alert("El nombre es obligatorio");
            document.getElementById("nombres_cliente").focus();
        } else {
            if (apellidosCliente == "") {
                alert("El nombre es obligatorio");
                document.getElementById("apellidos_cliente").focus();
            } else {
                if (direccionCliente == "") {
                    alert("El nombre es obligatorio");
                    document.getElementById("direccion_cliente").focus();
                }
            }
        }
    }

    const precioSub = parseFloat(precioCarro);

    if (seleccionCarro == "Ford Fiesta") {
        precioFinal = precioSub - (precioSub * 0.05);
    } else {
        precioFinal = precioSub - (precioSub * 0.10);
    }

    let imprimirCi = document.getElementById('imprimir-ci-ruc');
    let imprimirNombre = document.getElementById('imprimir-nombre');
    let imprimirApellido = document.getElementById('imprimir-apellido');
    let imprimirDireccion = document.getElementById('imprimir-direccion');
    let imprimirVehiculo = document.getElementById('imprimir-vehiculo');
    let imprimirPrecio = document.getElementById('imprimir-valor-final');

    imprimirCi.innerText = `CI/RUC: ${ciCliente}`;
    imprimirNombre.innerHTML = `Nombre: ${nombresCliente}`;
    imprimirApellido.innerHTML = `Apellido: ${apellidosCliente}`;
    imprimirDireccion.innerHTML = `Dirección: ${direccionCliente}`;
    imprimirVehiculo.innerHTML = `Carro seleccionado: ${seleccionCarro}`;
    imprimirPrecio.innerHTML = `Precio: ${precioFinal}`;
}

