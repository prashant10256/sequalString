import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState("");

  return (
    <div>
        <input type="Email" placeholder="Email"  />
        <br/>
        <input type="password" placeholder="Password"/>
        <br/>
        <button >Login</button>

      
    </div>
  )
}

export default App;
