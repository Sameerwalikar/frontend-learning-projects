// This is just an practise file to practise the array destructing as a part of props
const arr=[1,2,3]
const [a,b,c]=arr
console.log(a)
console.log(b)
console.log(c)

//Skipping elements
const colors=["red","green","blue"]
const[first,,third]=colors
console.log(first)
console.log(third)

//Adding values
const arrayy=[10]
const [val1,val2=20]=arrayy
console.log(val1)
console.log(val2)

//Using rest operator
const restop=[1,2,3,4,5,6,7]
const[one,two,...rest]=restop
console.log(one)
console.log(two)
console.log(rest)