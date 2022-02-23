let kayit = [];
    let ad=document.getElementById("ad");
    let posta=document.getElementById("posta");
    let tel=document.getElementById("tel");
    let cinsiyet=document.getElementById("cinsiyet");
    let calisma=document.getElementById("calisma");
    let sehir=document.getElementById("sehir");
    let bolum=document.getElementById("bolum");
    let alan=document.getElementById("alan");

function kaydet() {

    let sozluk = {
        "ad" : ad.value,
        "posta": posta.value,
        "tel": tel.value,
        "cinsiyet":cinsiyet.value,
        "calisma": calisma.value,
        "sehir": sehir.value,
        "bolum": bolum.value,
        "alan": alan.value
    }
    kayit.push(sozluk);
    // document.getElementById("frm").reset();
    console.table(kayit);
}