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

export const splitId = id => {
    const splitId = id.split(":");
    const newId = `${splitId[1]}`
    return newId;
}


export function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    let time = `${h}:${m}:${s} ${session}`;
    
    return time;
}


export function showDate() {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    

    let day = `${m}/${d}/${y}`;
    
    return day;
}


export const  minArray = data => {
    const sorted = data.sort((a , b) =>  a - b )
    return sorted[0]
}
export const  maxArray = data => {
    const sorted = data.sort((a , b) =>  a - b )
    const reverseSorted = sorted.reverse()
    return reverseSorted[0]
}






