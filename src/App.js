import React, { useEffect, useState } from 'react';

import './global.css';
import './app.css';
import './aside.css';
import './main.css';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);
  
  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  },[]);

  async function handleAddDev(data){
    const response = await api.post('/devs',data);
 
    setDevs([...devs, response.data]);
  }

  async function handleDropDev(id){
    await api.delete('/devs/'+id);
    
        
    const newDevs = devs.filter((value, index, array)=>{
      return value._id !== id;
    });


    console.log(newDevs);

    setDevs([...newDevs]);
    
    console.log(newDevs);  
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev=>(
            <DevItem key={dev._id} dev={dev} onClick={handleDropDev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
