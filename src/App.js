import Dashboard from "./layouts/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageUsers from "./pages/ManageUsers";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import CreateCompany from "./pages/CreateCompany";
import ManageCompanies from "./pages/ManageCompanies";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50">
        <Dashboard />
        <Routes>
          <Route path="/" element={<ManageUsers />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/:userId" element={<EditUser />} />
          <Route path="/companies" element={<ManageCompanies />} />
          <Route path="/companies/create" element={<CreateCompany />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
