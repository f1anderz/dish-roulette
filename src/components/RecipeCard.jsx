import chef from '@/assets/chef.svg';
import ing from '@/assets/ingredient.svg';
import {useNavigate} from 'react-router-dom';

function RecipeCard({recipe}) {
    let navigate = useNavigate();

    function handleRecipe() {
        navigate('/recipe/' + recipe.idMeal);
    }

    return (<div className="recipe-card" onClick={handleRecipe}>
        <div className="recipe-card-title">{recipe.strMeal}</div>
        <img className="recipe-card-image" src={recipe.strMealThumb} alt={recipe.strMeal}/>
        <div className="recipe-card-info">
            <div className="recipe-card-info-category"><img src={ing} alt="Category"/>{recipe.strCategory}</div>
            <div className="recipe-card-info-area"><img src={chef} alt="Cuisine"/>{recipe.strArea}</div>
        </div>
    </div>);
}

export default RecipeCard;