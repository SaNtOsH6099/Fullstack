const Signup = () => {
        return (

                <div className="login-container border p-6  flex flex-col gap-4 rounded-lg
                shadow-sm shadow-[#030712]">
                        <h2 className="text-xl text-center">Sign Up</h2>

                        <form onSubmit={(e) => e.preventDefault()} className=" flex flex-col gap-2 text-sm">
                                <div className="username flex flex-col gap-1">
                                        <label for="username">Username</label>
                                        <input type="text" id="username" name="username" placeholder="Enter your username"
                                                className="border boder border-[#6b7280] rounded-sm p-2 " required />
                                </div>
                                <div className="email flex flex-col gap-1">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="abc@gmail.com"
                                                className="border boder border-[#6b7280] rounded-sm p-2 " required />
                                </div>
                                <div className="password flex flex-col gap-1">
                                        <label for="password">Password</label>
                                        <input type="password" id="password" name="password" placeholder="●●●●●●●●●"
                                                className="border boder border-[#6b7280] rounded-sm p-2 " required />
                                </div>
                                <button type="submit" className="text-sm bg-[#15803d] p-2 mt-2 rounded-sm
                                cursor-pointer shadow-lg shadow-[#030712]">
                                        SIGNUP</button>
                        </form>
                </div>
        );
};

export default Signup;
