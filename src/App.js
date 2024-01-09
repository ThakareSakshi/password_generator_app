import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from 'react';

function App() {
  const [passlength,setPassLength]=useState(8);
  const [symbol,SetSymbol]=useState(true);
  const [number,setNumber]=useState(false);
  const [password,setPassword]=useState("");

const copyPassword=()=>{
  const textField = document.createElement('textarea');
    textField.innerText = password;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
}

const generatePassword=()=>{
   let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   if(symbol){
    str+="!@#$%^&*()_"
   }
   if(number){
    str+="1234567890"
   }


   let pass="";
   for( let i=0;i<passlength;i++){
      let randomIndex=Math.floor(Math.random()*str.length);
      pass+=str[randomIndex];
   }
  setPassword(pass);
}

  return (
    <div className="App">
     <div className='password-generator'>
     <h1>password generator App</h1>
     <label>Password Length:<input type="number" value={passlength} onChange={(e)=>{setPassLength(e.target.value)}}/></label>
   
     <label><input type="checkbox"  checked={number} onChange={()=>{setNumber(!number)}}/> Include Numbers</label>
     
     <label>
      
      <input type="checkbox" checked={symbol} onChange={()=>{SetSymbol(!symbol)}}/> Include Symbols</label>
      <button onClick={generatePassword}>Generate</button>
      <textarea value={password}></textarea>
    {  password!=""?<button onClick={copyPassword}>copy clipboard</button>:<p></p>}

     </div>
    </div>
  );
}

export default App;
