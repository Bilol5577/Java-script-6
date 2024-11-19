
let fruits = ["olma", "bana", "gilos", "nok"];
console.log(fruits);

alert(`Boshlanishda Array uzunligi ${fruits.length}`);

let isConfirmed = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimisiz?");

if (isConfirmed) { 
    let lastFruit = fruits.pop(); 
    console.log(fruits); 
    alert(`Array uzunligi: ${fruits.length}`);
} else { 
    alert(`Array uzunligi: ${fruits.length}`);
}