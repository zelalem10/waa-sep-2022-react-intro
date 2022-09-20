import { useEffect, useState } from 'react';
import './App.css';
import CreatePerson from './Component/CreatePerson';
import ShowPersons from "./Component/ShowPersons"
import axios from 'axios'
import Todos from './Component/Todos';
// let intailData = [
//   {fName: "zelalem", lName:"belayneh"},
//   {fName: "dagi", lName:"demelash"},
//   {fName: "beki", lName:"dantamo"}
// ]

function App() {
  const [allPersons, setAllPersons] = useState([])
  const [todos, setTodos] = useState([]);

  const addPerson = (persons)=>{
    setAllPersons([...allPersons, ...persons]);
  }

  const removePerson = ()=>{
    // let reversed = allPersons.reverse()
    // var [first, ...rest] = allPersons;
    // console.log(first)
    // console.log(rest)
    let removeLastPerson = allPersons.pop();
    console.log(removeLastPerson);
    setAllPersons([...allPersons]);
  }


  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => {
          console.log(res);
          setTodos(res.data.slice(0,5)) 
      }
      )
  },[])
  return (
    <div >

     
      <CreatePerson person={allPersons} addPerson={addPerson} removePerson={removePerson}/>
      <ShowPersons persons={allPersons} />

      <Todos todos={todos} />

    </div>
  );
}

export default App;
