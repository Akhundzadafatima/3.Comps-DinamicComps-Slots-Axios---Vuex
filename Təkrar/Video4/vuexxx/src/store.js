import {createStore} from "vuex"     

const store=createStore({
    state:{
        person:{
            name:"Fatima",
            lname:"Akhundzada",
            age:"21"
        },
        theme:"dark",
        permissions:[1,2,3,4,5]
    }
})

export default store   