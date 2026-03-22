import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Encabezado from './assets/Clase1/Encabezado'
import Renderizacion from './assets/Clase2/Renderizacion'
import Props from './assets/Clase2/Props.jsx';
import States from './assets/Clase2/States.jsx';
import Eventos from './assets/Clase2/Eventos.jsx';
import CiclosDeVida from './assets/Clase2/CiclosDeVida.jsx';
import Calculator from './assets/Clase3/Calculator.jsx'
import Formularios from './assets/Clase3/Formularios.jsx'
import RenderizacionCondicional from './assets/Clase3/RenderizacionCondicional.jsx'
import RenderizadoListas from './assets/Clase3/RenderizadoListas.jsx'
import Header from './assets/Clase4/Header.jsx';
import Footer from './assets/Clase4/Footer.jsx';
import Principal from './assets/Clase4/Principal.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const desmontar = ()=>{

    visible ? setVisible(false) : setVisible(true);
  }
  return (
    <>

    {/*<Renderizacion/>*/}
     { 
     
       /* ++ CLASE 1 ++
     <Encabezado/> 
      <h3>Curso de React</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}


       {/*<Renderizacion/>*/}
  
    {/*<Props academia="Street Academy" curso="Convencerte de algo" text= "Masterclass de cachorro"  />*/}

    {/*<States/>*/}

     {/*<Eventos/>*/}

    {/* visible ?  <CiclosDeVida/> : ""}
    <p><button className="btn btn-primary" onClick={desmontar}>{visible ? "DESMONTAR" : "MONTAR"}</button></p>
      */}

    {/*<Calculator/>*/}

    {/* <Formularios/> */}

{/*     {<RenderizacionCondicional isLoggedIn={false} />} */}

{/*     {<RenderizadoListas/>} */}


      <Header/>
      <Principal/>
      <Footer/>

    </>
  )
}

export default App
