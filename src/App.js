import React from 'react';
import InputForm from './components/InputForm';
import ShowData from './components/ShowData';
import { useState } from 'react';
import ErrorPopup from './components/Error';
function App() {
  const [arr,setarr] = useState([
    {
    name:'Angad',
    age:23 ,
    id : '1',
    key : '1'
    },
    {
      name:'Ankit',
      age:24,
      id:'2',
      key : 2,
    },
])
  

const handleAllData = (data) => {
 console.log(data)
  setarr([...arr, data]);
};


  return (
    <div>
         <InputForm allData={arr} handleAllData={handleAllData}/>
         
        {arr.map((data)=>(
           <ShowData name={data.name} age={data.age} id={data.id} key={data.id}></ShowData>
        ))}
       
    </div>
  );
}

export default App;
