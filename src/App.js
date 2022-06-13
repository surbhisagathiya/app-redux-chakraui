import { ColorModeScript, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "./helpers/PrivateRoute";
import AddUser from "./users/AddUser";
import Dashboard from "./users/Dashboard";
import { EditUser } from "./users/EditUser";
import UserList from "./users/UserList";

function App() {
  return (
    <div className="App">
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Routes>
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
