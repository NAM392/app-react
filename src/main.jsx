import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
/* import CartReducer from './assets/Clase7/Redux/CartReducer.jsx'; CLASE 7  */
import CounterReducer from './assets/Clase8/Redux/CounterReducer.jsx';
/* const store = createStore(CartReducer); Clase 7*/
//const store = createStore(CounterReducer);


const miMiddleware = store => next => action => {
  console.log(store.getState());
  console.log(action.type);

  if(action.type === 'INCREMENTAR_ITEM'){
    console.log('Se ha incrementado el contador');
  }

  if(action.type === 'DECREMENTAR_ITEM'){
    console.warn('Se ha decrementado el contador');
  }
  next(action);
}

const store = createStore(CounterReducer, applyMiddleware(miMiddleware));

createRoot(document.getElementById('root')).render(

  <>

    <Provider store={store}>
   <BrowserRouter>
   

          <App/>
   


   </BrowserRouter>

    </Provider>

   {/* <StrictMode> SE USA BROWSER ROUTER AHORA PARA LA NAVEGACION ENTRE COMPONENTES,
    ASI QUE SE COMENTA EL STRICT MODE PARA EVITAR PROBLEMAS DE RENDERIZACION 
    DOBLE EN MODO DESARROLLO
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode> */}






   </>
    
)
