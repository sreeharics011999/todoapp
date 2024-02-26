import {useState} from "react"
import{useDispatch} from "react-redux"
import { addTodo } from "../Reducers/Todoreducer"
import Listtodo from "./Listtodo"

const AddTodo=()=>{
    const dispatch=useDispatch()
    const [state,setState]=useState({
        content:"",
        contentError:null
    })
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value,[`${e.target.name}Error`]:null})
    }
    const add=()=>{
        if(content===""){
            setState({...state,contentError:'You must write something'})
            return
        }
        dispatch(addTodo({newcontent:content}))
        setState({...state,content:''})
    }
    const{content,contentError}=state
    return(
        <div>
            <h1 className="mt-5 pt-4 fw-bold">My ToDo</h1>
            <div className="form3 bg-light text-dark w-25 h-100">
          <h2 className="mt-4 mb-5">What's your plan?</h2>
          <input type="text" className="form-control  w-50 d-inline me-2 border border-info bg-light text-"value={content} name="content" onChange={handleChange} placeholder="Add your plan...."/>
          <button type="button" className="btn btn-outline-info" onClick={add}>Add</button>
          {contentError?<div className="error">{contentError}</div>:null}
          <Listtodo/>
        </div>
       
        </div>
    )
}
export default AddTodo
