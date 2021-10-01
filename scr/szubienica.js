var losuj = Math.floor(Math.random()*29+1);
if (losuj=="1") var haslo = "Gamingowce";
else if (losuj=="2") var haslo = "Współpraca się opłaca";
else if (losuj=="3") var haslo = "Siema eniu";
else if (losuj=="4") var haslo = "Tajne hasło";
else if (losuj=="5") var haslo = "Rogal";
else if (losuj=="6") var haslo = "Zagraj w wisielca";
else if (losuj=="7") var haslo = "Skucha";
else if (losuj=="8") var haslo = "Hobbit czyli tam i z powrotem";
else if (losuj=="9") var haslo = "Czego jaś się nie nauczy tego jan nie będzie umiał";
else if (losuj=="10") var haslo = "Mariusz Pudzianowski";
else if (losuj=="11") var haslo = "Władcy diamenta";
else if (losuj=="12") var haslo = "Kozie mleko";
else if (losuj=="13") var haslo = "Curry";
else if (losuj=="14") var haslo = "XD";
else if (losuj=="15") var haslo = "Karol Edward Strasburger";
else if (losuj=="16") var haslo = "strona internetowa";
else if (losuj=="17") var haslo = "Życie maryly rodowicz jest nieśmiertelne";
else if (losuj=="18") var haslo = "there is one impostor";
else if (losuj=="19") var haslo = "Święty domian";
else if (losuj=="20") var haslo = "IE";
else if (losuj=="21") var haslo = "Firefox";
else if (losuj=="22") var haslo = "crit";
else if (losuj=="23") var haslo = "Menel";
else if (losuj=="24") var haslo = "fortkidy";
else if (losuj=="25") var haslo = "kashanka";
else if (losuj=="26") var haslo = "Zbigniew Ziobro";
else if (losuj=="27") var haslo = "Kto umrze to umrze i trudno";
else if (losuj=="28") var haslo = "To by nic nie dało";
else var haslo = "CocaCola czy Pepsi";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "■";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

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



function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
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
		
		wypisz_haslo();
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
		ile_skuch++;
		var obraz = "img/sub/s"+ ile_skuch + ".png";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="", height="280", weight="280" />';
	}
	
	//wygrana
	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//przegrana
	if (ile_skuch>=8)
	document.getElementById("alfabet").innerHTML  = "Przegrana! Wisisz<br />Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
