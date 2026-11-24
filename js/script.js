//addition of 5 Function results

// Addition
function addition(a, b) {
    return a + b;
}

// Subtraction
function subtraction(a, b) {
    return a - b;
}

// Multiplication
function multiplication(a, b) {
    return a * b;
}

// Division
function division(a, b) {
    return a / b;
}

// Modulus
function modulus(a, b) {
    return a % b;
}


// Summation Function
function summation(a, b, c, d, e) {

    let total = a + b + c + d + e;

    return total;
}


// Callback Function Call
let finalResult = summation(
    addition(20, 10),
    subtraction(20, 10),
    multiplication(20, 10),
    division(20, 10),
    modulus(20, 10)
);

console.log("Final Result:", finalResult);


//array 

let arr =[10,"Sumaiya",600,"Amatur","python"]

for(let i=0;i<arr.length;i++){

    // console.log(i);
    console.log(arr[i]);

}

//for Of Loop

let arry=[30,50,"java","pi"]

for(let a of arry){

  console.log(a);

}

//map()

let num =["Inaya",12,23,45,60]

num.map((i)=>{

   console.log(i)

})

//forEach

let numBer =["JavaScript",23,46,50,56]

  numBer.forEach((item)=>{

    console.log(item);

  })


  //object

  let employee={
    Name:"Sumaiya",
    Age:21,
    Department:"Web Development",
  }

  for(let a in employee){

   console.log(a);

   console.log(employee[a]);

  }

  //push()

  let number=[12,78,90,96,9]
  number.push(30);
  console.log(number);


  //pop()

  number.pop();
  console.log(number);


  //unshift()

  let mynUm=["sumaiya","Python",100,"Hello"]

  mynUm.unshift("Rose");
  console.log(mynUm);

  //shift()

  mynUm.shift();
  console.log(mynUm);


  //slice()

let myNumber = ["Sumaiya", "Tahiya", "Shifa", "Adiba", 100, 43, 67];

let result = myNumber.slice(0, 5);

console.log(result);

//splice()

myNumber.splice(1, 2);

console.log(myNumber);