// import React from 'react'

import { useState } from "react";

function Header(props) {
    const [no,setNo] = useState("mycustomno")
    const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")

    // const [userData,setUserData] = useState({
    //   email:"",
    //   password:""
    // })
    const mytest = (data)=>{
        return data.name+"--"+data.id;
    }
    const arr = ["test1","test2","test3"];
    const arr1 = ["gfhgf","tuiuioest2","ert"];
    //Destructuring
    const [a1,,a3] = arr;
    const res = {
        name:"test",
        id:101
    }
    //...spreading
    //Newarr - merging
    const newarr = [...arr,...arr1];
    console.log(newarr);
  return (
    <div>
        <h3>Header</h3>
        <h3>Function Calling... {mytest(res)}</h3>
        <h4>Name from props - {props.name123}</h4>
        <h4 style={{color:'red',backgroundColor:'yellow'}}>No - {a1}</h4>
        <h4>No - {a3}</h4>
        <button onClick={()=>setNo("testing....")}>Click</button>

        <input type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
        Your email is :{email}
    </div>
  )
}

export default Header;