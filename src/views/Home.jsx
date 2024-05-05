import useFetch from '@/hooks/useFetch.js';
import RecipeCard from '@/components/RecipeCard.jsx';
import ErrorCard from '@/components/ErrorCard.jsx';
import LoadingCard from '@/components/LoadingCard.jsx';
import DrButton from '@/components/DrButton.jsx';
import {useState} from 'react';

function Home() {
    let [endpoint, setEndpoint] = useState('https://www.themealdb.com/api/json/v1/1/random.php');
    let [loading, setLoading] = useState(false);
    let {data, error} = useFetch(endpoint, loading);

    return (<div className="home">
        {(data === null && error === null) && <LoadingCard/>}
        {(error !== null) && <ErrorCard error={error}/>}
        {data && data.map(recipe => (<RecipeCard key={recipe.idMeal} recipe={recipe}/>))}
        <DrButton loading={loading} setLoading={setLoading}/>
    </div>);
}

export default Home;