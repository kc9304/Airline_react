import Login from './components/login';
import Home from './components/home';
import Home1 from './components/home1';

import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Register from './components/register';
import Chpa from './components/chpa';
import Flight from './components/bookticket';
import Admin from './components/admin';
import Airinfo from './components/airinfo';
import Orderd from './components/orderdetails';






//first letter captail
function App() {
  function Page(){
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/log" element={<Login />}/>  
          <Route path="/reg" element={<Register />}/>  \
          <Route path="/home" element={<Home1 />}/> 
          <Route path="/chpa" element={<Chpa />}/>  
          <Route path="/botc" element={<Flight />}/> 
          <Route path="/admin" element={<Admin />}/>    
          <Route path="/airinfo" element={<Airinfo />}/>
          <Route path="/orderd" element={<Orderd />}/>  
  


            
               
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
//   function Page(){
//     switch(store.getState().NavRuducer){
//       case ("Home"):
//         return (<div><Home /></div>) 
//       case ("Home1"):
//           return (<div><Home1 /></div>) 
//       case ("Login"):
//             return (<div><Login/></div>) 
//       case ("Register"):
//               return (<div><Register/></div>) 
//       case ("Chpa"):
//                 return (<div><Chpa/></div>) 

//   }
// }
  return (
    
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
