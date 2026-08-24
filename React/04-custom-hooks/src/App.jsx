/* eslint-disable no-unused-vars */
import { useState } from "react";
import useFetch from "./components/useFetch";
import Card from "./components/Card"

const App = () => {

        // call the hook
        const { data, loading, error } = useFetch("https://picsum.photos/v2/list?page=2&limit=100",);

        return (
                <div>
                        {/* check if loading  */}
                        {loading ?
                                // if loading = true then display this
                                (<div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                        Loading......
                                </div>)
                                // if not loading check for error
                                : error ?
                                        // if any error then display this
                                        (<div>Something went wrong : {error}</div>) : (
                                                // if no loading and no error then render the page
                                                <div className=" max-w-300 m-auto py-12 flex flex-col items-center gap-12 min-h-screen">
                                                        <h1 className="font-bold text-2xl">
                                                                Photos
                                                        </h1>
                                                        <div className="data-grid grid grid-cols-4 gap-2">
                                                                {data.map((item) => (
                                                                        // call card component for each item
                                                                        < Card url={item.download_url} author={item.author} />
                                                                )
                                                                )}
                                                        </div>
                                                </div>
                                        )}
                </div>
        );
};

export default App;
