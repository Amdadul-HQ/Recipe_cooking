import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Main = () => {
    const [recipes,setRecipes] = useState([]);
    const [wantCook,setWantCook] = useState([]);
    const [cooking,setCooking] = useState([]);
    const [totalTime,setTotalTime] = useState(0);
    const [totalCalorise,setTotalCalorise] = useState(0);


    const handelWantToCook = (recipe) => {
        if(wantCook.includes(recipe)){
            return toast.warn('You cannot select a single recipe more than once')
        }
        setWantCook([...wantCook,recipe])
    }

    const handelPreparing = (item) =>{

        const remaningWantCook = wantCook.filter( recipe => recipe.recipe_id !== item.recipe_id)
        
        setTotalTime(totalTime + item.preparing_time)
        setTotalCalorise(totalCalorise + item.calories)
        setWantCook(remaningWantCook)
        setCooking([...cooking,item])

    }


    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } ,[])

    return (
        <main className='max-w-[1320px] mx-auto lg:px-0 px-5'>
            <section>
                <div className='flex justify-center gap-y-6 text-center flex-col mb-12'>
                    <h1 className='text-4xl text-[rgb(21,11,43)] font-semibold'>Our Recipes</h1>
                    <p className='text-lg text-[rgba(21,11,43,0.6)] font-medium'>Browse our diverse collection of recipes.From quick meals to gourmet delights, 
                    find inspiration for every occasion.</p>
                </div>
                <div className='flex lg:flex-row flex-col gap-y-6 gap-x-6'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 w-full lg:w-[60%] gap-6'>
                        {
                            recipes.map( recipe => <Recipe key={recipe.id} handelWantToCook={handelWantToCook} recipe ={recipe} ></Recipe> )
                        }
                    </div>
                    <div className='lg:w-[40%] w-full border h-fit border-[rgba(40,40,40,0.2)] rounded-2xl'>
                        
                        <h1 className='text-2xl text-[rgb(40,40,40)] font-semibold text-center pt-8 pb-4'>Want to cook:{wantCook.length}</h1>
                        <hr  />
                        <table className='text-center space-y-4 w-full mt-6'>
                            <tr>
                                <th className=''></th>
                                <th className=''>Name</th>
                                <th className=''>Time</th>
                                <th className=''>Calories</th>
                            </tr>
                            {
                                wantCook.map( (item,index) => {
                                    return(
                                        <tr className='bg-[rgba(40,40,40,0.03)] text-[rgba(40,40,40,0.7)] text-base font-normal' key={item.recipe_id}>
                                            <td className='py-5 pl-4'>{index + 1}</td>
                                            <td className='py-5 px-2'>{item.recipe_name}</td>
                                            <td className='py-5 px-2'>{item.preparing_time} min</td>
                                            <td className='py-5 px-2'>{item.calories} calories</td>
                                            <td className='py-5 px-2'><button onClick={ () => handelPreparing (item)} className='text-base text-[rgb(21,11,43)] font-semibold py-2 px-4 bg-[rgb(11,229,138)] rounded-[50px]'>Preparing</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        <div className='pb-10 w-full'>
                            <h1 className='text-2xl text-[rgb(40,40,40)] font-semibold  pt-8 pb-4 text-center'>Currently cooking: {cooking.length}</h1>
                            <hr />
                            <table className='text-center w-full space-y-4 mt-6'>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                                {
                                    cooking.map( (item ,index) => {
                                        return(
                                            <tr className='bg-[rgba(40,40,40,0.03)] w-full text-[rgba(40,40,40,0.7)] text-base font-normal' key={item.recipe_id}>
                                                 <td className='py-5 pl-6'>{index + 1}</td>
                                                 <td className='py-5'>{item.recipe_name}</td>
                                                 <td className='py-5'>{item.preparing_time} min</td>
                                                 <td className='py-5'>{item.calories} calories</td>
                                            </tr>
                                        )
                                    } )
                                }
                            </table>
                        </div>
                        <div className='text-right pr-8 font-medium py-5 text-xl text-[rgba(40,40,40,0.8)]'>
                            <h1>Total Time = {totalTime} min</h1>
                            <h1>Total Calories = {totalCalorise} calories</h1>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer></ToastContainer>
        </main>
    );
};

Main.propTypes = {
    
};

export default Main;