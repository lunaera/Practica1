
const date = new Date();
console.log(`Fecha completa ${date}`);
console.log(`Solo Fecha: ${date.toDateString()}`);
console.log(`Año: ${date.getFullYear()}`);
console.log(`Mes: ${date.getMonth() + 1}`);
console.log(`Número del día de la semana: ${date.getDay()}`);
console.log(`Dia del mes: ${date.getDate()}`);
console.log(`Solo hora,min y seg: ${date.toLocaleTimeString()}`);

// YYYY - MM - DD
// YYYY / MM / DD

const date1 = new Date("2025-02-11");
const date2 = new Date("2025/02/11");
console.log(date1);
console.log(date2);