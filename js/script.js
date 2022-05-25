//Dibujar una X con ciclos
var n = 10;
var y = (n - 1);
document.write("Dibujar X <br/>");
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if ((i == j) || ((i + j) == y)) {
            document.write("*");
        }
        else {
            document.write("&nbsp ");
        }
    }document.write('<br/>')
}

//Dibujar una z 
var x = 1;
document.write("<br/>Dibujar Z <br/>");
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if ((i == 0) || (i == (n-1))) {
            document.write("*");
        }
        else if (j == (y - x)){
            document.write("*");
            x++;
            console.log(n)
        }else {
            document.write("&nbsp ");
        }
    }document.write('<br/>')
}