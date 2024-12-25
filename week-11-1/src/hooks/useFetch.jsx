import { useEffect, useState } from 'react';

export default function useFetch(url, retryTime) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const getPostData = async () => {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            getPostData();
        }, retryTime * 1000);

        return () => clearInterval(intervalId);
    }, [retryTime]);

    return {
        data,
        loading
    }
}