const chair = 15.678;
const sofa = 123.965;
const armchair = 90.2345;

const maxNumber = Math.max(chair, sofa, armchair);
console.log('Максимальне число: ' + maxNumber);

const minNumber = Math.min(chair, sofa, armchair);
console.log('Мінімальне число: ' + minNumber);

const sumPrice = chair + sofa + armchair;
console.log('Вартість всіх товарів: ' + sumPrice + ' грн');

const roundedSum = Math.floor(chair) + Math.floor(sofa) + Math.floor(armchair);
console.log('Сума без копійок: ' + roundedSum);

const roundedSumPrice = Math.round(roundedSum / 100) * 100;
console.log('Округлена сума товарів: ' + roundedSumPrice);

const pairNumber = roundedSum % 2 === 0;
console.log('Чи є сума всіх товарів парним числом: ' + pairNumber);

const customerCash = 500;
const allSum = customerCash - sumPrice;
console.log('Залишок: ' + allSum);

const averageSum = +(sumPrice / 3).toFixed(2);
console.log('Середнє значення цін: ' + averageSum + ' грн');

const discount = Math.round(sumPrice * 100) / 100;
console.log('Знижка: ' + discount + ' %');

const sumPay = ((1 - discount) * sumPrice).toFixed(2);
console.log('Сума до оплати: ' + sumPay + ' грн');

const cash = ((sumPrice / 2) - discount * sumPrice).toFixed(2);
console.log('Чистий прибуток: ' + cash + ' грн');


console.log(`Максимальне число: ${maxNumber}
Мінімальне число: ${minNumber}
Вартість всіх товарів: ${sumPrice} грн
Округлена сума товарів: ${roundedSum} грн
Чи є сума всіх товарів парним числом: ${pairNumber}
Залишок: ${allSum} грн
Середнє значення цін: ${averageSum} 
Знижка: ${discount}%
Сума до оплати: ${sumPay} грн
Чистий прибуток: ${cash} грн`);