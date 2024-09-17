import React, {useState} from 'react'

const Todo = () => {
    const [todoo, settodo] = useState("")
    const [content, setcontent] = useState("")
    const [alltodo, setalltodo] = useState([])
    const [onetodo, setonetodo] = useState([])
    // const [, setshowing] = useState([])
    const [index, setindex] = useState(0)
    const post = ()=>{
        let thetodo = {
            todoo,
            content 
        }
        console.log(thetodo);
        setalltodo([...alltodo, thetodo])
        console.log(alltodo);
        settodo("")
        setcontent("")
        
    }
    const deleteItem = (i) =>{
        // const newtodo = alltodo.filter((tds, index) => index !== i)
        // setalltodo(newtodo)
        alltodo.splice(i, 1)
        setalltodo([...alltodo])
    }
    const edittodo = (i, todo) =>{
        console.log(i, todo);
        setonetodo(todo)
        setindex(i)
    }
    const savetodo = () => {
        console.log(alltodo[index]);
        alltodo[index] = onetodo
        setalltodo([...alltodo])
    }
  return (
    
    <>
        <div className='d-flex flex-column justify-center w-50 m-auto gap-3 shadow'>
            <h1>Todo List</h1>
            <input value={todoo} onChange={(e)=> settodo(e.target.value)} type="text" placeholder='Enter todo' />
            <input value={content} onChange={(e)=> setcontent(e.target.value)} type="text" placeholder='Content' />
            <button onClick={post}>Post Todo</button>
        </div>
        <div className='d-flex flex-column justify-center w-50 m-auto gap-3 shadow'>
            {alltodo.length == 0 ? "No Todo" : alltodo.map((todo, index)=>(
            <div className='d-flex flex-row justify-between' key={index}>
                
               <h1>{todo.todoo} </h1> <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> edittodo(index, todo)}>Edit</button>
               <button onClick={() => deleteItem(index)}>Delete</button>
               <h1>{todo.content}</h1>
               
            </div>
        ))
        }
        </div>

        



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input value={onetodo.todoo} onChange={(e)=> setonetodo({...onetodo, todoo:e.target.value})} type="text" placeholder='Enter todo' />
      <input value={onetodo.content} onChange={(e)=> setonetodo({...onetodo, content:e.target.value})} type="text" placeholder='Content' />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={savetodo}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        
    </>
  )
}

export default Todo