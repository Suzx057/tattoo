
import { useState } from 'react';
import './App.css';
import Appheader from './component/Appheader';
import Tattooitem from './component/Tattoo-item';
import Tattoopost from './component/Tattoopost';
import tattoos from './data/tattoos';




function App() {
  const [selectedTattoo,setSelectedTattoo] = useState(null);
  const tattooElements = tattoos.map((tattoo, index) =>{
    return <Tattooitem key={index} tattoo={tattoo}/>;
  });

  

  return (
    <div className="App">
          <Appheader />
         
        <div className="app-grid">
            
            {tattooElements}
      
        </div>
        
    </div>
  );
}

export default App;
