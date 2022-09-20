import React, { useState } from 'react'

export default function CreatePerson(props) {
    
    const [person, setPerson] = useState({
        fname:'',
        lname:''
    })  
    const [persons, setPersons] = useState([])
    

    const onchange = (e) => {
        setPerson({...person, [e.target.name] : e.target.value})
       
    }

    const onSubmitAdd = () => {

    var addPerson = [...persons, person]
      props.addPerson(addPerson)
    }

    const onSubmitUndo = () =>{

      props.removePerson()

    }


  return (
    <div>
   <label>first name</label> <input type="text"  name='fname' onChange={onchange}/> <br />
   <label>last name</label> <input type="text"   name='lname' onChange={onchange}/> <br />

   <input type="submit" value="Add" onClick={onSubmitAdd}/> <br />
   <input type="submit" value="Undo" onClick={onSubmitUndo}/>
    </div>


  )
}
