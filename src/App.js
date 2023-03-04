import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"


// IMPORT OF COMPONENTS
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Aside from './components/Aside';
import User from './pages/User/User';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Aside />
      <User />



      <Footer />
    </div>
  );
}

export default App;
