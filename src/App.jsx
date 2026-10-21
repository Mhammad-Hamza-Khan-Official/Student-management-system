// App.jsx
import {
  GraduationCap,
  LayoutDashboard,
  UserPlus,
  Users,
  ClipboardCheck,
  LogOut,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Pencil,
  Trash2,
  Check,
  X,
  CalendarDays,
  Save,
  Menu,
  Bell,
  BookOpen,
} from "lucide-react";

const students = [
  { id: 1, name: "Ayesha Khan", roll: "ST001", className: "BSc CS", email: "ayesha@uni.edu", phone: "9876543210" },
  { id: 2, name: "Ali Raza", roll: "ST002", className: "BSc CS", email: "ali@uni.edu", phone: "9876543211" },
  { id: 3, name: "Sara Ahmed", roll: "ST003", className: "BBA", email: "sara@uni.edu", phone: "9876543212" },
  { id: 4, name: "Usman Tariq", roll: "ST004", className: "BSc IT", email: "usman@uni.edu", phone: "9876543213" },
  { id: 5, name: "Fatima Noor", roll: "ST005", className: "BBA", email: "fatima@uni.edu", phone: "9876543214" },
  { id: 6, name: "Hassan Ali", roll: "ST006", className: "BSc CS", email: "hassan@uni.edu", phone: "9876543215" },
  { id: 7, name: "Zainab Khan", roll: "ST007", className: "BBA", email: "zainab@uni.edu", phone: "9876543216" },
  { id: 8, name: "Bilal Ahmed", roll: "ST008", className: "BSc IT", email: "bilal@uni.edu", phone: "9876543217" },
];

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Add Student", icon: UserPlus },
  { label: "Students", icon: Users },
  { label: "Attendance", icon: ClipboardCheck },
];

const attendance = [
  "Present",
  "Absent",
  "Present",
  "Present",
  "Absent",
  "Present",
  "Present",
  "Absent",
];

function Sidebar({ active }) {
  return (
    <aside className="flex min-h-screen w-52 shrink-0 flex-col bg-sidebar text-white">
      <div className="flex h-[76px] items-center gap-3 border-b border-white/10 px-4">
        <GraduationCap size={34} className="shrink-0 text-blue-200" />
        <div className="text-sm font-bold leading-tight">
          <div>Student</div>
          <div>Management</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-2.5 py-5">
        {navigation.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className={`sidebar-link ${active === label ? "sidebar-link-active" : ""}`}
          >
            <Icon size={17} />
            {label}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-3 px-5 py-5 text-sm text-slate-300">
        <LogOut size={17} />
        Logout
      </div>
    </aside>
  );
}

function Header({ title }) {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-border bg-white px-5 sm:px-7">
      <h1 className="page-title">{title}</h1>
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
          <Users size={18} />
        </div>
        <div className="hidden sm:block">
          <p className="text-xs font-semibold">Welcome</p>
          <p className="text-[11px] text-muted">Administrator</p>
        </div>
        <ChevronDown size={15} className="text-muted" />
      </div>
    </header>
  );
}

function StatCard({ title, value, icon: Icon, color }) {
  const colors = {
    blue: "bg-primary text-white",
    green: "bg-success text-white",
    red: "bg-danger text-white",
  };

  return (
    <div className="card flex items-center gap-4 p-4">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${colors[color]}`}>
        <Icon size={23} />
      </div>
      <div>
        <p className="text-xs text-muted">{title}</p>
        <p className="mt-1 text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function StudentTable({ rows = students.slice(0, 5), recent = false }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-left">
        <thead>
          <tr className="table-heading">
            {["#", "Name", "Roll Number", "Class", "Email", ...(recent ? ["Phone"] : []), "Action"].map((heading) => (
              <th key={heading} className="px-3 py-3 font-semibold">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((student, index) => (
            <tr key={student.id} className="transition-colors hover:bg-blue-50/50">
              <td className="table-cell text-muted">{index + 1}</td>
              <td className="table-cell font-medium">{student.name}</td>
              <td className="table-cell text-muted">{student.roll}</td>
              <td className="table-cell text-muted">{student.className}</td>
              <td className="table-cell text-muted">{student.email}</td>
              {recent && <td className="table-cell text-muted">{student.phone}</td>}
              <td className="table-cell">
                <div className="flex items-center gap-1.5">
                  <button className="action-button bg-primary text-white">
                    View
                  </button>
                  <button className="action-button border border-primary/40 text-primary">
                    Edit
                  </button>
                  <button className="action-button bg-danger text-white">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-5">
      <section className="card flex items-center gap-4 p-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
          <GraduationCap size={32} />
        </div>
        <div>
          <h2 className="font-bold">Welcome to Student Management System</h2>
          <p className="mt-1 text-sm text-muted">
            Manage your students and attendance easily.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Total Students" value="25" icon={Users} color="blue" />
        <StatCard title="Present Today" value="20" icon={Check} color="green" />
        <StatCard title="Absent Today" value="5" icon={X} color="red" />
      </section>

      <section className="card overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <h2 className="text-sm font-bold">Recent Students</h2>
            <p className="mt-1 text-xs text-muted">Recently registered students</p>
          </div>
          <span className="text-xs font-semibold text-primary">View All</span>
        </div>
        <StudentTable />
      </section>
    </div>
  );
}

function AddStudent() {
  return (
    <section className="card p-5 sm:p-7">
      <div className="mb-6 flex items-center gap-3 border-b border-border pb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
          <UserPlus size={21} />
        </div>
        <div>
          <h2 className="text-sm font-bold">Student Information</h2>
          <p className="mt-1 text-xs text-muted">Enter student details below</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Name">
          <input className="form-input" placeholder="Enter student name" />
        </FormField>
        <FormField label="Roll Number">
          <input className="form-input" placeholder="Enter roll number" />
        </FormField>
        <FormField label="Email">
          <input className="form-input" placeholder="Enter email address" />
        </FormField>
        <FormField label="Class">
          <select className="form-input">
            <option>Select class</option>
            <option>BSc CS</option>
            <option>BSc IT</option>
            <option>BBA</option>
          </select>
        </FormField>
        <div className="md:col-span-2">
          <FormField label="Phone">
            <input className="form-input" placeholder="Enter phone number" />
          </FormField>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white">
          <Save size={16} />
          Save Student
        </button>
      </div>
    </section>
  );
}

function StudentsPage() {
  return (
    <section className="card overflow-hidden">
      <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-bold">All Students</h2>
          <p className="mt-1 text-xs text-muted">Manage registered students</p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white">
          <UserPlus size={16} />
          Add Student
        </button>
      </div>

      <div className="flex flex-col gap-2 px-5 pb-5 sm:flex-row">
        <div className="relative flex-1">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input className="form-input pl-10" placeholder="Search by name or roll number..." />
        </div>
        <button className="flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white">
          <Search size={16} />
          Search
        </button>
      </div>

      <StudentTable rows={students} />

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4">
        <p className="text-xs text-muted">Showing 1 to 8 of 25 students</p>
        <div className="flex items-center gap-1">
          {[<ChevronLeft size={16} />, "1", "2", "3", <ChevronRight size={16} />].map((item, index) => (
            <button
              key={index}
              className={`flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-sm ${
                index === 1
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-muted"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function AttendancePage() {
  return (
    <div className="space-y-5">
      <section className="card p-5">
        <h2 className="mb-5 text-sm font-bold">Select Date</h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <input type="date" defaultValue="2025-05-14" className="form-input" />
          </div>
          <button className="flex h-[42px] items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white">
            <CalendarDays size={16} />
            View Attendance
          </button>
        </div>
      </section>

      <section className="card overflow-hidden">
        <div className="px-5 py-4">
          <h2 className="text-sm font-bold">Attendance List (14 May 2025)</h2>
          <p className="mt-1 text-xs text-muted">Daily student attendance records</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left">
            <thead className="table-heading">
              <tr>
                {["#", "Name", "Roll Number", "Class", "Status", "Action"].map((heading) => (
                  <th key={heading} className="px-4 py-3">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id} className="hover:bg-blue-50/50">
                  <td className="table-cell text-muted">{index + 1}</td>
                  <td className="table-cell font-medium">{student.name}</td>
                  <td className="table-cell text-muted">{student.roll}</td>
                  <td className="table-cell text-muted">{student.className}</td>
                  <td className="table-cell">
                    <span className={`inline-flex min-w-24 items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium ${
                      attendance[index] === "Present"
                        ? "bg-success-light text-emerald-700"
                        : "bg-danger-light text-red-600"
                    }`}>
                      {attendance[index]}
                      <ChevronDown size={13} className="ml-2" />
                    </span>
                  </td>
                  <td className="table-cell">
                    <button className="rounded-md border border-primary/40 px-3 py-1.5 text-xs font-semibold text-primary">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="block text-sm font-semibold">
        {label} <span className="text-danger">*</span>
      </span>
      {children}
    </label>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <Sidebar active="Dashboard" />

        <main className="min-w-0 flex-1">
          <Header title="Dashboard" />

          <div className="mx-auto max-w-[1600px] space-y-5 p-4 sm:p-6 lg:p-7">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}