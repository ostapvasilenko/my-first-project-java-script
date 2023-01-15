// let name = 'Ostap'
// let surname = 'Vasylenko'
// let middleName = 'Andriyovych'

// let arraySome = [2, 13, 6, 13, 56];
// const position = arraySome.indexOf('6');
// let someStr = "sdsdsdfsg"


// try{

// }catch{

// }

// if(position >= 0){
//   console.log(`Число ${6} є в масиві`)
// }else{
//   console.log(`Число ${6} не є в масиві`)
// }

// arraySome.splice(2, 1)

// const position = arraySome.indexOf('hello');
// arraySome.splice(position, 1)


// console.log('Array:', arraySome)

//Array

// let age =[12, 13, 22, 13, 17];


// const personalData = surname + '.' + ' ' + name[0] + '.' + ' ' + middleName[0]



// console.log('Data :', personalData);




//Обєкти


let personalData = {
  name: 'Ostap',
  surName: 'Vasulenko',
  lastName: 'Andriyovych',
  address: {
    city: 'Drogobych',
    street: 'Ckhilna',
    number: 82,

    metrics: {
      water: 14521,
      has: 154949
    }
  },
  age: [12, 23, 45],
  isChildren: false
}

const age = Number(prompt('Введіть ваш вік :'))
console.log(typeof age)

if (age >= 0){
  if(age < 18){
    console.log('Ви неповнолітній!')
  } else if(age >= 18 && age < 21){
    console.log('Ви повнолітній в Україні!')
  } else{
    console.log('Ви повнолітній в усьому світі!')
  }
} else{
 console.log('Ви ввели невірні дані!!!')
}

// personalData.size ='XXL'
// console.log(personalData)

// let someVar = (personalData.age[1]);
// console.log(typeof (someVar))

// console.log(personalData.name)
// console.log(personalData.address.street, personalData.address.number)
// console.log(personalData.age.length)

