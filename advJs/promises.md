promises are methods to call a function after a condition was met.
since js is single threaded, instead of blocking the entire program, or even worse-
failing to retrieve data while the program skips or returns undefined.

promises are written likewise:

let x = new Promise(
    condition
)
x

let's try some ex.