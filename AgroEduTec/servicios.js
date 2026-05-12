// SERVICIOS PAGE

$w.onReady(function () {

    $w("#btnEventos").onClick(() => {
        $w("#boxEventos").expand();
    });

    $w("#btnAsesorias").onClick(() => {
        $w("#boxAsesorias").expand();
    });

    $w("#btnApps").onClick(() => {
        $w("#boxApps").expand();
    });

    $w("#btnData").onClick(() => {
        $w("#boxData").expand();
    });

});