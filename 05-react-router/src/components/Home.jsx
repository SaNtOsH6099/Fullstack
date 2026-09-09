
import img from "../images/hero-img.jpg"
import img2 from "../images/hero-img2.jpg"
import place1 from "../images/place-1.png"
import place2 from "../images/place-2.png"
import place3 from "../images/place-3.png"
import place4 from "../images/place-4.png"
const Home = () => {
        return (
                <div className="home-grid grid grid-cols-6 grid-rows-6 p-2 gap-4 ">
                        <section className="hero col-span-4 row-span-5 flex flex-col gap-3
                        shadow-lg shadow-[#030712]">
                                <img src={img} alt="hero image" />
                                <div className="hero-details flex flex-col gap-2 p-2">
                                        <h1 className="text-lg font-bold">The Mangrove Beach</h1>
                                        <p className="desc text-[#e5e7eb] text-sm">
                                                Escape to The Mangrove Beach, a breathtaking sanctuary where quiet shorelines
                                                and vibrant coastal mangroves blend under endless sunny skies. Perfect for nature lovers,
                                                peaceful walks, and scenic horizons.
                                        </p>
                                </div>
                        </section>

                        <aside className="sidebar col-span-2 row-span-6 flex flex-col gap-4">
                                <div className="side-detail flex flex-col gap-3 shadow-lg shadow-[#030712]">
                                        <img src={img2} alt="side image" />
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
                                        <h2>Popular Places</h2>
                                        <ul className="place-list flex flex-col gap-3">
                                                <li className="place-item flex gap-2">
                                                        <img src={place1} alt="place 1" className="w-1/4 rounded-xs" />
                                                        <div className="place-detail flex  flex-col gap-1">
                                                                <h3 className="place-name text-sm">Sundarbans</h3>
                                                                <p className="place-desc text-xs">World's largest mangrove forest and famous Bengal tiger reserve.</p>
                                                        </div>
                                                </li>
                                                <li className="place-item flex gap-2">
                                                        <img src={place2} alt="place 2" className="w-1/4 rounded-x" />
                                                        <div className="place-detail flex  flex-col gap-1">
                                                                <h3 className="place-name text-sm">Pichavaram</h3>
                                                                <p className="place-desc text-xs">Vast mangrove network featuring scenic backwater boat canals.</p>
                                                        </div>
                                                </li>
                                                <li className="place-item flex gap-2">
                                                        <img src={place3} alt="3" className="w-1/4 rounded-x" />
                                                        <div className="place-detail flex  flex-col gap-1">
                                                                <h3 className="place-name text-sm">Bhitarkanika</h3>
                                                                <p className="place-desc text-xs">Protected wetland sanctuary home to giant saltwater crocodiles.</p>
                                                        </div>
                                                </li>
                                                <li className="place-item flex gap-2">
                                                        <img src={place4} alt="place 4" className="w-1/4 rounded-x" />
                                                        <div className="place-detail flex  flex-col gap-1" >
                                                                <h3 className="place-name text-sm">Galapagos Coastal Mangroves</h3>
                                                                <p className="place-desc text-xs">Shoreline habitat supporting unique marine and coastal wildlife.</p>
                                                        </div>
                                                </li>
                                        </ul>
                                </div>

                        </aside>
                </div>
        );
};

export default Home;
