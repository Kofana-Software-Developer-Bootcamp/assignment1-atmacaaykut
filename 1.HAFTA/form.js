let kayit = [];
function kaydet() {

    let sozluk = {
        ad: document.getElementById("ad"),
        posta: document.getElementById("posta"),
        tel: document.getElementById("tel"),
        cinsiyet: document.getElementById("cinsiyet"),
        calisma: document.getElementById("calisma"),
        sehir: document.getElementById("sehir"),
        bolum: document.getElementById("bolum"),
        alan: document.getElementById("alan")
    }
    kayit.push(sozluk);
    // document.getElementById("frm").reset();
    console.table(kayit);
}