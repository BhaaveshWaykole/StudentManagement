import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import ClassCard from './components/classcard/ClassCard.jsx';

function App() {
  return (
    <div className="App">
      {/* <h1 className="italic text-3xl text-orange-900">WELCOME</h1> */}
      <Navbar />
      <ClassCard />
    </div>
  );
}

export default App;