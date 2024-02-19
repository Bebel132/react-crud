import './App.css';
import { useState } from 'react';
import Wrapper from './components/Wrapper';

// let nextId = 0;

function App() {
  // const [name, setName] = useState('')
  // const [list, setList] = useState([])

  return ( 
    <Wrapper />
    // <div className="App">
    //   <input value={name} onChange={e => {setName(e.target.value)}} />
    //   <button onClick={() => {
    //     setList([...list, {id:nextId++, name:name}])
    //   }}>Enviar</button>
    //   <ul>
    //     {list.map(item => (
    //       <li key={item.id}>{item.name}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default App;
