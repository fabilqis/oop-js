//Level 0 ->

// const numberOrNot = (input) => {
//     return new Promise((resolve, reject) => {
//         if (typeof input === "number") {
//             resolve("input is number")
//         } else {
//             reject(Error("input is not number"))
//         }
//     })
// }

// numberOrNot(42).then(Response => console.log(Response)).catch(Error => console.log(Error))
// numberOrNot(true).then(Response => console.log(Response)).catch(Error => console.log(Error))
// numberOrNot("456").then(Response => console.log(Response)).catch(Error => console.log(Error))

// //<-

// //Level 1 ->

// const numberOrNot1 = (input) => {
//    if (typeof input === "number"){
//        return Promise.resolve("Input is a number")
//     } else {
//         return Promise.reject(Error("Input is not a number"))
//     }
// }


// numberOrNot1(22).then(Res => console.log(Res)).catch(Err => console.log(Err))
// numberOrNot1(true).then(Res => console.log(Res)).catch(Err => console.log(Err))
// numberOrNot1("456").then(Res => console.log(Res)).catch(Err => console.log(Err))

//<-

//Level 2 ->
// const checkVariableType = (input) => {
//     switch (typeof input) {
//         case "number" : return Promise.resolve ("Input is a number")
//         break
//         case "string" : return Promise.resolve ("Input is a string")
//         break
//         case "boolean" : return Promise.resolve ("Input is a boolean")
//         break
//         case "undefined" : return Promise.reject (Error("Error : Please input a variable"))
//     }
// }


// checkVariableType("abc").then(res => console.log(res)).catch(err => console.log(err))
// checkVariableType(2).then(res => console.log(res)).catch(err => console.log(err))
// checkVariableType(false).then(res => console.log(res)).catch(err => console.log(err))
// checkVariableType().then(res => console.log(res)).catch(err => console.log(err))


//<-

//Level 3 ->


// const numberValidation = (input) => {
//     switch (typeof input) {
//         case "string":
//             return Promise.reject(Error("Error : Please input a variable"))
//             break
//         case "boolean":
//             return Promise.reject(Error("Error : Please input a variable"))
//             break
//         case "number":
//             return Promise.resolve(input)
//     }
// }

// const multipleByTwo = (result) => {
//     return Promise.resolve(result * 2);
// }
// const multipleByThree = (result) => {
//     return Promise.resolve(result * 3);
// }

// numberValidation(3).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))
// numberValidation(9).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err))

//<-

//Level 4 ->

// const numberValidation = (input) => {
//     switch (typeof input) {
//         case "string":
//             return Promise.reject(Error("Error : Please input a variable"))
//             break
//         case "boolean":
//             return Promise.reject(Error("Error : Please input a variable"))
//             break
//         case "number":
//             return Promise.resolve(input)
//     }
// }

//  const multipleByTwo = (result) => {
//         return Promise.resolve(result * 2);
//     }
//     const multipleByThree = (result) => {
//         return Promise.resolve(result * 3);
//     }

// async function mySync() {
//     let a = await console.log("before promise");
//     let b = await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => console.log(res)).catch(err => console.log(err));
//     let c = await console.log("after promise")
// }

// mySync()

//<-

//Level 5 ->
const numberValidation = (input) => {
    switch (typeof input) {
        case "string":
            return Promise.reject(Error("Error : Please input a variable"))
            break
        case "boolean":
            return Promise.reject(Error("Error : Please input a variable"))
            break
        case "number":
            return Promise.resolve(input)
    }
}

const multipleByTwo = (result) => {
    return Promise.resolve(result * 2);
}
const multipleByThree = (result) => {
    return Promise.resolve(result * 3);
}

async function mySyncs()
{
    let result = await numberValidation(2).then(multipleByTwo).then(multipleByTwo).then(multipleByThree).then(res => {return res}).catch(err => {return err})
    console.log(result)
}

mySyncs()

//<-