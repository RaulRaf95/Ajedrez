<?php
class Funciones { 
    var $size; 
    var $arr; 
    var $sol; 
    function Funciones($n = 8) {
        $this->size = $n;
        $this->arr = array();
        $this->sol = 0;
        $this->salida = array();
        $this->array_posicion = array();
        for($i=0; $i<$n; $i++) { 
            $this->arr[$i] = 0;
        }
    }

    function isSolution($n) {
        for ($i = 0; $i < $n; $i++) { 
            if ($this->arr[$i] == $this->arr[$n] || ($this->arr[$i] - $this->arr[$n]) == ($n - $i) ||
            ($this->arr[$n] - $this->arr[$i]) == ($n - $i)) 
                return false;
        }
        return true;
    }

    function PrintQueens() {
        // echo("solution #".(++$this->sol)."<br>");
        (++$this->sol);
        for ($i = 0; $i < $this->size; $i++) {
            for ($j = 0; $j < $this->size; $j++) {
                if ($this->arr[$i] == $j){
                    // echo("$j ");
                    array_push($this->array_posicion,$j);
                } else { 
                    // echo(". ");
                }
            }
            // echo("<br>");
        }
        // echo("<br>");

        
        // $this->salida[] = $this->array_posicion;
        $this->salida[] = array("opcion"=>$this->sol,"datos"=>$this->array_posicion);
        $this->array_posicion = array();
        // echo "<br>";
    }


    // backtracking Algorithm
    function run($n = 0) {
        if ($n == $this->size) 
            $this->PrintQueens();
        else {
            for ($i = 0; $i < $this->size; $i++) {
                $this->arr[$n] = $i;
                if ($this->isSolution($n)) 
                    $this->run($n+1);
            }
        }
    }

}

$numero_tablero = $_POST["info"];

$instancia = new Funciones($numero_tablero);
// $instancia = new Funciones(4);
$instancia->run();

echo json_encode($instancia->salida,JSON_UNESCAPED_UNICODE);

