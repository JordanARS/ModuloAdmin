import { Route } from "react-router-dom";
import Dashboard from "./componentes/Dashboard";
import Form from "./componentes/Form";
import Registro from "./componentes/Registro";


function App() {

  return (
  
        /* <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Form />
        </div>       
          <div className="hidden relative lg:flex w-1/2 h-full items-center justify-center bg-[#F7F7F7]">
          <img src="/LogoUCC.png"></img>
        </div>
      </div>  */ 

        /* <Dashboard /> */

        <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Registro />
        </div>       
          <div className="hidden relative lg:flex w-1/2 h-full items-center justify-center bg-[#F7F7F7]">
          <img src="/LogoUCC.png"></img>
        </div>
      </div>
        
        
  );
}

export default App;
