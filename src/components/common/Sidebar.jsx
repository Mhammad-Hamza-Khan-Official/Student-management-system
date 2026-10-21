import {
    GraduationCap,
    LayoutDashboard,
    UserPlus,
    Users,
    ClipboardCheck,
    LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navigation = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Add Student", path: "/add-student", icon: UserPlus },
    { label: "Students", path: "/students", icon: Users },
    { label: "Attendance", path: "/attendance", icon: ClipboardCheck },
];

export default function Sidebar() {
    return (
        <aside className="fixed inset-y-0 lg:flex flex-col hidden left-0 z-40  w-56  overflow-y-auto border-r border-border bg-sidebar text-foreground">
            {/* Logo */}
            <div className="flex h-[76px] shrink-0 items-center gap-3 border-b border-border px-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-sidebar-hover">
                    <GraduationCap size={28} className="text-primary" />
                </div>

                <div className="min-w-0">
                    <h1 className="text-sm font-bold">Student</h1>
                    <p className="text-sm font-bold">Management</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-5">
                {navigation.map(({ label, path, icon: Icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-button px-3 py-3 text-sm transition-colors ${isActive
                                ? "bg-primary font-semibold text-white"
                                : "text-muted hover:bg-sidebar-hover hover:text-foreground"
                            }`
                        }
                    >
                        <Icon size={18} className="shrink-0" />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Logout */}
            <button
                type="button"
                className="mx-3 mb-5 flex shrink-0 items-center gap-3 rounded-button px-3 py-3 text-sm text-muted transition-colors hover:bg-sidebar-hover hover:text-foreground"
            >
                <LogOut size={18} />
                Logout
            </button>
        </aside>
    );
}