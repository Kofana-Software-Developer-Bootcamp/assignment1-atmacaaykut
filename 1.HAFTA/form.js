let kayit=[];

function kaydet(){

    var ad=document.getElementById("ad");
    var posta=document.getElementById("posta");
    var tel=document.getElementById("tel");
    var cinsiyet=document.getElementById("cinsiyet");
    var calisma=document.getElementById("calisma");
    var sehir=document.getElementById("sehir");
    var bolum=document.getElementById("bolum");
    var alan=document.getElementById("alan");
    

    var liste={
        kadi: `${ad.value}`,
        eposta:`${posta.value}`,
        telefon:`${tel.value}`,
        cins:`${cinsiyet.value}`,
        calismadurumu:`${calisma.value}`,
        ikamet:`${sehir.value}`,
        mezuniyet:`${bolum.value}`,
        tercih:`${alan.value}`

    };

    kayit.push(liste);
   document.getElementById("frm").reset();
   console.table(kayit);
  
}
