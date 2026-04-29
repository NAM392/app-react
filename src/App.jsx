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
import ThemeContextProvider from './assets/Clase5/context/ThemeContext.jsx';
import CartContextProvider, { CartContext } from './assets/Clase5/context/CartContext.jsx';
import Carrito from './assets/Clase5/Carrito.jsx';
import PostsList from './assets/Clase5/PostsList.jsx';
import APIXML from './assets/Clase6/APIXML.jsx';
import APIFetch from './assets/Clase6/APIFetch.jsx';
import APIAxios from './assets/Clase6/APIAxios.jsx';
import Contador from './assets/Clase7/Contador.jsx';
import Tareas from './assets/Clase7/Tareas.jsx';
import Contador2 from './assets/Clase8/Contador2.jsx';

function App() {
  return(
    <>
    <CartContextProvider>
      <ThemeContextProvider>     
        <Header/>
        <Routes>  
          <Route path='/' element={<Principal/>}/>  
          <Route path='/mi-bk' element={<MiBK isLoggedIn={true} />}/>  {/*condicion para probar navigate*/}
          <Route path='/categoria/:id' element={<Productos/>}/> {/*ruta dinamica para mostrar productos por categoria*/}
          <Route path='/productos' element={<Productos/>}/> 
          <Route path='/item/:id' element={<Item/>}/> {/*ruta dinamica para mostrar detalle del producto*/}
          <Route path='/carrito' element={<Carrito/>}/> {/*ruta para mostrar el carrito de compras*/}
       </Routes>
        <Footer/>
        
        {/*  <PostsList/> /* Clase 5/ */}
        {/*   {<APIXML/>}  Clase 6 */}
        {/*  {<APIFetch/>}  Clase 6 */}
        {/*    {<APIAxios/>} CLase 6 */}
        {/* {<Contador/>  } Clase 7 */}
        {/* {<Tareas/>} Clase 7 */}
        {/*  <Contador2/>      */}


      </ThemeContextProvider> 
    </CartContextProvider> 
    
    </>
  )
}

export default App
