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



//  map function ----- demonstration

const mapData=[2,3,5,6,7,8];
const mapNewData =mapData.map(d=>d*20);

console.log(`map function \n`);
console.log(mapData);
console.log(mapNewData);

// const mapDataTwo=mapData.map(d=>{
//    return d>5?d*100:d
// });

const mapDataTwo=mapData.map(d=> d > 4 ? d*100 : d);


//  filter function ------- demonstration

const objList=[
    {
        employeeId : 1001,
        employeeName:"EMP1",
        gender:"male"

    },
    {
        employeeId : 1002,
        employeeName:"EMP2",
        gender:"Female"

    },
    {
        employeeId : 1003,
        employeeName:"EMP3",
        gender:"male"

    },
    {
    employeeId : 1004,
        employeeName:"EMP4",
        gender:"Female"

    },
    {
        employeeId : 1005,
        employeeName:"EMP5",
        gender:"Female"

    }
]


const filterObjList =objList.filter(o=>o.employeeId > 1004);

console.log(filterObjList);

const genderObjList =objList.filter(o=>o.gender === "male");

console.log(genderObjList);

const getEmpData =objList.filter(o=>o.employeeName==="EMP3");
console.log(getEmpData);