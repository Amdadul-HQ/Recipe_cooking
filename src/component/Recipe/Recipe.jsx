import { IoTimeOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import PropTypes from 'prop-types';

const Recipe = ({recipe,handelWantToCook}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories,id} = recipe
    return (
        <div className="p-6 rounded-2xl border border-[rgba(40,40,40,0.2)] flex flex-col justify-between">
            <div>
                <img className='w-full rounded-xl h-[200px] object-fill' src={recipe_image} alt="" />
            </div>
            <div className="mt-6">
            <h1 className="text-xl text-[rgb(40,40,40)] font-semibold">{recipe_name}</h1>
            <p className="text-base text-[rgb(135,135,135)] font-medium mt-4 mb-3">{short_description}</p>
            <hr />
            </div>
            <h3 className="text-lg text-[rgb(40,40,40)] font-semibold mt-6">Ingredients: {ingredients.length}</h3>
            <ul className='list-disc pl-4 text-lg font-normal text-[rgb(135,135,135)] mt-4 mb-4'>
                {
                    ingredients.map( item => <li key={id} >{item}</li> )
                }
            </ul>
            <hr />
            <div className="flex items-center text-xl font-normal text-[rgba(40,40,40,0.8)] gap-x-8 mt-4">
                <p className="flex gap-x-3 items-center"><span><IoTimeOutline></IoTimeOutline></span>{preparing_time} min</p>
                <p className="flex gap-x-3 items-center"><span><RiFireLine></RiFireLine></span>{calories} calories</p>
            </div>
            <button onClick={ () => handelWantToCook(recipe)} className="bg-[rgb(11,229,138)] px-6 py-3 rounded-[50px] text-[rgb(21,11,43)] text-lg font-medium mt-4">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
};

export default Recipe;