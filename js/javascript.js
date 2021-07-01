
// var numbers = [45, 4, 9, 16, 25]

// numbers.forEach(looping)
// function looping(a, i, arr){
//     console.log(a, i, arr)

// }
// var numbers2= numbers. map(function(value){
//     return value+3
// })
// console.log(numbers2)

// var over18 = numbers.filter(function(value){
//     return value != 9
// })
// console.log(over18)

// const number1 = (name)=>name
//     let name = number1("iyobosa")
// console.log(name)

// let over8 = numbers.filter((value)=> value != 9)
// console.log(over8)


const togglemenu = ()=>{

}

const displayDate=(button) =>{
    button.innerHTML = Date()
}



document.addEventListener('change', (event)=>{
    event.target.classList.add('jks')
    document.getElementsByTagName("body")[0].style.backgroundColor=event.target.value
})

// when defining a class the first letter must be capital letter

// some key words are 
// if, let, when, do, var, this, const

class Player{
    name = ''
    score =0
constructor(name, a){
    console.log('welcome '+name)
    this.name =name
    this.score=a
}
    welcome(){
        console.log("you are welcome "+this.name)
    }
}

let player1 = new Player("Emma","bello", 700)
player1.welcome()
console.log(player1.score)

class Wizard extends Player{
    constructor(){
        super("john", 1000)
    }
}

let wizard1 = new Wizard()
let wizard2 = new Wizard()
wizard2.name="bello"
console.log(wizard1.score)
// console.log(wizard2, wizard2)
wizard1.welcome()

// let player1 = new Player()
// let player2 = new Player()
// player1.name="Emma"
// player1.scpre=100
// player2.name="success"
// console.log(player1.name)
// console.log(player2.name)
// player1.welcome()
// player2.welcome()