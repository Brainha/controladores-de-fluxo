// if...else

let temperature = 40
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature) {
  console.log('febre moderada')
} else {
  console.log('saudavel')
}
