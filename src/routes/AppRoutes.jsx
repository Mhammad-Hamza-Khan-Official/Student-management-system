
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import AddStudent from "../components/AddStudent";
import Students from "../components/Students";
import Attendance from "../components/Attendance";

export default function AppRoutes() {
    const navigate = useNavigate()
    return (
        <Routes>
            <Route
                index
                element={<h1>Landing Page
                    <br />
                    <p onClick={()=>navigate("dashboard")}>Dashboard</p>
                </h1>}
            />
            <Route element={<DashboardLayout />}>
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/students" element={<Students/>} />
                <Route path="/attendance" element={<Attendance/>} />
            </Route>
            <Route path="*" element={<h1 className="text-4xl text-center">Not found</h1>} />
        </Routes>
    );
}
