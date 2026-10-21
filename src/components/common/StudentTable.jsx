
import { Eye, Pencil, Trash2, Users } from "lucide-react";

export default function StudentTable({ rows }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[740px] border-collapse text-left">
                <thead>
                    <tr className="border-y border-border bg-background">
                        {[
                            "#",
                            "Name",
                            "Roll Number",
                            "Class",
                            "Email",
                            "Phone",
                            "Actions",
                        ].map((heading) => (
                            <th
                                key={heading}
                                className="whitespace-nowrap px-3 py-3 text-xs font-semibold text-muted"
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((student, index) => (
                        <tr
                            key={student.id}
                            className="border-b border-border transition-colors hover:bg-sidebar-hover"
                        >
                            <td className="px-3 py-3 text-xs text-muted">
                                {index + 1}
                            </td>

                            <td className="whitespace-nowrap px-3 py-3 text-xs font-semibold text-foreground">
                                {student.name}
                            </td>

                            <td className="px-3 py-3 text-xs text-muted">
                                {student.roll}
                            </td>

                            <td className="whitespace-nowrap px-3 py-3 text-xs text-muted">
                                {student.className}
                            </td>

                            <td className="px-3 py-3 text-xs text-muted">
                                {student.email}
                            </td>

                            <td className="px-3 py-3 text-xs text-muted">
                                {student.phone}
                            </td>

                            <td className="px-3 py-3">
                                <div className="flex items-center gap-1.5">
                                    <button className="rounded-button bg-primary p-2 text-white hover:bg-primary-hover" aria-label="View student">
                                        <Eye size={14} />
                                    </button>

                                    <button className="rounded-button border border-border p-2 text-primary hover:bg-primary-light" aria-label="Edit student">
                                        <Pencil size={14} />
                                    </button>

                                    <button className="rounded-button bg-danger p-2 text-white hover:opacity-90" aria-label="Delete student">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {rows.length === 0 && (
                <div className="px-5 py-12 text-center">
                    <Users className="mx-auto mb-3 text-muted" size={32} />
                    <p className="font-semibold text-foreground">No students found</p>
                </div>
            )}
        </div>
    );
}
