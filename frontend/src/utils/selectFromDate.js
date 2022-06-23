
const extractDate = (date) =>{
    return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
}

const extractTime = (date) =>{
    return date.getHours() + ":" + date.getMinutes();
}

export {
    extractDate,
    extractTime
}