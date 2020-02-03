// let a = "start"
// setTimeout(() => {
//     console.log("end")
//     a = "desired value - but skipped (:"
// }, 1500);
// console.log(a)

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

function doSomething(){
    let condition = false;
    if (condition == true)a = "desired value - but skipped (:"
}
let a = "start"
setTimeout(() => {
    console.log("end")
    a = "desired value - but skipped (:"
}, 1500);
console.log(a)

// todo : FAIL, REVISE