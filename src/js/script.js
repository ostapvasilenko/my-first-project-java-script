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


// let personalData = {
//   name: 'Ostap',
//   surName: 'Vasulenko',
//   lastName: 'Andriyovych',
//   address: {
//     city: 'Drogobych',
//     street: 'Ckhilna',
//     number: 82,

//     metrics: {
//       water: 14521,
//       has: 154949
//     }
//   },
//   age: [12, 23, 45],
//   isChildren: false
// }
// const a = prompt('Введіть число')

// // if (a > 1 && a < 5){
// // console.log('Sucess')
// // } else
// // console.log('Fail')

// if (a == 0 || a > 5){
//   console.log('Sucess')
//   } else
//   console.log('Fail')

// const age = prompt('Введіть ваш вік :')
// console.log(typeof age)

// if (age >= 0){
//   if(age < 18){
//     console.log('Ви неповнолітній!')
//   } else if(age >= 18 && age < 21){
//     console.log('Ви повнолітній в Україні!')
//   } else{
//     console.log('Ви повнолітній в усьому світі!')
//   }
// } else{
//  console.log('Ви ввели невірні дані!!!')
// }

// personalData.size ='XXL'
// console.log(personalData)

// let someVar = (personalData.age[1]);
// console.log(typeof (someVar))

// console.log(personalData.name)
// console.log(personalData.address.street, personalData.address.number)
// console.log(personalData.age.length)

// const secretNum = prompt('Введіть ваш вік :')
// console.log(typeof secretNum)

// if (secretNum = 5){
//   if(secretNum < 5){
//     console.log('Ви ввели менше число!')
//   } else if(secretNum > 5 ){
//     console.log('Ви ввели менше число')
//   } else{
//     console.log('Ви вгадали число!!!')
//   }
// } else{
//  console.log('Ви ввели невірні дані!!!')
// }
const secretNum = 5;
const enterNumber = (prompt('Введіть вашу цифру :'))
  if (enterNumber >  secretNum) {
    console.log('Ви ввели більше число!')
  } else if (enterNumber < secretNum) {
    console.log('Ви ввели менше число!')
  } else {
    console.log('Ви ввели вірне число!')
  }



