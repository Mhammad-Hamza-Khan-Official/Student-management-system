
import { Save, UserPlus } from "lucide-react";
import { FormField, PageCard, inputClasses, buttonClasses } from "./Ui";

export default function AddStudent() {
    return (
        <PageCard className="p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-card bg-primary-light text-primary">
                    <UserPlus size={21} />
                </div>

                <div>
                    <h3 className="font-bold text-foreground">
                        Student Information
                    </h3>
                    <p className="mt-1 text-xs text-muted">
                        Enter the student's details below
                    </p>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <FormField label="Name">
                    <input
                        className={inputClasses}
                        placeholder="Enter student name"
                    />
                </FormField>

                <FormField label="Roll Number">
                    <input
                        className={inputClasses}
                        placeholder="Enter roll number"
                    />
                </FormField>

                <FormField label="Email">
                    <input
                        type="email"
                        className={inputClasses}
                        placeholder="Enter email address"
                    />
                </FormField>

                <FormField label="Class">
                    <select className={inputClasses} defaultValue="">
                        <option value="" disabled>Select class</option>
                        <option value="BSc CS">BSc Computer Science</option>
                        <option value="BSc IT">BSc Information Technology</option>
                        <option value="BBA">BBA</option>
                        <option value="BS AI">BS Artificial Intelligence</option>
                    </select>
                </FormField>

                <div className="md:col-span-2">
                    <FormField label="Phone">
                        <input
                            type="tel"
                            className={inputClasses}
                            placeholder="Enter phone number"
                        />
                    </FormField>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                <button className={`${buttonClasses} flex-1 sm:flex-none sm:min-w-48`}>
                    <Save size={16} />
                    Save Student
                </button>

                <button className="rounded-button border border-border px-5 py-3 text-sm font-semibold text-muted hover:bg-sidebar-hover">
                    Reset
                </button>
            </div>
        </PageCard>
    );
}
