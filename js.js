// 11. Потрібно отримати користувачів системи. Вивести список користувачів в консоль. Отримаємо через постман. Хардкодимо в скрипті. Поки =)


let  resultsData = data.results;

for (let user of resultsData) {
    console.log(`Список клієнтів ${user.name.title} ${user.name.first} ${user.name.last}`)
}

// 2. Потрібно розділити користувачів на дві групи: жінки та чоловіки. Вивести кількість жінок та кількість чоловіків.
let maleKlient = [];
let femaleKlient = [];
for (let user of resultsData){
if (user.name.title === 'Mr') { maleKlient.push(user)} else {femaleKlient.push(user)} 
}
console.log("Кількість чоловіків " + maleKlient.length);
console.log("Кількість жінок " + femaleKlient.length);

// 3. Поступив запит від начальства, що кожному з користувачів потрібно замінити номер телефону на
//  один робочий. Поточний phone переписати в cell. Поточний cell переписати в personal. Робочий телефон: (225)-181-9520

let workNumber = '(225)-181-9520';
for (let user of resultsData) {
    user.cell = user.phone;
    user.personal = user.cell;
    user.phone = workNumber;

}

// 4. Перевірити емейл кожного користувача (чи там записаний емейл) і привести всі емейли згідно схеми:
//  Перша буква імені . прізвище @be stwork.com. Приклад o.isaryk@bestwork.com


console.log('zavd4')
let nameMale = '';

for (let user of resultsData) {
user.email ? user.email : 'default';
user.email = user.name.first.substring(0, 1).toLowerCase() + '.' + user.name.last.toLowerCase() + '@bestwork.com';;
console.log(user.email);

}

