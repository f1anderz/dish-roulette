import {useEffect, useState} from 'react';

let useFetch = (endpoint, loading) => {
    let [data, setData] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        fetch(endpoint).then(res => {
            return res.json();
        }).then(data => {
            setError(null);
            setData(data.meals);
        }).catch(err => {
            setData(null);
            setError(err.message);
        });
    }, [loading]);
    return {data, error};
};

export default useFetch;