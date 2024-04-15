import './App.css';
import Home from './pages/home/Home.jsx';
import Classroom from './pages/classroom/Classroom.jsx';
import AttendanceCard from './components/attendanceCard/AttendanceCard.jsx'
// import studentData from './default.js'
// import Temp from './components/NotPresentAttendance.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/classroom/:classId" element={<Classroom />} />
        <Route path="/attendance" element={<AttendanceCard />} />
      </Routes>
    </div>
  );
}

export default App;