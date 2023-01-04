import logo from './logo.svg';
import './App.css';
import Sec from './Sec';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Document1 from './document'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route>  
        <Route exact path="/" element={<Sec />} />
      <Route exact path="/about" element={<Document1/>} />
      {/* ... etc. */}
      </Route>
    
  )
);

function App() {
  return (
    
    <RouterProvider router={router} />
      
  )
   
}

export default App;
