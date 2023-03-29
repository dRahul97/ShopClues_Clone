
import logo from "./logo.svg";
import "./App.css";


import Homepage from './Pages/Homepage';
import Navigationbar from './Components/HomePage/Navigationbar';
import AllRoutes from './Routes/AllRoutes';
import Banner from './Components/HomePage/Banner';

function App() {
  return (
    <div className="App">

      <Navigationbar />

   <AllRoutes/>

    </div>
  );
}

export default App;
