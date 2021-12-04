
let massage = "Добро пожаловать!";
let path = prompt("password");
const ADMIN_PASSWORD = "adminpass";

if (path === null) {
    alert("Отменено пользователем!")
}
if (path === ADMIN_PASSWORD) {
  alert(massage);
 }
 else {
  alert("Доступ запрещен, неверный пароль!");
}
