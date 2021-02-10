let billettene = [];

function reg() {

    const billett = {
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val(),
        antall : $("#antall").val(),
        film : $("#film").val()
    };
    const feil = validerInput();
    if(!feil){
        billettene.push(billett);

        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
        $("#antall").val("");
        $('#film').get(0).selectedIndex = 0;
    }

    visAlleBilletter();
}
function visAlleBilletter(){
    let ut="<table><tr><th>Film</th><th>Antall</th>";
    ut+="<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (let b of billettene ){
        ut+="<tr><td>"+b.film+"</td><td>"+b.antall;
        ut+="<td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost;
        ut+="</td></tr>";
    }
    $("#alleBillettene").html(ut);
}

function slettAlle(){
    billettene = [];
    visAlleBilletter();
}

function validerInput(){
    $("#fornavnFeil").html("");
    $("#etternavnFeil").html("");
    $("#telefonnrFeil").html("");
    $("#epostFeil").html("");
    $("#antallFeil").html("");
    let feil = false;
    if($("#fornavn").val()===""){
        $("#fornavnFeil").html("Må skrive noe inn i fornavnet");
        feil=true;
    }
    if($("#etternavn").val()===""){
        $("#etternavnFeil").html("Må skrive noe inn i etternavnet");
        feil=true;
    }
    if($("#telefonnr").val()===""){
        $("#telefonnrFeil").html("Må skrive noe inn i telefonnr");
        feil=true;
    }
    if($("#epost").val()===""){
        $("#epostFeil").html("Må skrive noe inn i epost");
        feil=true;
    }
    if($("#antall").val()===""){
        $("#antallFeil").html("Må skrive noe inn i antall");
        feil=true;
    }
    return feil;
}
