import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Todo(props) {
  debugger;
  const [todoDetail, setTodoDetail] = useState([])
  const submit = (id) =>{
    debugger
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
        console.log(res);
        setTodoDetail(res.data)
    })
  }
  return (
    <>
    <h5>title : {props.title}</h5>
    <h5>completed : {props.completed ? "Completed" : "Not Completed"}</h5>
    <input type='button' value='submit' onClick={() => submit(props.id)}/><br />

    
    {
      todoDetail &&
      <div>
        {todoDetail.title}
      </div>
    }

    <p>********************************</p>



    </>

  )
}
