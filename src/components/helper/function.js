export const shortNumber = (number , amount) => {
    const newNumber = number.toFixed(amount)
    return newNumber;
}

export const arrayRange = array => {
    let newArray = []
    let i = 0;
    while(i < 10) {
        newArray.push(array[i])
        i++
    }
   return newArray;
}