import {
  HashRouter as Router,
  Route, 
  Routes
} from "react-router-dom";


import './App.css';
import Header from './components/Header';
import ItemsListpage from './pages/ItemsListpage';
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div className="container dark">

    <Router>
      <div className="app">
    <Header />
      <Routes> 
          <Route path="/" exact  element={<ItemsListpage />} />
          <Route path="/item/:id"  element={ <ItemPage /> } />
      </Routes>

      </div>
    </Router>
    </div>
    
  );
}

export default App;
