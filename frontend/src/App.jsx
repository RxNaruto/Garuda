import {  Notary } from "./components/Notary";
import { S_homebutton } from "./components/S_homebutton";


const App=()=>{
  return<>
    <div className="text-2xl rounded-md flex justify-center bg-red text-white ">
      <S_homebutton label={"Home"}/>
    </div>
    
    <div className="text-2xl rounded-md flex justify-center bg-cream_white red " >
      <Notary label={"Notary Services"}/>
    </div>
  </>
}

export default App;