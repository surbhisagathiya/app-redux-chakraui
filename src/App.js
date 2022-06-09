import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "./helpers/PrivateRoute";
import AddUser from "./users/AddUser";
import Dashboard from "./users/Dashboard";
import { EditUser } from "./users/EditUser";
import Login from "./users/Login";
import Signup from "./users/Signup";
import UserList from "./users/UserList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

          <Route exact path="/" element={<Dashboard />} />

          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/edit-user/:id" element={<EditUser />} />
          <Route exact path="/userlist" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
