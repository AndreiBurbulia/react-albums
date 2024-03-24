import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import Details from './Pages/Details';
import Layout from './Layouts/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/details/:id" Component={Details} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
