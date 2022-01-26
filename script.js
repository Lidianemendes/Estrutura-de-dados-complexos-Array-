 // Crie um array que receba 5 itens e exiba no console.

 let team = ["Dandara", "Marlon", "Fernando", "Karyne", "Pam"]
 
console.log(team[0])
console.log(team[1])
console.log(team[2])
console.log(team[3])
console.log(team[4])


// Utilize um método para adicionar um nome ao inicio do array.

let fruits = ["Maça", "Pera", "Uva"]
fruits.unshift("Limão")

console.log(fruits)

// Utilize um método para remover o último nome do array.

let food = ["Arroz", "Feijão", "Maionese", "Frango"]
food.pop()

console.log(food)

// Utilize um método para adicionar dois nomes ao fim do array.

let dessert = ["Pudim", "bolo de chocolate"]
dessert.push("Pavê", "Doce de amendoim")

console.log(dessert)

// Utilize um método para remover o primeiro nome do array.

let nome = ["Lidiane", "Dandara", "Stefanye", "Igor"]
nome.shift()

console.log(nome)

// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]

const numbers = [7,5,6,3,8,9,2,1,4]
const numbersOrganizados = numbers.sort(function(a,b){
    return a-b
})

console.log(numbersOrganizados)

