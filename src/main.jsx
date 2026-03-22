import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(

  <>

  
   <BrowserRouter>
    <App/>
   </BrowserRouter>

   {/* <StrictMode> SE USA BROWSER ROUTER AHORA PARA LA NAVEGACION ENTRE COMPONENTES,
    ASI QUE SE COMENTA EL STRICT MODE PARA EVITAR PROBLEMAS DE RENDERIZACION 
    DOBLE EN MODO DESARROLLO
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode> */}






   </>
    
)
