const person={
    name:'Kagiso',
    surname:'Kekana',
    age:24,
    location:{
        city:'Pretoria',
        temp:20
    }
}
const {name,age}=person;
if(name && age)
    console.log(`${name} is ${age}`);

    //Setting default values
const {name:firstName='Anonymous',age}=person;
if(name && age)
    console.log(`${firstName} is ${age}`);



const {city,temp}=person.location;
console.log(`${city} is ${temp}`);

const book={
    title:"Ego is the enemy",
    author:"Ryan Hloiday",
    publisher:{
        name:"Penguins"
    }
}

const {name:publisherName="Self-published"}=book.publisher;
console.log(`${publisherName}`);