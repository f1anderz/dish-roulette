import {useParams} from 'react-router-dom';
import useFetch from '@/hooks/useFetch.js';

function Recipe() {
    let params = useParams();
    let {data, error} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + params.id);
    let ingredients = [];

    if (data !== null) {
        data.map(recipe => {
            for (let i = 1; i <= 20; i++) {
                if (recipe['strIngredient' + i]) {
                    ingredients[i] = {
                        id: i, name: recipe['strIngredient' + i], measure: recipe['strMeasure' + i]
                    };
                }
            }
        });
    }

    return (<div className="recipe-page">
        {(data === null && error === null) && <div className="recipe-page-loading">Loading</div>}
        {error && <div className="recipe-page-error">{error}</div>}
        {data && data.map(recipe => (<div className="recipe-page-body" key={recipe.idMeal}>
            <div className="recipe-page-body-title">{recipe.strMeal}</div>
            <img className="recipe-page-body-image" src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <div className="recipe-page-body-ingredients">
                {ingredients.map(ingredient => (<div className="recipe-page-body-ingredients-item" key={ingredient.id}>
                    <div className="recipe-page-body-ingredients-item-ingredient">{ingredient.name}</div>
                    <div className="recipe-page-body-ingredients-item-measure">{ingredient.measure}</div>
                </div>))}
            </div>
            <div className="recipe-page-body-instructions">{recipe.strInstructions}</div>
        </div>))}
    </div>);
}

export default Recipe;