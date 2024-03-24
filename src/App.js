
import { useState } from 'react';
import './App.css';
import Appheader from './component/Appheader';
import Tattooitem from './component/Tattoo-item';
import Tattoopost from './component/Tattoopost';
import tattoos from './data/tattoos';




function App() {
  const [selectedTattoo,setSelectedTattoo] = useState(null);

  function onTattooOpenClick(thetattoo){
    setSelectedTattoo(thetattoo);
  }

  function onTattooCloseClick(){
    setSelectedTattoo(null);
  }

  const tattooElements = tattoos.map((tattoo, index) =>{
    return <Tattooitem key={index} tattoo={tattoo} onTattooOpenClick={onTattooOpenClick} />;
  });

  let tattoopost = null;
  if(!!setSelectedTattoo) {
    tattoopost = <Tattoopost tattoo={selectedTattoo} onBgclick={onTattooCloseClick} />
  }

  return (
    <div className="App">
          <Appheader />
          
        <div className="app-grid">
            
            {tattooElements}
      
        </div>
        <Tattoopost />
    </div>
  );
}

export default App;

//asdklajwdlkjawlkdjawlkd