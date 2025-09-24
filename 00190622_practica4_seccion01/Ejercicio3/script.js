function ordenar(arr) {
  const nuevoArray = [...arr]
  for (let i=0; i < nuevoArray.length; ++i) {
    for(let j = 0; j < nuevoArray.length - i - 1; j++){
      if (nuevoArray[j] > nuevoArray[j + 1]){
        let temporal = nuevoArray[j];
        nuevoArray[j] = nuevoArray[j + 1];
        nuevoArray[j + 1] = temporal;

      }
    }
  }
  return nuevoArray;
}

function esPar(numero){
  return numero % 2 === 0;
}

function calcularDiasCrecimiento(velocidadCrecimiento, VelocidadDecrecimiento, alturaDeseada){
  let altura = 0;
  let dias = 0;
  while(altura < alturaDeseada){
    altura += velocidadCrecimiento;
    dias++;
    if(altura >= alturaDeseada) {return dias}
    altura -= VelocidadDecrecimiento;
  }
  return dias;
}

console.log(esPar(7));

console.log(ordenar([14, 23, 99, 874, 93, 12]));

console.log(calcularDiasCrecimiento(1, 5, 10))

