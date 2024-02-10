import { useState, useEffect } from "react";
import axios from 'axios';
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const useFetch = (query, type = false) => {
    const url = type ? singleUrl : searchUrl;

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsError(false)
        setIsLoading(true)

        axios
            .get(`${url}${query}`)
            .then(response => {
                setData(response.data)
                setCount(response.data.drinks.length)
            })
            .catch(err => {
                setIsError(true)
                setCount(0)
            })

        setIsLoading(false)

    }, [url, query])

    return { isLoading, data, isError, count };
};

export default useFetch;