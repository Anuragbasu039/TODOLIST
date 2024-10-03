import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import Signup from '../Signup/Signup';

const Login = () => {
    return (
        <>
            <h1 className="block w-full text-center text-2xl font-bold mb-6">Login</h1>
            <form className="mb-4 md:flex md:flex-wrap md:justify-between">
                <div className="flex flex-col mb-4 md:w-full">
                    <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="email">
                        Email
                    </label>
                    <input className="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email" />
                </div>
                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="password">
                        Password
                    </label>
                    <input className="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password" />
                </div>
                <div className="flex items-center justify-between gap-60">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
                        Login
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/forgetpassword">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <div className="text-center">
                <p className="text-grey-dark text-sm">
                    Don't have an account?{" "}
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="no-underline text-blue font-bold">
                                Sign up
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <Signup />
                        </DialogContent>
                    </Dialog>

                </p>
            </div>

        </>
    )
}

export default Login