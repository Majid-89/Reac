import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import { FaEye } from 'react-icons/fa';
import { MdOutlineAccountCircle } from 'react-icons/md';

const Signup = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto pt-5 shadow-2xl max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-[#887735] sm:text-3xl">SignUp</h1>

                    <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative py-4">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Name"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <MdOutlineAccountCircle className='text-gray-400' />
                                </span>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <CgMail className='text-gray-400' />
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <FaEye className='text-gray-400' />
                                </span>
                            </div>

                            <div className="relative py-4">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Confirm password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <FaEye className='text-gray-400' />
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-[#887735] px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Already a member?
                            <Link className="underline" to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
