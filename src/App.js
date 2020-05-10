import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom"

import AppRoutes from "routes/AppRoutes";

function App() {
  useEffect(()=>{
    
  },[])
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
