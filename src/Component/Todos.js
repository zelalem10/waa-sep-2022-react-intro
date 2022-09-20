import React from 'react'
import Todo from './Todo';

export default function Todos(props) {
    debugger;
    let {todos} = props;
  return (
   <div>
    {
      todos.map((item) => {
         return (
        <Todo {...item} />
         )
       
      })
    }
   </div>
  )
}
