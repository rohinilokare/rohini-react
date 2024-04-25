// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler



const Outer =  (x) =>  {
    function inner(y){
      let sum = x + y
      console.log("sum...", sum)
      return sum
    }
     return inner;
 }
 
Outer(2)(3)

arr = [1,2,2,3,4,2]
let filterVal = arr.filter(function (x){
    x ==2
})

function customFilterFunction (array, filterFunc){
    let filterElemnent = []
    for(let i = 0; i <= array.length; i++){
        console.log("i", i)
        if(filterFunc(array[i])){
            filterElemnent.push(array[i])
        }
    }
    console.log("filter", filterElemnent)
    return filterElemnent
}

customFilterFunction(arr, function (x){
    return x==2
})

