const arr1=[202,23,56,78,88,98,52,999];
const arr2=arr1;

arr1.pop(); // removes last element of both array.
arr2.shift();// removes first element of both array


const arr3=[...arr1];
arr1.pop();
arr2.shift();
console.log(`value of arr3 ${arr3}`);
console.log(`Value of arr2 ${arr2} \n and value of arr1 ${arr1} \n`);



const myObj={
    "firstName":"Ajit",
    "lastName":"Singh",
    "Address":{
        "city":"Bhubaneswar",
        "district":"Khordha",
        "pin":"751010"
    }
}

const pin =myObj.Address.pin;
const city=myObj.Address.city;
console.log(`value of getData ${pin} and ${city}`);