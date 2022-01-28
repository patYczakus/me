const listahasel = [
	{
		"tekst":"Bez pracy nie ma kołaczy",
		"kategoria":"PRZYSŁOWIE",
	},
	{
		"tekst":"Ferdek kiepski",
		"kategoria":"AKTOR FILMOWY (PL)",
	},
	{
		"tekst":"Jak Kuba Bogu, tak Bóg Kubie",
		"kategoria":"PRZYSŁOWIE",
	},
	{
		"tekst":"HTML / CSS / JS",
		"kategoria":"WYKORZYSTANE JĘZYKI NA STRONIE",
	},
	{
		"tekst":"STAROŚĆ, NIE RADOŚĆ; MŁODOŚĆ, NIE Wieczność",
		"kategoria":"PRZYSŁOWIE",
	},
	{
		"tekst":"TU LEŻY PIES POGRZEBANY",
		"kategoria":"PRZYSŁOWIE",
	},
	{
		"tekst":"KRZYKIEM SKRZYPIEC NIE NASTROISZ",
		"kategoria":"PRZYSŁOWIE",
	},
	{
		"tekst":"GDZIE DRWA RĄBIĄ, TAM WIÓRY LECĄ",
		"kategoria":"PRZYSŁOWIE",
	},
	{
		"tekst":"Minecraft",
		"kategoria":"Gra komputerowa",
	},
	{
		"tekst":"Kwas Siarkowodorowy",
		"kategoria":"Chemia",
	},
	{
		"tekst":"Kto z rana wstaje, temu Pan bóg daje",
		"kategoria":"PRZYSŁOWIE",
	},
	{
		"tekst":"Axe",
		"kategoria":"Jedna z ksywek dziewczyny Patyczaka",
	},
	{
		"tekst":"CyberAngel236",
		"kategoria":"Jedna z ksywek dziewczyny Patyczaka",
	},
	{
		"tekst":"CyberAngel236",
		"kategoria":"Jedna z ksywek dziewczyny Patyczaka",
	},
	{
		"tekst":"NIESZCZĘŚCIA CHODZĄ PARAMI",
		"kategoria":"Przysłowie",
	},
	{
		"tekst":"Chris Brown",
		"kategoria":"Zagraniczny piosenkarz",
	},
	{
		"tekst":"Jon Bon Jovi",
		"kategoria":"Zagraniczny piosenkarz",
	},
	{
		"tekst":"Dżem",
		"kategoria":"Polski zespół",
	},
	{
		"tekst":"Ed Sheeran",
		"kategoria":"Zagraniczny piosenkarz",
	},
	{
		"tekst":"Trudne Hasło",
		"kategoria":"hasło",
	},
	{
		"tekst":"IE",
		"kategoria":"Emulator przeglądarkowy",
	},
	{
		"tekst":"Spotify",
		"kategoria":"serwis strumieniowy",
	},
	{
		"tekst":"Złodziej poduszek",
		"kategoria":"Ksywka Patyczaka",
	},
]

var numhas = Math.floor(Math.random() * listahasel.length);
var haslo = listahasel[numhas].tekst;
haslo = haslo.toUpperCase();
var kategory = listahasel[numhas].kategoria;
kategory = kategory.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("../scr/sounds/yes.mp3")
var no = new Audio("../scr/sounds/no.wav")
var przegrana = new Audio("../scr/sounds/przegrana.mp3")
var wygrana = new Audio("../scr/sounds/wygrana.mp3")
var oodslon = new Audio("../scr/sounds/odslon.wav")

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else if (haslo.charAt(i)==",") haslo1 = haslo1 + ",";
	else if (haslo.charAt(i)=="/") haslo1 = haslo1 + "/";
	else if (haslo.charAt(i)==";") haslo1 = haslo1 + ";";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(44);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";
litery[35] = "0";
litery[36] = "1";
litery[37] = "2";
litery[38] = "3";
litery[39] = "4";
litery[40] = "5";
litery[41] = "6";
litery[42] = "7";
litery[43] = "8";
litery[44] = "9";



function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<litery.length; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	document.getElementById("statystyki").innerHTML = `Kategoria: <span class="d">${kategory}</span>`
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";")

		wypisz_haslo();
		if (haslo != haslo1) yes.play()
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		if (ile_skuch<8)
		no.play()
		ile_skuch++;
		if (ile_skuch < 3) var kolor = {
			"backround": "background-color: green;",
			"border-a": "border-bottom: 4px solid rgb(0, 170, 0);",
			"border-b": "border-left: 6px solid rgb(0, 170, 0);",
		}
		else if (ile_skuch > 2 && ile_skuch < 6) var kolor = {
			"backround": "background-color: yellow;",
			"border-a": "border-bottom: 4px solid rgb(255, 255, 200);",
			"border-b": "border-left: 6px solid rgb(255, 255, 200);",
		}
		else if (ile_skuch > 5 && ile_skuch < 8) var kolor = {
			"backround": "background-color: red;",
			"border-a": "border-bottom: 4px solid rgb(255, 130, 130);",
			"border-b": "border-left: 6px solid rgb(255, 130, 130);",
		}
		else var kolor = {
			"backround": "background-color: rgb(112, 4, 4);",
			"border-a": "border-bottom: 4px solid red;",
			"border-b": "border-left: 6px solid red;;",
		}
		if (ile_skuch != 9) var zycia = `<div class="zycia" style="${kolor.backround} ${kolor["border-a"]} ${kolor["border-b"]}"></div>`;
		else var zycia = `<div style="width: 900px; height: 43px; background-color: grey; text-align: center; border-style: none;">💔</div>`
		for (i=2; i<=9-ile_skuch; i++) zycia = zycia + `<div class="zycia" style="${kolor.backround} ${kolor["border-a"]}"></div>`;
		document.getElementById("szubienica").innerHTML = zycia;
	}
	
	//wygrana
	if (haslo == haslo1) {
		document.getElementById("statystyki").innerHTML = `KONIEC MECZU!`
		document.getElementById("alfabet").innerHTML  = 'Tak jest! Podano prawidłowe hasło!<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
		document.getElementById("type").innerHTML = '<button class="button" disabled><span class="d">L</span>osuj nowe hasło</button> <button class="button" onclick="window.location.href = `games.html`"><span class="d">W</span>róć do Rich Presence Games &lt;--</button> <button class="button" disabled><span class="d">O</span>dsłoń hasło</button>'
		wygrana.play()
	}
	//przegrana
	if (ile_skuch>=9) {
		document.getElementById("statystyki").innerHTML = `KONIEC MECZU!`
		przegrana.play()
		document.getElementById("alfabet").innerHTML  = `Przegrana! Prawidłowe hasło: ${haslo} (${kategory})<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>`;
		document.getElementById("type").innerHTML = '<button class="button" disabled><span class="d">L</span>osuj nowe hasło</button> <button class="button" onclick="window.location.href = `games.html`"><span class="d">W</span>róć do Rich Presence Games &lt;--</button> <button class="button" disabled><span class="d">O</span>dsłoń hasło</button>'
	}
}

function odslon() {
	oodslon.play()
	document.getElementById("plansza").innerHTML = haslo
	document.getElementById("alfabet").innerHTML = `Odsłonięto hasło! (${haslo})<br />Kategoria: ${kategory}<br /><br /><span class="reset" onclick="location.reload()">LOSUJ NOWE!</span>`;
	document.getElementById("type").innerHTML = '<button class="button" disabled><span class="d">L</span>osuj nowe hasło</button> <button class="button" onclick="window.location.href = `games.html`"><span class="d">W</span>róć do Rich Presence Games &lt;--</button> <button class="button" disabled><span class="d">O</span>dsłoń hasło</button>'
	document.getElementById("statystyki").innerHTML = `ODSŁONIĘTO HASŁO!`
	document.getElementById("szubienica").innerHTML = `<div style="width: ${(9 - ile_skuch) * 100}px; height: 43px; background-color: orange; text-align: center; border-style: none;"></div>`
}