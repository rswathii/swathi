const initialData = [

    {

    id:1,

    name: "Swathi",

    age: 21,

    email: "ranguswathi25@gmail.com",

    batch: 1

},

{

    id:2,

    name: "Navya",

    age: 21,

    email: "ranguswathi25@gmail.com",

    batch: 1

   

},

{

    id:3,

    name: "Swathi",

    age: 21,

    email: "ranguswathi25@gmail.com",

    batch: 1  

},

{

    id:4,

    name: "Swathi",

    age: 21,

    email: "ranguswathi25@gmail.com",

    batch: 1  

}

]

 

function addStuReducer(state = initialData, action) {

    if (action.type == "ADD_STUDENT") {

        state.push(action.payload)

    }else if(action.type=="DELETE_STUDENT"){

        // console.log("insidew red..", action.payload)

       const filteredArr=state.filter((val)=>{

        return val.id != action.payload

    })

    state=[...filteredArr]

 

    }else if(action.type == "EDIT_STUDENT"){

    const filteredArr=state.filter((val)=>{

        return val.id != action.payload.id

       

    })

    filteredArr.push(action.payload)

    state=[...filteredArr]

}

    return state

}

export default addStuReducer

 

 

 

 