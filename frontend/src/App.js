import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx';
import Classroom from './pages/classroom/Classroom.jsx';
import AnnouncementPg from './components/announcements/AnnouncementPg.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Classroom />
    </div>
  );
}

export default App;