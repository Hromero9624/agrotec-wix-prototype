// CONTACT PAGE

$w.onReady(function () {

    $w("#btnEnviar").onClick(() => {

        let nombre = $w("#inputNombre").value;
        let correo = $w("#inputCorreo").value;
        let mensaje = $w("#textAreaMensaje").value;

        if (!nombre || !correo || !mensaje) {
            $w("#txtError").text = "Por favor completa todos los campos";
            $w("#txtError").show();
            return;
        }

        // Simulación de envío (Wix backend lo puede manejar real)
        $w("#txtSuccess").text = "Mensaje enviado correctamente";
        $w("#txtSuccess").show();

        console.log("Datos enviados:", {
            nombre,
            correo,
            mensaje
        });

    });

});