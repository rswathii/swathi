export const addStudent = (data) =>{
    return {
        type:"ADD_STUDENT",
        payload : data
    }
}

export const favStudent = (data) =>{
    return {
        type:"FAV_STUDENT",
        payload : data
    }
}