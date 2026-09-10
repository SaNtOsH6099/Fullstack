
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
        return (
                <div className=" border border-amber-300 min-h-screen flex flex-col justify-between">
                        {/* BrowserRouter enables routing */}
                        <BrowserRouter >
                                <div className="nav-container bg-[#030712]">
                                        {/* navbar */}
                                        < nav className="max-w-300 m-auto flex justify-between py-4 px-2 items-center">
                                                <div className="dashboard">
                                                        {/* link tag is alternative to a for routing */}
                                                        <Link to="/dashboard" className="py-1 px-4 ">Dashboard</Link>
                                                </div>
                                                <div className="Home">
                                                        <Link to="/" className="py-1 px-4 ">Home</Link>
                                                </div>
                                                <div className="sign flex gap-2">
                                                        <Link to="/signup" className="py-1 px-4">Signup</Link>
                                                        <Link to="/login" className="py-1 px-4 ">Login</Link>
                                                </div>
                                        </ nav>
                                </div>

                                <div className="routes max-w-300 mx-auto  my-4">
                                        {/* routes container for the pages */}
                                        <Routes>
                                                {/* routing pages according to paths */}
                                                <Route path="/" element={<Home />}></Route>
                                                <Route path="/dashboard" element={<Dashboard />}></Route>
                                                <Route path="/signup" element={<Signup />} ></Route>
                                                <Route path="/login" element={<Login />} ></Route>
                                        </Routes>
                                </div>

                                {/* FOOTER */}
                                <footer className="w-full flex justify-center items-center p-8 bg-[#030712]">
                                        © 2026 Mangroove • Privacy • Terms
                                </footer>
                        </BrowserRouter >
                </div >
        );
};

export default App;
