/* Atilhan Kara BOL4AO 14-10-2018*/
var smallprijs = 5
var mediumprijs = 10
var largeprijs = 15

var small = prompt("Hoeveel small pizza's wilt u hebben?")
var medium = prompt("Hoeveel medium pizza's wilt u hebben?")
var large = prompt("Hoeveel large pizza's wilt u hebben ?")

var smalltotaal = small * smallprijs;
var mediumtotaal = medium * mediumprijs;
var largetotaal = large * largeprijs;
var totaalprijs = smalltotaal + mediumtotaal + largetotaal;

document.write("Je hebt gekozen voor ", small, " small pizza : €" + smalltotaal +'<br>');
document.write("Je hebt gekozen voor ", medium, " medium pizza : €" + mediumtotaal +'<br>');
document.write("Je hebt gekozen voor ", large,  " large pizza : €" + largetotaal +'<br>');
document.write('<br>')
document.write("Totaal prijs is : € " + totaalprijs);
