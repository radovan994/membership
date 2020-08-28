function proveraForme(forma){
    var poljeIme = forma.ime;
    if(poljeIme.value == ""){
        alert("Molimo vas unesite ime");
        return false;
    }
    var poljePrezime = forma.prezime;
    if(poljePrezime.value == ""){
        alert("Molimo vas unesite prezime");
        return false;
    }
    if(poljeIme.value[0] != poljeIme.value[0].toUpperCase()){
        alert("ime mora imati veliko pocetno slovo");
        return false;
    }
    if(poljePrezime.value[0] != poljePrezime.value[0].toUpperCase()){
        alert("prezime mora imati veliko pocetno slovo");
        return false;
    }
}

function provera(premium){
    if(premium.checked == true){
        document.getElementById("sel1").disabled = false;
    }else{
        document.getElementById("sel1").disabled = true;
        document.getElementById("submitbtn").style.backgroundColor = "white";
    }
}

function promenaBoje(polje){
    if(polje.value == 1){
        document.getElementById("submitbtn").style.backgroundColor = "silver";
    }
    if(polje.value == 2){
        document.getElementById("submitbtn").style.backgroundColor = "gold";
    }
    if(polje.value == 3){
        document.getElementById("submitbtn").style.backgroundColor = "skyblue";
    }
}