import {useEffect, useState} from 'react';
import axios from 'axios';

let useFetch = (endpoint, loading) => {
    let [data, setData] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        axios.get(endpoint).then(({data}) => {
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