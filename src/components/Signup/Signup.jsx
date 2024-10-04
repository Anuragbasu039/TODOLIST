import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '', 
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8080/api/signup', {
                username: formData.username, 
                email: formData.email,
                password: formData.password,
            });
            alert(res.data);
        } catch (error) {
            alert('Error signing up');
        }
    };

    return (
        <>
            <form className="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={handleSubmit}>
                <h1 className="block w-full text-center text-2xl font-bold mb-6">Signup</h1>

                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="username">Username</label>
                    <input
                        className="border py-2 px-3 text-grey-darkest"
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col mb-4 md:w-full">
                    <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="email">Email</label>
                    <input
                        className="border py-2 px-3 text-grey-darkest"
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="password">Password</label>
                    <input
                        className="border py-2 px-3 text-grey-darkest"
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex items-center justify-between gap-60">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        SignUp
                    </button>
                </div>
            </form>
        </>
    );
};

export default Signup;
