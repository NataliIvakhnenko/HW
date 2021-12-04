let credits = 35500;
let pricePerDroid = 3000;
let input = Number (prompt ("Необходимое количество?"));
let msg = "Недостаточно средств на счету!";
// let totalPrice = number * pricePerDroid



// if ( quation === null) {
//     alert("Отменено пользователем!");
// }

// else if (totalPrice > credits)

//     {alert("Недостаточно средств на счету!")}

if (input) {
  let totalPrice = input * pricePerDroid;
  let balance = credits - totalPrice;
  totalPrice > credits
  ? alert(msg) 
   : alert(`Вы купили ${input} дроидов, на счету осталось ${balance} кредитов`);

}
else {
    alert("Отменено пользователем!");
}

