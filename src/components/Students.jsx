import { ChevronLeft, ChevronRight, Search, UserPlus } from "lucide-react";
import { buttonClasses, inputClasses, PageCard } from "./Ui";
import StudentTable from "./common/StudentTable";
import { students } from "../data/students";



export default function Students() {
    return (
        <PageCard className="overflow-hidden">
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="font-bold text-foreground">All Students</h3>
                    <p className="mt-1 text-xs text-muted">
                        {students.length} student records
                    </p>
                </div>

                <button className={buttonClasses}>
                    <UserPlus size={16} />
                    Add Student
                </button>
            </div>

            <div className="flex flex-col gap-2 px-5 pb-5 sm:flex-row">
                <div className="relative flex-1">
                    <Search
                        size={17}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                        className={`${inputClasses} pl-10`}
                        placeholder="Search by name, roll number, or email..."
                    />
                </div>

                <button className={buttonClasses}>
                    <Search size={16} />
                    Search
                </button>
            </div>

            <StudentTable    rows={students.slice(0, 8)} />

            <div className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">
                    Showing 1–8 of {students.length} students
                </p>

                <div className="flex items-center justify-end gap-1">
                    {[<ChevronLeft size={16} />, "1", "2", <ChevronRight size={16} />].map(
                        (item, index) => (
                            <button
                                key={index}
                                className={`flex h-9 min-w-9 items-center justify-center rounded-button border px-2 text-sm ${index === 1
                                        ? "border-primary bg-primary text-white"
                                        : "border-border bg-surface text-muted hover:bg-sidebar-hover"
                                    }`}
                            >
                                {item}
                            </button>
                        ),
                    )}
                </div>
            </div>
        </PageCard>
    );
}
