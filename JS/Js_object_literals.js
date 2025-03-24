Student={
    name: "John",
    age: 20 ,
    isStudying: true,
    marks: [91,81,71,61,51]
};

Console.log(Student.name); // John
console.log(Student["age"]); // 20

//Adding a new key-value pair
Student.gender="male";
console.log(Student);

//updarting a key-value pair
Student.age=23
console.log(Student); 

//deleting a key-value pair
delete Student.isStudying;
console.log(Student);

//object of objects
const classInfo={
    aman:{
        name: "Aman",
        age: 20 ,
        isStudying: true,
        marks: [91,81,71,61,51]
    },
    raman:{
        name: "Raman",
        age: 21 ,
        isStudying: true,
        marks: [81,71,61,51,41]
    },
    saman:{
        name: "Saman",
        age: 22 ,
        isStudying: true,
        marks: [91,81,71,61,51]
    }
};

//accessing the object of objects
console.log(classInfo.aman);
console.log(classInfo["raman"]);
console.log(classInfo.saman.age);

//Adding a new key-value pair
classInfo.saman.gender="male";
console.log(classInfo);

//updarting a key-value pair
classInfo.saman.age=23
console.log(classInfo);

//array of objects
const students=[
    {
        name: "Aman",
        age: 20 ,
        isStudying: true,
        marks: [91,81,71,61,51]
    },
    {
        name: "Raman",
        age: 21 ,
        isStudying: true,
        marks: [81,71,61,51,41]
    },
    {
        name: "Saman",
        age: 22 ,
        isStudying: true,
        marks: [91,81,71,61,51]
    }
];

//accessing the array of objects
console.log(students[0]);
console.log(students[1].name);
console.log(students[2].age);

//Adding a new key-value pair
students[2].gender="male";
console.log(students);

//updarting a key-value pair
students[2].age=23;
console.log(students);

//deleting a key-value pair
delete students[1].isStudying;
console.log(students);
   

//Math object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-5));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.round(5.5));
console.log(Math.max(5,10,20,30,40));
console.log(Math.min(5,10,20,30,40));
console.log(Math.pow(2,3));
console.log(Math.random());
console.log(Math.sqrt(25));
console.log(Math.floor(Math.random()*10)+1); //TO GENERATE RANDOM NUMBER BETWEEN 1 TO 10