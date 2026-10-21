import { Check, GraduationCap, Users, X } from "lucide-react";
import { PageCard, StatCard } from "./Ui";
import StudentTable from "./common/StudentTable";
import { attendance, students } from "../data/students";



export default function Dashboard() {
    const presentCount = attendance.filter(
        (status) => status === "Present",
    ).length;

    const absentCount = attendance.filter(
        (status) => status === "Absent",
    ).length;

    return (
        <div className="space-y-5">
            <PageCard className="flex items-center gap-4 p-5 sm:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                    <GraduationCap size={31} />
                </div>

                <div>
                    <h3 className="text-lg font-bold text-foreground">
                        Welcome to Student Management System
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                        Manage your students and attendance easily.
                    </p>
                </div>
            </PageCard>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatCard
                    icon={Users}
                    label="Total Students"
                    value={students.length}
                    color="blue"
                />

                <StatCard
                    icon={Check}
                    label="Present Today"
                    value={presentCount}
                    color="green"
                />

                <StatCard
                    icon={X}
                    label="Absent Today"
                    value={absentCount}
                    color="red"
                />
            </section>

            <PageCard className="overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4">
                    <div>
                        <h3 className="font-bold text-foreground">Recent Students</h3>
                        <p className="mt-1 text-xs text-muted">
                            Latest student records
                        </p>
                    </div>

                    <span className="cursor-pointer text-sm font-semibold text-primary">
                        View All
                    </span>
                </div>
                <StudentTable rows={students.slice(0, 5)} />
            </PageCard>
        </div>
    );
}
