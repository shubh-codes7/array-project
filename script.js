/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(x => {
    if(x.profession === "developer"){
      console.log(`id : ${x.id}, Name : ${x.name}, Age : ${x.age}, Profession : ${x.profession}`)
    }
  })  
}

function PrintDeveloperbyForEach() {
  arr.forEach(x => {
    if(x.profession === "developer"){
      console.log(`id : ${x.id}, Name : ${x.name}, Age : ${x.age}, Profession : ${x.profession}`)
    }
  })
}

function addData() {
  let temp = { id: 4, name: "Ram", age: "17", profession: "Creator" }
  arr.push(temp)

  arr.map(x => console.log(`id : ${x.id}, Name : ${x.name}, Age : ${x.age}, Profession : ${x.profession}`))
}

function removeAdmin() {
  arr = arr.filter(x => x.profession !== "admin")
  arr.map(x => console.log(`id : ${x.id}, Name : ${x.name}, Age : ${x.age}, Profession : ${x.profession}`))
}

function concatenateArray() {
  let arr1 = [
    { id: 5, name: "Kumar", age: "24", profession: "admin" },
    { id: 6, name: "Lokesh", age: "28", profession: "manager" },
    { id: 7, name: "Ravi", age: "28", profession: "developer" }
  ];

  arr = arr.concat(arr1)
  arr.map(x => console.log(`id : ${x.id}, Name : ${x.name}, Age : ${x.age}, Profession : ${x.profession}`))

}
