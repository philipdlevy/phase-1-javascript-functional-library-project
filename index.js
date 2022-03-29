// this function I call throughout
//if collection doesn't equal an array, return the object value into an array
// or return the collection into  a new collection
function instanceFunct(collection) {
    if (collection instanceof Array === false) {
        return Object.values(collection)
    } else {
       return [...collection]
    }
} 
// we make a new collection using the spread operator and put it inside an array
// we make an if statement
// we use instanceof to see if the collection is an object of an object or array of an array
// if it is false, run object.values on the collection
// object.values returns an array of key values of an object
// We make a for loop to iterate over the length of the array and put the array into a callback function. 


function myEach(collection, callback) {

   let newCollection = instanceFunct(collection)
   
   for (let i = 0; i < newCollection.length; i++) {
       callback(newCollection[i])
   }
   return collection
}

function myMap(collection, callback) {

    let newCollection = instanceFunct(collection)

    let newArray = []
    
    for (let i = 0; i < newCollection.length; i++) {
       callback(newCollection[i])
       
       newArray.push(callback(newCollection[i]))
    }

    return newArray
}

function myReduce(collection, callback, acc) {

    let newCollection = instanceFunct(collection)

    if (acc === undefined) {
        acc = newCollection[0]
        newCollection.splice(0, 1)
    } 
    

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind(collection, predicate) {
    let newCollection = instanceFunct(collection)

    let result = undefined     
    for(let value of newCollection) {
        if(predicate(value) === true) {
            result = value
            break
        } 
    }
    return result
}

function myFilter(collection, predicate) {
    let newCollection = instanceFunct(collection)

    let newArray = []

    for(let i = 0; i < newCollection.length; i++ ) {
        if(predicate(newCollection[i])) 
        newArray.push(newCollection[i])
        }
            return newArray
    }


function mySize(collection) {
    let newCollection = instanceFunct(collection)

    for(let i = 0; i < newCollection.length; i++ ) {
       let valueLength = newCollection.length
       return valueLength
    }
}

function myFirst(array, n) {
    // console.log("array", array) 
    // console.log("n", n)


    let newArray = array.slice(0, n)
    // console.log(newArray)
    if (!!n) {
        // console.log("newArray", newArray[0])
        return newArray
    } else {
        return newArray[0]
    }
}

function myLast(array, n) {

    let newArray = array.slice(-n)

    if (!!n) {
        return newArray
    } else {
        return newArray[newArray.length-1]
    }
}

function myKeys(object) {
    // console.log("object", object)

    let arrayOfKeys = []

    for(let key in object) {
        arrayOfKeys.push(key)
    }
    return arrayOfKeys
}

function myValues(object) {

    let arrayOfKeys = []

    for(let key in object) {
        arrayOfKeys.push(object[key])
    }
    return arrayOfKeys
}