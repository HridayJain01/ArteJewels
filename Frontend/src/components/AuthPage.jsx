import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
        setMobile('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Logging in with', { email, password });
            toast.success(`Welcome back to Arte Jewels!`);
        } else {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            console.log('Signing up with', { email, password, name, mobile });
            toast.success(`Welcome to Arte Jewels, ${name}!`);
        }
    };

    return (
        <div className="bg-purple-700-100 min-h-screen flex items-center justify-center p-8 font-sans bg-custom-gradient">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-4xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-[#2a264e] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="inline-block align-baseline font-bold text-sm text-[#2a264e] hover:text-blue-800"
                        >
                            {isLogin ? 'Create an account' : 'Already have an account?'}
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AuthPage;