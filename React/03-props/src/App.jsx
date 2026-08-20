/* eslint-disable no-unused-vars */
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
        const data = [
                {
                        id: 1,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVPQFgejwksWovPu2_iLy06hgrOG_GYq172JbjvgZ1A&s=10",
                        name: "Image 1",
                        description: "Description for the first image.",
                },
                {
                        id: 2,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX6XnhYTOJj_J7T0Ujck0NSYeVBQ_oQU8XUz5u0KYpw&s=10",
                        name: "Image 2",
                        description: "Description for the second image.",
                },
                {
                        id: 3,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZrW43Jx4fjFhy-TowIjU7ZuDB2m3beA-jJkpTTIf9g&s=10",
                        name: "Image 3",
                        description: "Description for the third image.",
                },
                {
                        id: 4,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNvL9fLs0HqPaHBwEEaCIiU3yjoAYocMYAhbIH2MX3w&s=10",
                        name: "Image 4",
                        description: "Description for the fourth image.",
                },
                {
                        id: 5,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-15HtV_2Dw0fp6S5k2wHgwJnPOa_YNtRY7Qj8MJvQg&s=10",
                        name: "Image 5",
                        description: "Description for the fifth image.",
                },
                {
                        id: 6,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9lHp8XSoaXUYTL9EKb7ZCUngiJC9n9HDRGBg95atNg&s=10",
                        name: "Image 6",
                        description: "Description for the sixth image.",
                },
                {
                        id: 7,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbf2hmDhs3zSP3OgcCoL1AGA_vRSPK56c7Ma6XN3V8g&s=10",
                        name: "Image 7",
                        description: "Description for the seventh image.",
                },
                {
                        id: 8,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0oQsyUl5SWG-PQhkVQc1DYz1NNqKVM_PJ9NlFK-wJaA&s=10",
                        name: "Image 8",
                        description: "Description for the eighth image.",
                },
                {
                        id: 9,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjWeKoCdRahBX7LS7JMQ6vY3mCtjM7iQWcIKh7xEAOg&s",
                        name: "Image 9",
                        description: "Description for the ninth image.",
                },
                {
                        id: 10,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XkybygjLZak4d6V_7UGNwVr6EsshSaW4upx_bOxITw&s=10",
                        name: "Image 10",
                        description: "Description for the tenth image.",
                },
                {
                        id: 11,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCM_MYvEGIvf5YcPa_kUyZ60Y0EI17EawKPmE7fdzXuQ&s=10",
                        name: "Image 11",
                        description: "Description for the eleventh image.",
                },
                {
                        id: 12,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPB__vTKy_LuHEyC5DVsTRy5Ok-4yhJZFdcOBGeDKvA&s=10",
                        name: "Image 12",
                        description: "Description for the twelfth image.",
                },
                {
                        id: 13,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7NRSZGrtZeNAqFfAzGIicFJX7raJM25JAWiAMQfbFQ&s=10",
                        name: "Image 13",
                        description: "Description for the thirteenth image.",
                },
                {
                        id: 14,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBQRrXUGxyFvXWLE4WAMzJnjQzkV1L_lOHhYXSw2eew&s=10",
                        name: "Image 14",
                        description: "Description for the fourteenth image.",
                },
                {
                        id: 15,
                        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrR8JT3HNKYJui19lxFt9V8aII0UkoaCAorIUZUlEiPg&s=10",
                        name: "Image 15",
                        description: "Description for the fifteenth image.",
                },
        ];
        const [cardData, setCardData] = useState(data);

        return (
                <>
                        {/*main containenr */}
                        <main className="max-w-300 m-auto flex flex-col gap-8 px-8 py-24">
                                {/* header */}
                                <h1 className="header text-center text-2xl font-bold">
                                        All the cards are here
                                </h1>
                                {/* Cards display grid  */}
                                <section className="card-grid grid grid-cols-3 gap-16">
                                        {/* Mapping over every data to call the card components */}
                                        {cardData.map((card) => {
                                                return (
                                                        <div key={card.id}>
                                                                {/* render component and passing props */}
                                                                <Card
                                                                        imgLink={card.link}
                                                                        name={card.name}
                                                                        description={card.description}
                                                                />
                                                        </div>
                                                )
                                        })}
                                </section>

                        </main>
                </>
        );
};

export default App;
