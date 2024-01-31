import React, { useState } from "react";
import './input-form.css';
import ErrorPopup from "./Error";

const InputForm = (props) => {
  const [userData, setUserData] = useState({ name: '', age: 0, id: 0, key: '' });
  const [value, setValue] = useState(false);

  const handlename = (e) => {
    e.preventDefault();
    if (e.target.value.trim().length === 0) {
      return;
    } else {
      const y = { ...userData, name: e.target.value };
      setUserData(y);
    }
  };

  const handleage = (e) => {
    e.preventDefault();
    if (e.target.value.trim().length === 0) {
      return;
    } else {
      const y = { ...userData, age: e.target.value, id: Math.random().toString(), key: Math.random().toString() };
      setUserData(y);
    }
  };

  const senddata = (e) => {
    e.preventDefault();
    console.log("insidesendaata");
    if (userData.name.trim().length === 0) {
      setValue(true);
      return;
    } else if (userData.age < 1) {
      setValue(true);
      return;
    } else {
      props.handleAllData(userData);
      const y = { name: '', age: 0, id: Math.random().toString(), key: Math.random().toString() };
      setUserData(y);
    }
  };
  const errorHandler = () =>{
    setValue(false) ;
  }

  return (
    <div>
      {value && <ErrorPopup title="Error ocurred" errorbtn={errorHandler}></ErrorPopup>}
      
      <div className='input-form'>
        <form>
          <label>Username:</label>
          <input type='text' placeholder='Enter Name' onChange={handlename} value={userData.name}></input>
          <label> Age:</label>
          <input type='number' min={0} max={100} placeholder='Enter Age' onChange={handleage} value={userData.age}></input>
          <button type='submit' onClick={senddata}>Add User</button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
