
const a = true
const b = false
const c = "";

if(a) {
  console.log('its'+a)
} else if(b) {
  console.log('its'+b)
} else {
  console.log('its'+c)
}


const arr = ['array','array2','array3']

//filter out the data, show only matching conditions
console.log(arr.filter(arrr => arrr.length === 6))

//shows the boolean for each value
console.log(arr.map(arrr => arrr.length === 6))


//try catch block to manage errors

try {
  Error('asd')
} catch(error) {
    console.log(error);
}
