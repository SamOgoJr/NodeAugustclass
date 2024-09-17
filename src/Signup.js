import React,{useEffect, useState} from 'react'
import axios from 'axios'


const Signup = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [alluser , setalluser] = useState([])

   
    useEffect(() => {
        axios.get("http://localhost:3505/users").then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
        
    })
    }, [])
    

    const register = () => {
        if (!firstname || !lastname || !email || !password) {
            alert("all fields are mandatory")
        }else{
            axios.post("http://localhost:3505/users",{
                firstname,
                lastname,
                email,
                password
            }).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
                
            })
        }
    }

    return (
        <div>
            <div className='w-59 mx-auto py-3 px-3 shadow'>
                <h1 className='text-center'>Signup</h1>
                <input  onChange={(e)=>setfirstname(e.target.value)} type="text"  placeholder='Firstname'/>
                <input onChange={(e)=>setlastname(e.target.value)} type="text"  placeholder='Lastname'/>
                <input onChange={(e)=>setemail(e.target.value)} type="text"  placeholder='Email'/>
                <input onChange={(e)=>setpassword(e.target.value)} type="text"  placeholder='Password'/>
                <button className='mt-3 btn btn-dark' onClick={register}>Register</button>

            </div>
        </div>
    )
}

export default Signup