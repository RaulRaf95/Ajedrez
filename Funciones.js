$(document).ready(function () {

});

$("#btn_enviar").click(function () {
    // NUMERO PARA EL TABLERO
    let casillas = $("#casillas").val();

    // FUNCIONA
    // PETICION AJAX PARA OBTENER LAS POSICIONES
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
                opciones += "Reina["+e.datos.toString()+"]" + "\n";
                // SE LLENA EL SELECT
                $("#select_solucion").append("<option value='" + JSON.stringify({opcion:e.opcion,datos:e.datos,casillas:casillas}) + "'>" + "Reina["+e.datos.toString()+"]" + "</option>");

                console.log(e);
            });

            // SE MANDA EL STRING AL TEXT AREA
            $("#text_area").val(opciones.trim());
        },error:function (data) {
            console.log("error",data);
        }
    });

    // console.log("click",casillas);
    // FUNCIONA
    // tablero(casillas);
});

/**
 * EVENTO CLICK DIBUJAR TABLERO
 */
$("#btn_dibujar").click(function () { 
    let objeto = JSON.parse($("#select_solucion").val());
    console.log(objeto);
    tablero(objeto.casillas,objeto)
});



function tablero(casillas,posiciones) {
    // console.log("Posicion de las reinas",posiciones);
    $("#contenedor").empty();
    // Create a center tag to center all the elements
    var center = document.getElementById('contenedor');
    // Create a table element
    var ChessTable = document.createElement('table');
    // CICLO FILAS
    for (var i = 0; i < casillas; i++) {
        // Create a row
        var tr = document.createElement('tr');
        // CICLO CELDAS
        for (var j = 0; j < casillas; j++) {
            // SE AGREGA ID A LOS TR
            tr.setAttribute("id",i);
            
            // Create a cell
            var td = document.createElement('td');
            // SE AGREGA ID A LOS TH
            td.setAttribute("id","opcion"+posiciones.opcion+"-"+i + "-" + j);

            // If the sum of cell coordinates is even
            // then color the cell white
            if ((i + j) % 2 == 0) {

                // Create a class attribute for all white cells
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            }
            // If the sum of cell coordinates is odd then
            // color the cell black
            else {
                // Create a class attribute for all black cells
                td.setAttribute('class', 'cell blackcell');
                // Append the cell to its row
                tr.appendChild(td);
            }
        }
        // Append the row
        ChessTable.appendChild(tr);

        
    }
    center.appendChild(ChessTable);
    // Modifiying table attribute properties
    ChessTable.setAttribute('cellspacing', '0');
    ChessTable.setAttribute('width', '300px');
    document.body.appendChild(center);

    // PRUEBA DE POSICION
    posiciones.datos.forEach(function(e,x) {
        $("#opcion"+posiciones.opcion+"-"+x+"-"+e).append("<p class='reina'>Reina</p>");
        // console.log("#opcion"+posiciones.opcion+"-"+x+"-"+e);
    });
}






