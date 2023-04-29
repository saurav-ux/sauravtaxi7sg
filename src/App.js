import React from 'react';
import './App.css';
import SignUp from './Components/SignUp';
import Nav7 from './Components/Nav7';
import About from './Components/About';
import Footer from './Components/Footer';
import Crousel from './Components/Crousel';
function App() {
  
   
  return(
    <>
   
<Nav7/>
<Crousel/>
{/* <br/> */}
   <SignUp/>
   <About/>
   <Footer/>
    </>
  );
   
 
}

export default App;
