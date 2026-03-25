import { useState } from 'react'
import {Routes, Route, useRoutes} from 'react-router-dom';
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
import MiBK from './assets/Clase4/MiBK.jsx';
import Productos from './assets/Clase4/Productos.jsx';
import Item from './assets/Clase4/Item.jsx';
import Layout from './assets/Clase5/Layout.jsx';
import HOC from './assets/Clase5/HOC.jsx';

function App1a5() {

  /* 
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const desmontar = ()=>{

    visible ? setVisible(false) : setVisible(true);
  }

  
 
Equivalente a lo que se hizo con Routes y Route, pero con useRoutes, 
que es un hook que nos permite definir las rutas de manera más sencilla y clara,
 sin necesidad de anidar los componentes Route dentro de Routes.

const routes = useRoutes([
    { path: '/', element: <Principal/> },
    { path: '/mi-bk', element: <MiBK isLoggedIn={true} /> },
    { path: '/productos', element: <Productos/> }

  ])

  return (
      <>
          <Header/> 
          {routes}
          <Footer/> 
      </>
  ); */

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

    {/*     {<RenderizadoListas/>} Clase3 */}


      

     {/*  <Header/>
      <Routes>  
        <Route path='/' element={<Principal/>}/> 
        <Route path='/mi-bk' element={<MiBK isLoggedIn={true} />}/>  {/*condicion para probar navigate}
        <Route path='/categoria/:id' element={<Productos/>}/> {/*ruta dinamica para mostrar productos por categoria}
        <Route path='/productos' element={<Productos/>}/> 
        <Route path='/item/:id' element={<Item/>}/> {/*ruta dinamica para mostrar detalle del producto}
      </Routes>
      <Footer/>  Clase4*/}


      {/* 
      {<Layout parque={"Churassic Park"} >
        
        <h3>Bienvenidos a nuestro parque de dinosaurios</h3>
        
      </Layout>} 
      {/*Clase5 */}

      {/* <HOC/> */}

    </>
  )
}

export default App1a5
