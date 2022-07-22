$(document).ready(function () {
    
});

$("#btn_enviar").click(function () { 
    let casillas = $("#casillas").val();
    // console.log("click",casillas);
    tablero(casillas);
});

function tablero(casillas) {
    $("#contenedor").empty();
    let td = "";
    let tr = "";

    for (let i = 0; i < casillas; i++) {
        let clase = "blanco";
        if (i % 2 == 0) {
            clase = "negro";
        }
        td += "<td><div class='" + clase + "'></div></td>";
    }
    for (let j = 0; j < casillas; j++) {
        tr += "<tr>"+td+"</tr>"
    }
    

    $("#contenedor").append("<table border = '1'>"+tr+"</table>");
}