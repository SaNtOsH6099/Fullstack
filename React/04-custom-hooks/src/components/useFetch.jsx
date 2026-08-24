import { useEffect, useState } from "react";

const useFetch = (url) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
                // async funtion to fetch data
                const fecthData = async () => {
                        setLoading(true); // set loading true by default
                        setError(null); // set error as null

                        try { // fetch in try block
                                const response = await fetch(url);
                                if (!response.ok) {
                                        // if response not success then throw error
                                        throw new Error(response.status);
                                }
                                // convert data to json 
                                const result = await response.json();
                                // store the data
                                setData(result);
                        } catch (err) { // catch the error thrown if any
                                setError(err.message);//store the error msg
                        } finally { // finally set  loading false
                                setLoading(false);
                        }
                };
                // run the async function
                fecthData();
        }, [url]);

        // return all needed variables
        return {
                data,
                loading,
                error,
        };
};

export default useFetch;
