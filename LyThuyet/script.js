let array = [];

console.log(typeof array);

// object : THuộc tính (key - tên của thuộc tính: value - giá trị của thuộc tính)

// Khởi tạo object 
let person = {};

let person_v2 = {
    id: 0,
    fullName: "Đạt bé bỏng",
    age: 18,
    sex: "Male",
};

console.log(person_v2);

//CRUD : Create - Read - Update - Delete

//Read
// Dot notation vs Bracket notation
// Cách 1 Dot notation
console.log(` Ten của bạn là: ${person_v2.fullName}`);

// Cách 2 Bracket notation

// Create

person_v2.email = "đatz@gmail.com";
person_v2.handleHello = () =>{
    console.log("Xin chào các bạn mình là đạt bé bỏng");
    
}

console.log(person_v2.handleHello());

// Update

person_v2.age = 20;

// Delete

delete person_v2.age;

console.log(person_v2);

let animalDog = {
    name: "Join",
    age: 2,

};
let person_v5 = {
    email:"cute@gmail.com"
};
let animalCat = {
    ...animalDog,
    ...person_v5,
    id:0,
}
console.log(animalCat);

// Array object
// Hiển thị theo format
const players = [
    {id: 0, name: "Đạt bé bỏng", age:19, goals: -1},
    {id: 1, name: "Bệu", age: 19, goals: 0 },
];

let listPlayer = players.filter((player) =>{
    return player.goals < 0;
});

listPlayer.forEach((player) =>{
    console.log(` Tên cầu thủ : ${player.name} - ${player.goals}`);
    
});


// Object lồng nhau

let person_max = {
    id: 1,
    fullName: {
        firstName: "Đạt",
        lastName: "Bé bỏng",
    },
};
// Duyệt qua object

Object.keys(person_v2);
Object.values(person_v2);
Object.entries(person_v2);
