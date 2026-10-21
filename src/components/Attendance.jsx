
import { CalendarDays, ClipboardCheck, ChevronDown } from "lucide-react";
import { students, attendance } from "../data/students";
import { buttonClasses, FormField, inputClasses, PageCard } from "./Ui";

export default function Attendance() {
    return (
        <div className="space-y-5">
            <PageCard className="p-5">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-card bg-primary-light text-primary">
                        <CalendarDays size={21} />
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground">
                            Attendance Management
                        </h3>
                        <p className="mt-1 text-xs text-muted">
                            Select a date to view attendance
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                    <div className="flex-1">
                        <FormField label="Select Date" required={false}>
                            <input
                                type="date"
                                defaultValue="2026-10-21"
                                className={inputClasses}
                            />
                        </FormField>
                    </div>

                    <button className={buttonClasses}>
                        <ClipboardCheck size={16} />
                        View Attendance
                    </button>
                </div>
            </PageCard>

            <PageCard className="overflow-hidden">
                <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-bold text-foreground">
                        Attendance List
                    </h3>
                    <span className="text-xs text-muted">
                        {students.length} students
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left">
                        <thead className="border-y border-border bg-background">
                            <tr>
                                {["#", "Name", "Roll Number", "Class", "Status"].map(
                                    (heading) => (
                                        <th
                                            key={heading}
                                            className="px-4 py-3 text-xs font-semibold text-muted"
                                        >
                                            {heading}
                                        </th>
                                    ),
                                )}
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((student, index) => {
                                const isPresent = attendance[index] === "Present";

                                return (
                                    <tr
                                        key={student.id}
                                        className="border-b border-border hover:bg-sidebar-hover"
                                    >
                                        <td className="px-4 py-3 text-xs text-muted">
                                            {index + 1}
                                        </td>

                                        <td className="px-4 py-3 text-xs font-semibold text-foreground">
                                            {student.name}
                                        </td>

                                        <td className="px-4 py-3 text-xs text-muted">
                                            {student.roll}
                                        </td>

                                        <td className="px-4 py-3 text-xs text-muted">
                                            {student.className}
                                        </td>

                                        <td className="px-4 py-3">
                                            <span
                                                className={`inline-flex min-w-24 items-center justify-center gap-2 rounded-button px-3 py-1.5 text-xs font-medium ${isPresent
                                                        ? "bg-success-light text-success"
                                                        : "bg-danger-light text-danger"
                                                    }`}
                                            >
                                                {attendance[index]}
                                                <ChevronDown size={13} />
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </PageCard>
        </div>
    );
}
