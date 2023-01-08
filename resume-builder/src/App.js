import Header from './components/Header.js' 
import SubHeading from './components/SubHeading' 
import SampleImage from './components/SampleImage' 
import Details from './components/form-components/Details.js';


function App() {
  return (
    <div className="App">
      <Header/>  

      <SubHeading 
        text= 'Sample Resume:'/>  
      <SampleImage/> 

      <SubHeading 
        text= 'Enter Your Details:'/> 

      <Details/>

    </div>
  );
}

export default App;
