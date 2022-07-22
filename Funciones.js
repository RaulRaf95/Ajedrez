$(document).ready(function () {

});
/**
 * EVENTO CLICK ENVIAR
 * SOLICITA LAS POSICIONES DE LAS REINAS
 * LLENAS EL TEXT AREA CON LOS DATOS AL IGUAL QUE EL SELECT DE SOLUCIONES
 */
$("#btn_enviar").click(function () {
    // NUMERO PARA EL TABLERO
    let casillas = $("#casillas").val();
    if (casillas < 8) {
        $("#mensaje").attr("hidden", false);
        setTimeout(function() { 
            $("#mensaje").attr("hidden", true);
        }, 2000);
    } else {
        // PETICION AJAX 
        $.ajax({
            type: "POST",
            url: "Funciones.php",
            data: {
                info: casillas
            },
            dataType: "json",
            success: function (data) {

                // CREAR VARIABLE, LIMPIAR INPUTS Y MOSTRAR BTN DIBUJAR
                let opciones = "";
                $("#text_area").text("");
                $("#select_solucion").empty();
                $("#btn_dibujar").attr("hidden", false);

                // CICLO DATOS
                data.forEach(e => {
                    // PINTA TODOS LOS TABLEROS DE LAS SOLUCIONES
                    // tablero(casillas,e);
                    // STRING CON LAS SOLUCIONES
                    let aux = "";
                    e.datos.forEach(function (i, j) {
                        aux += "(" + j + "," + i + "),";
                    });
                    opciones += "Reina[" + aux.substring(0, aux.length - 1) + "]" + "\n";
                    // SE LLENA EL SELECT
                    $("#select_solucion").append("<option value='" + JSON.stringify({
                        opcion: e.opcion,
                        datos: e.datos,
                        casillas: casillas
                    }) + "'>" + "Reina[" + aux.substring(0, aux.length - 1) + "]" + "</option>");
                });

                // SE MANDA EL STRING AL TEXT AREA
                $("#text_area").val(opciones.trim());
            },
            error: function (data) {
                console.log("error", data);
            }
        });
        // console.log("click",casillas);
        // FUNCIONA
        // tablero(casillas);
    }


});

/**
 * EVENTO CLICK DIBUJAR TABLERO
 */
$("#btn_dibujar").click(function () {
    let objeto = JSON.parse($("#select_solucion").val());
    // console.log(objeto);
    tablero(objeto.casillas, objeto)
});



function tablero(casillas, posiciones) {
    // console.log("Posicion de las reinas",posiciones);
    $("#contenedor").empty();
    // OBTENER CONTENEDOR
    var center = document.getElementById('contenedor');
    // CREAR TABLA
    var ChessTable = document.createElement('table');
    // CICLO FILAS
    for (var i = 0; i < casillas; i++) {
        // CREAR FILA
        var tr = document.createElement('tr');
        // CICLO CELDAS
        for (var j = 0; j < casillas; j++) {
            // SE AGREGA ID A LOS TR
            tr.setAttribute("id", i);

            // CREAR CELDA
            var td = document.createElement('td');
            // SE AGREGA ID A LOS TH
            td.setAttribute("id", "opcion" + posiciones.opcion + "-" + i + "-" + j);

            // SUMA DE CELDAS PAR
            if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            } else {
                td.setAttribute('class', 'cell blackcell');
                // AGREGAR CELDA A LA FILA
                tr.appendChild(td);
            }
        }
        // AGREGAR FILA
        ChessTable.appendChild(tr);
    }
    center.appendChild(ChessTable);
    ChessTable.setAttribute('cellspacing', '0');
    ChessTable.setAttribute('width', '300px');
    document.body.appendChild(center);
    // PRUEBA DE POSICION
    posiciones.datos.forEach(function (e, x) {
        $("#opcion" + posiciones.opcion + "-" + x + "-" + e).append("<center><i class='fa-solid fa-chess-queen fa-lg icon'></i><center>");
        // $("#opcion"+posiciones.opcion+"-"+x+"-"+e).append("<p class='reina'>Reina</p>");
        // console.log("#opcion"+posiciones.opcion+"-"+x+"-"+e);
    });
}