function convertGallons(gallons) {
  return gallons * 3.78541;
}

const gallons = prompt("How many gallons: ");
const conver = convertGallons(gallons);

alert(conver);