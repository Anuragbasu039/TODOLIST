import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import Login from '../Login/Login';


const Header = () => {
    



    return (
        <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-md sm">
         
            <div className="flex items-center bg-gray-100 p-2 rounded-md w-full max-w-lg">
                <span className="material-icons text-gray-500 pr-2">search</span>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent w-full outline-none"
                />
            </div>

            <Dialog>
                <DialogTrigger asChild>
                    <button className="ml-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition">
                        + Add
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-md shadow-md">
                    <DialogTitle className="text-lg font-medium">Add Note</DialogTitle>
                    <form className="space-y-4">
                      
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    placeholder="Add title"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                <select
                                    id="category"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                                >
                                    <option>Home</option>
                                    <option>Business</option>
                                    <option>Personal</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (optional)</label>
                            <textarea
                                id="description"
                                placeholder="Add description"
                                maxLength="200"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                                rows="4"
                            />
                            <p className="text-sm text-gray-500 text-right">0/200</p>
                        </div>

                    
                        <div className="flex justify-end space-x-2">
                            <button type="button" className="px-4 py-2 bg-gray-300 rounded-md">
                                Cancel
                            </button>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                                Add
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="ml-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition">
                        Login
                    </button>
                </DialogTrigger>
                <DialogContent>
                 
                <Login/>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default Header;
