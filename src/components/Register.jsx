
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    GraduationCap,
    UserRound,
    Hash,
    Mail,
    Phone,
    LockKeyhole,
    Eye,
    EyeOff,
    Leaf,
} from "lucide-react";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            fullName: "",
            rollNumber: "",
            email: "",
            className: "",
            phone: "",
            password: "",
        },
    });

    const password = watch("password");

    const onSubmit = async (data) => {
        console.log("Registration data:", data);
        // Connect your registration API or Firebase here.
    };

    const fields = [
        // Keep the form fields in the JSX below for accessible labels and errors.
    ];

    return (
        <main className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6">
            <section className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-surface shadow-card lg:min-h-[680px] lg:grid-cols-2">
                {/* Welcome Panel */}
                <aside className="relative hidden overflow-hidden bg-sidebar p-8 text-white sm:flex sm:flex-col sm:justify-between lg:p-12">
                    <div className="flex items-center gap-3">
                        <GraduationCap size={42} className="text-primary" />
                        <h1 className="text-sm font-bold leading-5">
                            Student
                            <br />
                            Management System
                        </h1>
                    </div>

                    <div className="relative z-10 max-w-sm">
                        <h2 className="mb-4 text-3xl font-bold leading-tight">
                            Join Our
                            <span className="block text-primary">Student Portal</span>
                        </h2>

                        <p className="text-sm leading-6 text-slate-300">
                            Create your account to access your dashboard, attendance and more.
                        </p>

                        {/* Decorative illustration */}
                        <div className="relative mt-8 flex h-64 items-center justify-center">
                            <div className="absolute h-56 w-56 rounded-full bg-primary/10" />

                            <div className="relative flex flex-col items-center">
                                <GraduationCap
                                    size={100}
                                    strokeWidth={1.5}
                                    className="text-primary drop-shadow-lg"
                                />

                                <div className="-mt-3 flex flex-col gap-1">
                                    <div className="h-4 w-40 -skew-x-6 rounded-sm bg-blue-400 shadow-md" />
                                    <div className="h-4 w-48 -skew-x-6 rounded-sm bg-slate-200 shadow-md" />
                                    <div className="h-4 w-44 -skew-x-6 rounded-sm bg-blue-600 shadow-md" />
                                    <div className="h-4 w-48 -skew-x-6 rounded-sm bg-slate-100 shadow-md" />
                                    <div className="h-4 w-44 -skew-x-6 rounded-sm bg-blue-700 shadow-md" />
                                </div>
                            </div>

                            <Leaf
                                size={66}
                                className="absolute bottom-10 right-3 rotate-12 text-emerald-400"
                            />
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-400">
                        © 2026 Student Management System. All rights reserved.
                    </p>
                </aside>

                {/* Registration Form */}
                <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
                    <div className="w-full max-w-md">
                        <div className="mb-6 flex items-center gap-3">
                            <GraduationCap className="text-primary" size={38} />
                            <span className="text-sm font-bold text-foreground">
                                Student Management System
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Student Signup
                        </h2>

                        <p className="mt-2 text-sm text-muted">
                            Fill in your details to create your account.
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-6 space-y-4"
                            noValidate
                        >
                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Full Name
                                </label>

                                <div className="flex items-center gap-3 rounded-md border border-border bg-background px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <UserRound size={18} className="shrink-0 text-muted" />
                                    <input
                                        id="fullName"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Enter your full name"
                                        aria-invalid={!!errors.fullName}
                                        className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
                                        {...register("fullName", {
                                            required: "Full name is required.",
                                            minLength: {
                                                value: 3,
                                                message: "Name must be at least 3 characters.",
                                            },
                                        })}
                                    />
                                </div>

                                {errors.fullName && (
                                    <p className="mt-1 text-xs text-danger">
                                        {errors.fullName.message}
                                    </p>
                                )}
                            </div>

                            {/* Roll Number */}
                            <div>
                                <label
                                    htmlFor="rollNumber"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Roll Number
                                </label>

                                <div className="flex items-center gap-3 rounded-md border border-border bg-background px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <Hash size={18} className="shrink-0 text-muted" />
                                    <input
                                        id="rollNumber"
                                        type="text"
                                        placeholder="Enter your roll number"
                                        aria-invalid={!!errors.rollNumber}
                                        className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
                                        {...register("rollNumber", {
                                            required: "Roll number is required.",
                                        })}
                                    />
                                </div>

                                {errors.rollNumber && (
                                    <p className="mt-1 text-xs text-danger">
                                        {errors.rollNumber.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Email Address
                                </label>

                                <div className="flex items-center gap-3 rounded-md border border-border bg-background px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <Mail size={18} className="shrink-0 text-muted" />
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Enter your email"
                                        aria-invalid={!!errors.email}
                                        className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
                                        {...register("email", {
                                            required: "Email address is required.",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Enter a valid email address.",
                                            },
                                        })}
                                    />
                                </div>

                                {errors.email && (
                                    <p className="mt-1 text-xs text-danger">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Class */}
                            <div>
                                <label
                                    htmlFor="className"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Class
                                </label>

                                <div className="flex items-center gap-3 rounded-md border border-border bg-background px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <GraduationCap size={18} className="shrink-0 text-muted" />
                                    <select
                                        id="className"
                                        aria-invalid={!!errors.className}
                                        className="w-full bg-transparent py-3 text-sm text-foreground outline-none"
                                        {...register("className", {
                                            required: "Please select your class.",
                                        })}
                                    >
                                        <option value="" className="bg-surface">
                                            Select your class
                                        </option>
                                        <option value="Class 9" className="bg-surface">
                                            Class 9
                                        </option>
                                        <option value="Class 10" className="bg-surface">
                                            Class 10
                                        </option>
                                        <option value="First Year" className="bg-surface">
                                            First Year
                                        </option>
                                        <option value="Second Year" className="bg-surface">
                                            Second Year
                                        </option>
                                    </select>
                                </div>

                                {errors.className && (
                                    <p className="mt-1 text-xs text-danger">
                                        {errors.className.message}
                                    </p>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Phone Number
                                </label>

                                <div className="flex items-center gap-3 rounded-md border border-border bg-background px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <Phone size={18} className="shrink-0 text-muted" />
                                    <input
                                        id="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="Enter your phone number"
                                        aria-invalid={!!errors.phone}
                                        className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
                                        {...register("phone", {
                                            required: "Phone number is required.",
                                            pattern: {
                                                value: /^[+()\d\s-]{7,20}$/,
                                                message: "Enter a valid phone number.",
                                            },
                                        })}
                                    />
                                </div>

                                {errors.phone && (
                                    <p className="mt-1 text-xs text-danger">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Password
                                </label>

                                <div className="flex items-center gap-3 rounded-md border border-border bg-background px-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <LockKeyhole
                                        size={18}
                                        className="shrink-0 text-muted"
                                    />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        placeholder="Create a password"
                                        aria-invalid={!!errors.password}
                                        className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
                                        {...register("password", {
                                            required: "Password is required.",
                                            minLength: {
                                                value: 8,
                                                message: "Use at least 8 characters.",
                                            },
                                        })}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="shrink-0 text-muted transition hover:text-primary"
                                        aria-label={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>

                                {errors.password && (
                                    <p className="mt-1 text-xs text-danger">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? "Creating account..." : "Create Account"}
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-muted">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="font-semibold text-primary hover:text-primary-hover"
                            >
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
