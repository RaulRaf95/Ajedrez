<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Ajedrez</title>
</head>

<body>

    <div class="container mx-auto">

        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Numero de casillas</label>
                <input type="number" class="form-control" id="casillas" min="8">
                <small id="emailHelp" class="form-text text-muted">El minimo aceptable es de 8</small>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Soluciones</label>
                <textarea class="form-control" id="text_area" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Solucion</label>
                <select class="form-control" id="select_solucion"></select>
            </div>
            <center>
                <button id="btn_enviar" type="button" class="btn btn-primary">Enviar</button>
                <button id="btn_dibujar" type="button" class="btn btn-secondary" hidden>Dibujar</button>
            </center>
        </form>
        <br>
        <div id="contenedor" class="d-flex justify-content-center"></div>
    </div>


    <script type="text/javascript" src="jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    <script type="text/javascript" src="Funciones.js"></script>

</body>

</html>