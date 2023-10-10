const initialData = [
    {
        name:"Atul",
        batch:1,
        email:"atul.sharma@abilioit.com",
        age:28
    }
]


function addStuReducer(state=initialData, action){
    if(action.type == "ADD_STUDENT"){
        state.push(action.payload)
    }

    return state
}

export default addStuReducer