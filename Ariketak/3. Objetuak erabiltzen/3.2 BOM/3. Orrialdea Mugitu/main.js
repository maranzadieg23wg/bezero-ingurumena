let newWin;

function leioBerria(){
    newWin = window.open("", 200, 200);
}

function gora(){
    newWin.moveBy(0,-10)
}

function bera(){
    newWin.moveBy(0,10)
}

function eskubi(){
    newWin.moveBy(10,0)
}

function ezker(){
    newWin.moveBy(-10,0)
}
