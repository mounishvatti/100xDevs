let user = {
    name: "Mounish",
    age: 25
}

// write a function that takes an object as an argument and greets them.

function greet1(obj){
    console.log(`Hello ${obj.name}, you are ${obj.age} years old.`)
}

let person = {
    name: "Mounish",
    age: 25,
    gender : "male"
}

function greet2(obj){
    let abbreviations = {
        "male": "Mr",
        "female": "Mrs"
    }
    console.log(`Hello ${abbreviations[obj.gender]} ${obj.name}, you are ${obj.age} years old.`)
}

function canVote(obj){
    if(obj.age >= 18){
        console.log("You can vote")
    }else{
        console.log("You cannot vote")
    }
}

greet1(user)
greet2(person)
canVote(person)
