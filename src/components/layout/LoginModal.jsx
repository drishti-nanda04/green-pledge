"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
    const router = useRouter();
    const [isAnimating, setIsAnimating] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsAnimating(false);
        // Wait for animation to complete before closing
        setTimeout(() => {
            onClose();
        }, 500); // Increased from 300ms to 500ms
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = () => {
        if (validateForm()) {
            router.push("/dashboard");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ease-in-out ${
                    isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            />
            
            {/* Modal Content */}
            <div className={`bg-white shadow-xl rounded-lg p-8 w-full max-w-md relative z-50 transition-all duration-500 ease-in-out transform ${
                isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}>
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                    ✕
                </button>
                
                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                    Company Login
                </h2>

                <label className="block text-gray-700 mb-2">Company Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2 mb-1 border rounded-lg focus:outline-none focus:ring-2 transition-shadow duration-300 ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-600'
                    }`}
                    placeholder="company@example.com"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mb-3">{errors.email}</p>
                )}

                <label className="block text-gray-700 mb-2 mt-4">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-2 mb-1 border rounded-lg focus:outline-none focus:ring-2 transition-shadow duration-300 ${
                        errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-600'
                    }`}
                    placeholder="••••••••"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mb-3">{errors.password}</p>
                )}

                <button
                    onClick={handleLogin}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors duration-300"
                >
                    Login
                </button>
            </div>
        </div>
    );
} 