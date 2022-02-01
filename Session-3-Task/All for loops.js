//---------------------1. For the given JSON iterate over all for loops (for, for in, for of, forEach):---------------

let arr = [
  {
    id: "1",
    name: "Lura Senger",
    email: "Xander_Collier@yahoo.com",
  },
  {
    id: "2",
    name: "Wilburn Weber",
    email: "Bennett_Kreiger11@yahoo.com",
  },
  {
    id: "3",
    name: "Tyrique Hahn",
    email: "Juston.Altenwerth@yahoo.com",
  },
  {
    id: "4",
    name: "Lenny Bailey",
    email: "Guiseppe_Hegmann@yahoo.com",
  },
  {
    id: "5",
    name: "Vladimir Keeling",
    email: "Louisa_Walsh18@hotmail.com",
  },
  {
    id: "6",
    name: "Kellie Crona",
    email: "Chandler_Abernathy@yahoo.com",
  },
  {
    id: "7",
    name: "Carolina White",
    email: "Royal50@hotmail.com",
  },
  {
    id: "8",
    name: "Alfredo Conn",
    email: "Clarabelle34@hotmail.com",
  },
  {
    id: "9",
    name: "Stan Shanahan",
    email: "Lamar.McClure@hotmail.com",
  },
  {
    id: "10",
    name: "Marvin Fay",
    email: "Osbaldo58@hotmail.com",
  },
];

//-----------------------for in loop----------------------------------------

console.log("for in loop:");
for (let a in arr) {
  console.log(arr[a].id, arr[a].name, arr[a].email);
}

//-----------------------for of loop-----------------------------------------

console.log("for of loop:----------------");
for (let b of arr) {
  console.log(b.id, b.name, b.email);
}

//-----------------------foreach loop----------------------------------------

console.log("foreach loop:---------------");
arr.forEach(function (each) {
  console.log(each.id, each.name, each.email);
});

//------------------------ for loop----------------------------------------

console.log("for loop:-------------------");
for (var i = 0; i < 10; i++) {
  console.log(arr[i].id, arr[i].name, arr[i].email);
}

//---------------------------End---------------------------------------------
