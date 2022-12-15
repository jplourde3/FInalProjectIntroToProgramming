var form;

form = document.getElementById("cashRegisterCounting");

form.addEventListener("submit", function(event){
  var total = 0.00;
  var startingValue = 115.00;
  var pennies1;
  var nickles1;
  var dimes1;
  var quarters1;
  var otherChange1 = 0;
  var oneDollar1;
  var fiveDollar1;
  var tenDollar1;
  var twentyDollar1;
  var otherDollar1 = 0;

  var penniesConverted;
  var nicklesConverted;
  var dimesConverted;
  var quartersConverted;
  var oneDollarConverted;
  var fiveDollarConverted;
  var tenDollarConverted;
  var twentyDollarConverted;

  var outputMessage;

  var startingDrawer = [" 100 pennies ", " 40 nickles ", " 30 dimes ", " 36 quarters ", " 25 ones ", " 15 fives ", " 0 tens ", "  0 twenties "];

  event.preventDefault;

  pennies1 = document.getElementById("pennies");
  nickles1 = document.getElementById("nickles");
  dimes1 = document.getElementById("dimes");
  quarters1 = document.getElementById("quarters");
  otherChange1 = document.getElementById("otherChange");
  oneDollar1 = document.getElementById("oneDollar");
  fiveDollar1 = document.getElementById("fiveDollar");
  tenDollar1 = document.getElementById("tenDollar");
  twentyDollar1 = document.getElementById("twentyDollar");
  otherDollar1 = document.getElementById("otherDollar");

  pennies1 = Number(pennies1.value);
  nickles1 = Number(nickles1.value);
  dimes1 = Number(dimes1.value);
  quarters1 = Number(quarters1.value);
  otherChange1 = Number(otherChange1.value);
  oneDollar1 = Number(oneDollar1.value);
  fiveDollar1 = Number(fiveDollar1.value);
  tenDollar1 = Number(tenDollar1.value);
  twentyDollar1 = Number(twentyDollar1.value);
  otherDollar1 = Number(otherDollar1.value);

  penniesConverted = pennies1 * 0.01;
  nicklesConverted = nickles1 * 0.05;
  dimesConverted = dimes1 * 0.10;
  quartersConverted = quarters1 * 0.25;
  oneDollarConverted = oneDollar1 * 1.00;
  fiveDollarConverted = fiveDollar1 * 5.00;
  tenDollarConverted = tenDollar1 * 10.00;
  twentyDollarConverted = twentyDollar1 * 20.00;

  total = penniesConverted + nicklesConverted + dimesConverted + quartersConverted + otherChange1 + oneDollarConverted + fiveDollarConverted + tenDollarConverted + twentyDollarConverted + otherDollar1 - 115;

  alert("The total deposit is " + total);

  if (total > startingValue) {

    var deposit = total - 115.00

    for(i=0; i  <startingDrawer.length; ++i){
      alert("Please refill the drawer with " + startingDrawer[i]);
    };

  } else {
    alert("Recount Drawer!");
  };

  if (pennies1 < 100) {
    alert("Ask manager to grab pennies from safe.");
  } if (nickles1 < 40) {
    alert("Ask manager to grab nickles from safe.");
  } if (dimes1 < 30) {
    alert("Ask manager to grab dimes from safe.");
  } if (quarters1 < 36) {
    alert("Ask manager to grab quarters from safe.");
  } if (oneDollar1 < 25) {
    alert("Ask manager to grab one dollar bills from safe.");
  } if (fiveDollar1 < 15) {
    alert("Ask manager to grab five dollar bills from safe.");
  };

  alert("Have a great night!");

})