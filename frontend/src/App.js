import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx';

// using map -> map the classes on hompage using the goToClassroom page when clicked redirect to main classroom page.

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;