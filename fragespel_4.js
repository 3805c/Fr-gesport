let svar = [0, 1, 1, 2, 2, "x"];
//Lista med rätt svar tillhörande frågornas ordning.
let n_Questions = svar.length - 1;
//n_Questions är en lista med antal frågor.
let rätt_Svar = 0;
let Rfrågor = [];
//Rfrågor och rätt_svar menas med antal korrekt svarade frågor.
let Ffrågor = [];
//Ffrågor menas med antal felaktigt svarade frågor.

let frågor = [
  0,
  "Vad är 7 delat på 3.5? \n 1: 2 \n x: 1.04 \n 2: 4.3",
  "Vad heter Åva Gymnasiums rektor? \n 1: Lillemor Larsson \n x: Magnus Karlsson \n 2: Peter Schabowski",
  "Vilket av följande länder är riktiga? \n 1: Donetsk \n x: Luhansk \n 2: Inget av ovanstående",
  "Hur mycket väger ett svenskt äpple i snitt? \n 1: 200 g \n x: 125 g \n 2: 180 g",
  "När invigdes Åva Gymnasium? \n 1: 1975 \n x: 1972 \n 2: 1969",
]; //Detta är de frågor som finns att spela med från början.

function meny() {
  //Denna funktion hanterar startmenyn.
  let val = prompt(
    "Välkommen till vår frågesport! Välj mellan att spela med de befintliga frågorna (1) eller att ändra frågorna (2)."
  );
  if (val == 1) {
    spela();
  } else if (val == 2) {
    undermeny_läggtill_eller_börjaom();
  } else {
    alert("Ogiltigt alternativ, försök igen!");
    meny();
  }
}

function spela() {
  //Denna funktion hanterar själva spelet.
  användarNamn = prompt(
    "Varmt välkommen till våran frågesport! Du kommer strax få att besvara ett antal frågor, men först vill vi veta ditt namn! Ange det nedan tack."
  );
  //Ovan anges användarnamnet.
  alert(
    `Välkommen ${användarNamn}! Vad kul att du vill delta. Klicka på OK för att gå vidare till frågorna :)`
  );

  for (let i = 1; i < frågor.length; ) {
    //En loop som ställer fråga på fråga tills listan på frågor är slut.
    let ans = prompt(frågor[i]);
    if (ans == svar[i]) {
      //Kontrollerar om svaret spelaren angett stämmer med det rätta svaret som lagras i listan "svar".
      rätt_Svar += 1; //Om svaret är rätt adderas 1 till variabeln "rätt_Svar"
      alert(`Fråga ${i}: RÄTT`);
      Rfrågor.push(i); //Frågan läggs till i listan "Rfrågor" som innehåller de frågor spelaren svarat rätt på.
      i++;
    } else if (ans != svar[i] && (ans == 1 || ans == "x" || ans == 2)) {
      //Om svaret spelar angett är fel men ändå är ett tillåtet alternativ.
      alert(`Fråga ${i}: FEL`);
      Ffrågor.push(i); //Frågan läggs till i listan "Rfrågor" som innehåller de frågor spelaren svarat fel på.
      i++;
    } else {
      //Om spelaren angett ett ogiltigt alternativ.
      alert("Ogiltigt alternativ, försök igen!");
    }
  }

  let procentSats = (rätt_Svar / n_Questions) * 100;
  alert(
    `Bra jobbat ${användarNamn}! Du ska nu få se resultatet från frågesporten.`
  );
  if (Rfrågor.length == n_Questions) {
    alert(`Du svarade rätt på samtliga frågor! Bra jobbat ${användarNamn}!`);
  } else if (Ffrågor.length == n_Questions) {
    alert("Du hade tyvärr fel på samtliga frågor :/");
  } else {
    alert(
      `Du fick ${rätt_Svar} poäng av ${n_Questions} möjliga. Du hade rätt på fråga ${Rfrågor}, men dessvärre hade du fel på fråga ${Ffrågor}. Sammanlagt fick du ${procentSats}% av frågorna rätt.`
    );
  }
  rätt_Svar = 0;
  Rfrågor = [];
  Ffrågor = [];
  meny();
}

function ändra() {
  let frågeställing = prompt("Ange din nya fråga: ");
  let alternativ_1 = prompt("Ange alternativ 1: ");
  let alternativ_2 = prompt("Ange alternativ x: ");
  let alternativ_3 = prompt("Ange alternativ 2: ");
  function rätt_svar_ny() {
    let rätt_svar = prompt("Ange vilket svar, 1, x eller 2, som är rätt:");
    if (rätt_svar == 1 || rätt_svar == "x" || rätt_svar == 2) {
      svar.push(rätt_svar);
    } else {
      alert("Ogiltigt alternativ, försök igen!");
      rätt_svar_ny();
    }
  }
  rätt_svar_ny();
  let ny_fråga =
    frågeställing +
    "\n" +
    "1: " +
    alternativ_1 +
    "\n" +
    "x: " +
    alternativ_2 +
    "\n" +
    "2: " +
    alternativ_3;
  frågor.push(ny_fråga);
  n_Questions += 1;
  function undermeny_ändra() {
    let undermeny_val = prompt(
      "Din fråga har lagts till. Vill du lägga till ytterligare en (1) eller gå tillbaka till huvudmenyn (2)?"
    );
    if (undermeny_val == 1) {
      ändra();
    } else if (undermeny_val == 2) {
      meny();
    } else {
      alert("Ogiltigt alternativ, försök igen!");
      undermeny_ändra();
    }
  }
  undermeny_ändra();
}

function undermeny_läggtill_eller_börjaom() {
  let undermeny_val = prompt(
    "Vill du rensa de befintliga frågorna och börja om på nytt (1) eller behålla dem och lägga till fler (2)?"
  );
  if (undermeny_val == 1) {
    frågor = [0];
    svar = [0];
    n_Questions = svar.length - 1;
    ändra();
  } else if (undermeny_val == 2) {
    ändra();
  } else {
    alert("Ogiltigt alternativ, försök igen!");
    undermeny_läggtill_eller_börjaom();
  }
}

meny();
