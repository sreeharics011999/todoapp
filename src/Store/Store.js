import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../Reducers/Todoreducer"
export default configureStore({
    reducer:{
        toDo:todoReducer
    }
})