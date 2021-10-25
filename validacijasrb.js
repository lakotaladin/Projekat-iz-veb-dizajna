function validacija(){
    var ime = document.getElementById('ime').value; //value zbog inputa,kojem smo dali id u html dokumentu
    var email = document.getElementById('email').value;
    var poruka = document.getElementById('poruka').value;
    var error_message = document.getElementById('error_message'); //error box
    // Izgled obavestenja za error box
    error_message.style.padding = "15px";

/* 
Zahtevi za validaciju su sledeći :

Ime i prezime: moraju da budu sve velika slova i ime od prezimena da bude razdvojeno znakom _
Ne smeju da sadrze brojeve, specijalne karaktere i mala slova. Prezime moze da sadrzi razmak (space).

E-mail adresa: mora da pocinje slovom, nakon toga mogu biti specijalni karakteri, cifre ili slova, ali pre znaka @ mora biti slovo ili cifra.
Ostali deo je standardni kao za sve e-mail adrese da moze biti @gmail.com @np.ac.rs ...

Poruka: Moze da sadrzi do 500 karaktera. Moze biti kombinacija malih i velikih slova i znakova interpukcije. Na kraju poruke mora biti broj osobe koja pise poruku i to u formatu xxx/xxx-xx-xx npr 063/613-33-33

*/
// provera zahteva
     imeprovera = /^\w+[A-Z]\s\w+[A-Z]$/; // da pisu samo velika slova
     emailprovera = /[A-Za-z.#$%^&]{1,}[\w]{1,}[A-Za-z0-9]{1}@([\w]+\.)+[\w]{2,4}/; //za email
     porukaprovera = /[\w\s\.,_:;'"!@$#|&*()_ =]{1,500}\s\d{3}\/\d{3}-\d{2}-\d{2}\;  //za poruku i broj
//naredba za upit za metodom test    
    var obavestenje;
    if(imeprovera.test(ime) == false ){
        obavestenje = "Molimo Vas unesite validno ime i prezime,moraju biti sve velika slova.";
        error_message.innerHTML = obavestenje;
       
    }

    else if(emailprovera.test(email) == false ){
      obavestenje = "Molimo Vas unesite validan mejl,pre '@' moraju biti slova,brojevi,spec. karakteri.";
      error_message.innerHTML = obavestenje;
     
    }

    else if(porukaprovera.test(poruka) == false){
      obavestenje = "Poruka moze da sadrzi do 500 karaktera i na kraju broj formata xxx/xxx-xx-xx";
      error_message.innerHTML = obavestenje;
     
    }
    else{
      // ukoliko je uslov ispunjen otvara novi prozor 
      window.open("valid.html");
         return true;
    }
        
}
// pozivanje funkcije
validacija();

var new Date = (vreme) => console.log(vreme);