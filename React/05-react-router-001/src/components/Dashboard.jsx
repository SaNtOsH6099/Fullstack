import place2 from "../images/place-2.png"
import dash from "../images/dash.png"

const Dashboard = () => {
        return (
                <div className="dashboard grid grid-cols-6 grid-rows-4 p-2 gap-8">

                        <aside className="side-detail col-span-2 row-span-4 flex flex-col gap-3  ">
                                <div className="dash-img shadow-lg shadow-[#030712]">
                                        <img src={place2} alt="side image" className="w-full" />
                                        <div className="side-desc flex flex-col gap-2 p-2">
                                                <h1 className=" font-bold">The Forest</h1>
                                                <p className="desc text-[#e5e7eb] text-sm">
                                                        Step into The Forest, a lush natural haven filled with vibrant tropical flora
                                                        and dense green canopy. Home to exotic blooms like the bird of paradise,
                                                        it offers a serene escape for nature lovers and peaceful walks.
                                                </p>
                                        </div>
                                </div>
                                <div className="popular-list  flex flex-col gap-2  shadow-lg shadow-[#030712] p-2">
                                        <h2>Popular Posts</h2>
                                        <ul className="post-list flex flex-col gap-3">
                                                <li className="post-item flex flex-col gap-1">
                                                        <h3 className="post-title text-sm">Top 5 Hidden Trails</h3>
                                                        <p className="post-desc text-xs text-[#e5e7eb]">Discover quiet paths and scenic spots for your next getaway.</p>
                                                </li>
                                                <li className="post-item flex flex-col gap-1">
                                                        <h3 className="post-title text-sm">Essential Outdoor Gear</h3>
                                                        <p className="post-desc text-xs text-[#e5e7eb]">Pack the right basics for a safe and easy adventure.</p>
                                                </li>
                                                <li className="post-item flex flex-col gap-1">
                                                        <h3 className="post-title text-sm">Mindful Walking Tips</h3>
                                                        <p className="post-desc text-xs text-[#e5e7eb]">Simple ways to connect with nature and clear your mind.</p>
                                                </li>
                                                <li className="post-item flex flex-col gap-1">
                                                        <h3 className="post-title text-sm">Capturing Golden Hour</h3>
                                                        <p className="post-desc text-xs text-[#e5e7eb]">Quick photographer secrets for stunning outdoor landscape photos.</p>
                                                </li>
                                        </ul>
                                </div>
                        </aside>


                        <div className="col-span-4 row-span-4">
                                <div className="hero-details flex flex-col gap-2   shadow-lg shadow-[#030712]">
                                        <img src={dash} alt="hero image" />
                                        <div className="detail p-2 flex flex-col gap-2 ">
                                                <h1 className="text-lg font-bold ">The Mangrove Beach</h1>
                                                <p className="text-xs">text description , September</p>
                                                <p className="desc text-[#e5e7eb] text-sm">
                                                        Escape to The Mangrove Beach, a breathtaking sanctuary where quiet shorelines
                                                        and vibrant coastal mangroves blend under endless sunny skies. Perfect for nature lovers,
                                                        peaceful walks, and scenic horizons.
                                                </p>
                                        </div>

                                </div>
                        </div>
                </div>
        );
};

export default Dashboard;
