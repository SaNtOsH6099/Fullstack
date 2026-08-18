
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {

        // initial shoes data
        const data = [
                {
                        id: 1,
                        name: "Campus Air Capsule Runner",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapUSpbyeGaDH0IauapAtCalh7Otsv0zDvDSEOvVPxNQ&s=10",
                        price: 129.99,
                        quantity: 0,
                },
                {
                        id: 2,
                        name: "Campus Air Capsule Black & Teal",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAWQH-_lESEiDgdwX6wo4OhRRwhqYAEz88dsKcUEKhQ&s=10",
                        price: 89.5,
                        quantity: 0,
                },
                {
                        id: 3,
                        name: "Campus Sport White & Navy",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytmV5ryLsxL4QsvfNR9m3ZmM_COlwSC6XD0OYFY3FjA&s=10",
                        price: 150.0,
                        quantity: 0,
                },
                {
                        id: 4,
                        name: "Campus Springy Fit Slip-On",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQkNNtIWdzgUKgaQjru9Y-7vSLXyzDDLnvn2m2Xsq0w&s=10",
                        price: 75.0,
                        quantity: 0,
                },
                {
                        id: 5,
                        name: "Campus Nitrofly Running Shoes",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-0kuHQRYYuRVpkDvfkeGO3fcTg6NDdvtI0q0iTPkxA&s=10",
                        price: 85.0,
                        quantity: 0,
                },
                {
                        id: 6,
                        name: "Campus OXYFIT Walking Shoes",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToG60mZTVSprzTSW5EGQTSINC5wDckyGnz78zUuezUBA&s=10",
                        price: 60.0,
                        quantity: 0,
                }
        ];

        // fill in the shoes data 
        const [shoesData, setShoesData] = useState(data);

        // add item from the shoes data whose quantity is more than 0 
        const cartItems = shoesData.filter((shoe) => shoe.quantity > 0);

        // to calculate total amount
        const amount = shoesData.reduce((sum, shoe) => {
                return sum + shoe.price * shoe.quantity;
        }, 0)

        // Logic to add items into the Cart and also Calculate total
        const AddItem = (id) => {
                setShoesData((prev) => {
                        return prev.map((shoe) => {
                                if (shoe.id === id) {
                                        const newQuantity = shoe.quantity + 1;
                                        return { ...shoe, quantity: newQuantity };
                                }
                                return shoe;
                        });
                });
        };

        // Logic to remove items into the Cart and also Calculate total
        const RemoveItem = (id) => {
                setShoesData((prev) => {
                        return prev.map((shoe) => {
                                if (shoe.id === id) {
                                        const newQuantity = shoe.quantity - 1;

                                        return { ...shoe, quantity: newQuantity };
                                }
                                return shoe;
                        });
                });
        };

        return (
                <div className="flex flex-col items-center relative">

                        <div className="nav-container w-full flex justify-center bg-[#1f2937]
                        sticky top-0 z-10">
                                {/* Navbar component */}
                                <Navbar />
                        </div>

                        <main className=" max-w-300 w-full flex justify-between">
                                {/* Grid to display shoes */}
                                <div className="shoe-display-grid w-2/3 grid grid-cols-2 grid-rows-3 gap-16 p-8 ">
                                        {/* Mapping over every items and display in the grid and render*/}
                                        {shoesData.map((shoe, id) => {
                                                return (
                                                        <div key={id} className="card border border-gray-600 rounded-2xl overflow-hidden
                                                                flex flex-col shadow shadow-black">
                                                                <img src={shoe.image} alt={shoe.name} className="w-full object-contain" />
                                                                <div className="card-info  flex flex-col gap-8 p-4 bg-[#374151] h-full justify-between">
                                                                        <div className="name-price flex flex-col gap-2">
                                                                                <h2 className="name font-bold text-lg">
                                                                                        {shoe.name}
                                                                                </h2>
                                                                                <p className="price">${shoe.price}</p>
                                                                        </div>
                                                                        <button className="cursor-pointer border rounded-lg p-2"
                                                                                onClick={() => AddItem(shoe.id)}>Add to Cart</button>
                                                                </div>
                                                        </div>
                                                )
                                        })}
                                </div>

                                {/* cart list */}
                                <div className="cart-section w-1/3 p-8 relative  ">
                                        <div className="cart flex flex-col gap-4 sticky top-30 w-full p-2 bg-[#1f2937] rounded-lg
                                        shadow shadow-black">
                                                <h2 className="header font-bold">Cart</h2>
                                                <div className="list-container flex flex-col gap-4">
                                                        {/* Map over the added items in the card to render*/}
                                                        {cartItems.map((item, id) => {
                                                                return (
                                                                        <div key={id} className="cart-item flex gap-4 items-center" >

                                                                                <div className="item-img w-20">
                                                                                        <img src={item.image} alt={item.name} />
                                                                                </div>

                                                                                <div className="item-info flex flex-col gap-2 w-full">

                                                                                        <h2 className="item-name text-sm">{item.name}</h2>

                                                                                        <div className="item-price-quantity flex justify-between items-center">
                                                                                                <div className="item-price text-xs">${(item.price * item.quantity).toFixed(2)}</div>
                                                                                                <div className="item-quantity text-xs flex  items-center gap-2">

                                                                                                        <button className="remBtn  px-2 bg-[#dc2626] rounded-sm
                                                                                                        cursor-pointer text-black text-lg"
                                                                                                                onClick={() => RemoveItem(item.id)}> - </button>
                                                                                                        <span>
                                                                                                                {item.quantity}
                                                                                                        </span>
                                                                                                        <button className="addBtn  px-2 bg-[#4ade80] rounded-sm
                                                                                                        cursor-pointer text-black text-lg"
                                                                                                                onClick={() => AddItem(item.id)}> + </button>

                                                                                                </div>
                                                                                        </div>

                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </div>
                                                <div className="total text-center ">Total: ${amount.toFixed(2)}</div>
                                        </div>

                                </div>
                        </main >
                </div >
        );
};

export default App;
