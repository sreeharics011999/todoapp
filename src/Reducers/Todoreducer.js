import {createSlice} from "@reduxjs/toolkit"
export const todoSlice=createSlice({
    name:"toDo",
    initialState:{
        todoList:[],
    },
    reducers:{
        addTodo:(state,action)=>{
            let newTodoList={
                id:Math.random(),
                content:action.payload.newcontent
            }
            state.todoList.push(newTodoList)
        },
        deleteTodo:(state,action)=>{
            let {todoList}=state
            state.todoList=todoList.filter((item)=>item.id!==action.payload.id)
        },
        editTodo:(state,action)=>{
            let {todoList}=state
            state.todoList=todoList.map((item)=>item.id===action.payload.id?action.payload:item)

        }
       
          
    }
})
export const {addTodo,deleteTodo,editTodo}=todoSlice.actions
export default todoSlice.reducer

