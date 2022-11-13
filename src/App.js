import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import button from "bootstrap/js/src/button";
import {setPassword} from "./features/password/passwordSlice";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '>', 0, 'E'];


function App() {
  const input = useSelector(state => state.password.password)
  const dispatch = useDispatch()
  const onSubmit = (number) => {
      dispatch(setPassword(number))
  }

  return (
    <div className="App" >
      <div>
          {input}
      </div>
        {
            numbers.map((number, index) =>{
                return (
                    <button key={index} onClick={()=> onSubmit(number)}>{number}</button>
                );

            })
        }
    </div>
  );
}

export default App;
