function prikaziSat(){
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var sesija = "AM";
	
	if(h >= 12){
	  h = h - 12;
	  sesija = "PM";
	}

	if(h == 0){
	  h = 12;
	}

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var vreme = h + ":" + m + ":" + s + " " + sesija;
	document.getElementById("prikazSata").innerText = vreme;
	document.getElementById("prikazSata").textContent = vreme;

	setTimeout(prikaziSat, 1000);
  }

  prikaziSat();
