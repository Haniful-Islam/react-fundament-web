
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import Allproducts from './Components/Allproducts/Allproducts';


function App() {
 
  return (
    <div className="App">
      <Menubar></Menubar>
      <Allproducts></Allproducts>
    </div>
  );
}

export default App;
