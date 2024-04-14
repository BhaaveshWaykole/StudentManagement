import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx';
import Classroom from './pages/classroom/Classroom.jsx';
import AttendanceCard from './components/attendanceCard/AttendanceCard.jsx'
import studentData from './default.js'
import Temp from './components/NotPresentAttendance.jsx'
function App() {
  const handleClick = (id) => {
    console.log(id)
  }
  return (
    <div className="App">
      <Temp />
      {/* <Navbar /> */}
      {/* <a href="#" onClick={() => handleClick(studentData[0]._id)}>
        {studentData[0].username}
      </a> */}
      {/* <Home /> */}
      {/* <Classroom /> */}
      {/* <AttendanceCard /> */}
    </div>
  );
}

export default App;