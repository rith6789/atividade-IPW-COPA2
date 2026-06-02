function MostrarLider() {
    let br = 10;
    let esc = 8;
    let mar = 6;
    let hai = 4;
    lider = "";
    if (br > esc && br > mar && br > hai) {
        lider = "Brasil";
    }
    else if (esc > mar && esc > hai) {
        lider = "Escócia";
    }
    else if (mar > hai) {
        lider = "Marrocos";
    }
    else {
        lider = "Haiti";
    }   
    document.getElementById("lider").innerText = lider;
}