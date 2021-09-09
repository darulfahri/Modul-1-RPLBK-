const merk =["xbox", "ps1", "ps2", "ps3", "ps4", "ps5", "nintendo switch"];

const tampilkan=() =>{
    var valueNama = document.getElementById("nama").value;
    (merk.indexOf(valueNama) >-1)?console.log(valueNama+" Terima kasih sudah memesan di toko kami, jadi sayang deh "):console.log(valueNama+" maaf ini bukan jenis console di toko kami, silahkan pergi ");
}