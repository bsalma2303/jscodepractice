//const coding=['js','ruby','java','python', 'cpp']

// const values= coding.forEach( (item) => {
//     console.log(item);  //js ruby java pyhton cpp
//     return item
// });
// console.log(values);       //undefined because it forEach loop we can't return any value 


//filter is like forEach which call back only 
const myNums=[1,2,3,4,5,6,7,8,9,10]

// myNums.filter( () =>{} )
// myNums.filter( () =>() )
// myNums.filter( () => )       //if it is single line

// myNums.filter( (num) =>  num > 4)  // it doesn't return anything   num means every value will be access.  num > 4 is condition

// const newNums= myNums.filter( (num) => num > 4)
// console.log(newNums);       //[ 5, 6, 7, 8, 9, 10 ]


// const newNums=myNums.filter( (num) => {
//     return num > 4                      //if here we didn't write retun keyword we will get empty [] when we start scope it is object for that we want write return
// })
// console.log(newNums);       //[ 5, 6, 7, 8, 9, 10 ]



