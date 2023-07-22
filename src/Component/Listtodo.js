import {AiFillEdit,} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import { useDispatch,useSelector } from "react-redux"
import { deleteTodo,editTodo } from "../Reducers/Todoreducer"
import { useState } from "react"
const Listtodo=()=>{
    const{todoList}=useSelector((state)=>state.toDo)
    const dispatch=useDispatch()
    const[isEditing,setEditing]=useState(false)
    const[state,setState]=useState({
        id:"",
        content:"",
        contentError:null
    })
    const onEditToggle=(id,content)=>{
        setEditing(true)
        setState({...state,id,content})
    }
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value,
        [`${e.target.name}Error`]:null})
    }
    const{content,contentError,id}=state
    const edit =()=>{
        if(content===""){
            setState({...state,contentError:"You must write something"})
            return
        }
        dispatch(editTodo({content,id}))
        setEditing(false)
    }
    return(
        <div className="">
            {
                isEditing?
                <div className="form">
                   <h2 className="mt-4 mb-5">Update your plan</h2>
                   <input type="text" class="form-control  w-50 d-inline me-2 border border-warning  bg-light"value={content} name="content" onChange={handleChange} placeholder="Update your plan...."/>
                   <button type="button" class="btn btn-outline-warning" onClick={edit}>Edit</button>
                   {contentError?
                   <div className="error">{contentError}</div>:null 
                   }
                   <div className="mt-5"></div>
                </div>
                :
                <ul className="todos " type="none">
                    {
                        todoList.map(({id,content})=>{
                            return<li className="grid mt-4 " key={id}>
                                <span className="content mb-5">{content}</span>
                                <span className="todo-action">
                                    <AiFillEdit className="edit ms-5 text-secondary" onClick={()=>onEditToggle(id,content)}/> 
                                    <RiDeleteBin6Line className="close ms-5 text-danger"onClick={()=>dispatch(deleteTodo({id}))}/>
                              </span>
                            </li>
                        })
                    }

                </ul>
            }
        </div>
    )
}
export default Listtodo