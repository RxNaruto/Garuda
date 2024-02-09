import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
const App=()=>{
  return<>
    <div>
      <Services label={"Attorny"}/>
      <Footer label={"Contact Us"}/>
      <Footer label={"Feedback"}/>
    </div>
    <div>
      <Footer label={"About Us"}/>
      <Footer label={"Terms and Services"}/>

          </div>
  </>
}

export default App;