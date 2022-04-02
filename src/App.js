import {Routes, BrowserRouter as Router, Route} from "react-router-dom"
import NavBar from "./component/Navbar/Navbar"
import Home from "./component/Home/Home"

function App() {
  return (
    <div>
      <h2 className='pt-4 bg-red-500 text-blue-600'>Hello world</h2>
    </div>
    // <Router>
    // <NavBar/>
    // <Routes>
    //   <Route path='/' element={<Home></Home>}></Route>
    // </Routes>
    // </Router>
  );
}

export default App;
