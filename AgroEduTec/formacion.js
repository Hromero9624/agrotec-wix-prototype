// FORMACION PAGE

$w.onReady(function () {

    $w("#btnCurso1").onClick(() => {
        $w("#txtCurso").text = "Curso: Tecnologías agrícolas modernas";
    });

    $w("#btnCurso2").onClick(() => {
        $w("#txtCurso").text = "Curso: Agricultura inteligente y digital";
    });

    $w("#btnEventosProximos").onClick(() => {
        $w("#txtEventos").show();
    });

});