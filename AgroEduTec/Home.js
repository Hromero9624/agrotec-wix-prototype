// HOME PAGE - Velo Wix

$w.onReady(function () {

    // Botón Servicios
    $w("#btnServicios").onClick(() => {
        wixLocation.to("/servicios");
    });

    // Botón Formación
    $w("#btnFormacion").onClick(() => {
        wixLocation.to("/formacion");
    });

    // Botón Contacto
    $w("#btnContacto").onClick(() => {
        wixLocation.to("/contactanos");
    });

    // Botón Cotizar
    $w("#btnCotizar").onClick(() => {
        $w("#contactSection").scrollTo();
    });

});