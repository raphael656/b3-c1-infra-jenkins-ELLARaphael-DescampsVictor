"calculatrice  arithemeique"

function tchad1(x) {
    var ko = x.value;
    var ecran = document.getElementById("kore1");
    ecran.value += ko;
}

function resultat() {
    ecran = document.getElementById("kore1");
    ecran.value = eval(ecran.value);

}

function effacer() {
    ecran = document.getElementById("kore1");
    ecran.value = "";
}


function fermer() {
    window.close();
}

function racine() {
    ecran = document.getElementById("kore1");
    var resultat = Math.sqrt(ecran.value);
    ecran.value = resultat;
}

function decimal(x) {
    ecran = document.getElementById("kore1");
    ecran.value += x;
}

function effacer1() {
    ecran = document.getElementById("kore1");
    ecran.value = 0;

}

function cleanonebyone() {
    var ecran = document.getElementById("kore1").value;
    document.getElementById("kore1").value = ecran.substring(0, ecran.length - 1);

}
