import './App.css';
import MapData from './component/map/MapData';
import Upload from './component/uploadData/Upload';
// import {BrowserRouter, Route, Routes,} from "react-router-dom"
// import MapData from "./component/map/MapData"

function App() {
   let click=true
    
  return (
    <div className="App">
       {/* <BrowserRouter>
                <Routes>
                    <Route path="/next" element={<MapData/>}/>
                </Routes>
        </BrowserRouter> */}

   {/* {   click=true? <Upload/> : <MapData/>} */}
      
       {   click=false?  <MapData/> : <Upload/>}
    
  
    </div>
  );
}

export default App;
