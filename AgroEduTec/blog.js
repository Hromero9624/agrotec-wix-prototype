// BLOG PAGE

$w.onReady(function () {

    $w("#post1").onClick(() => {
        $w("#postContent").text = "Actualización: nuevas tecnologías agrícolas implementadas en Colombia.";
    });

    $w("#post2").onClick(() => {
        $w("#postContent").text = "Evento: Webinar sobre agricultura digital realizado con éxito.";
    });

});