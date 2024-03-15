import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Main = () => {
    const [recipes,setRecipes] = useState([]);
    const [wantCook,setWantCook] = useState([]);
    const [cooking,setCooking] = useState([]);


    const handelWantToCook = (recipe) => {
        if(wantCook.includes(recipe)){
            return toast.warn('You cannot select a single recipe more than once')
        }
        setWantCook([...wantCook,recipe])
    }

    const handelPreparing = (item) =>{

        const remaningWantCook = wantCook.filter( recipe => recipe.recipe_id !== item.recipe_id)
        setWantCook(remaningWantCook)

            // console.log(item);
        setCooking([...cooking,item])
    }


    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } ,[])

    return (
        <main className='max-w-[1320px] mx-auto'>
            <section>
                <div className='flex justify-center gap-y-6 text-center flex-col mb-12'>
                    <h1 className='text-4xl text-[rgb(21,11,43)] font-semibold'>Our Recipes</h1>
                    <p className='text-lg text-[rgba(21,11,43,0.6)] font-medium'>Browse our diverse collection of recipes.From quick meals to gourmet delights, 
                    find inspiration for every occasion.</p>
                </div>
                <div className='flex gap-x-6'>
                    <div className='grid grid-cols-2 w-[60%] gap-6'>
                        {
                            recipes.map( recipe => <Recipe key={recipe.id} handelWantToCook={handelWantToCook} recipe ={recipe} ></Recipe> )
                        }
                    </div>
                    <div className='w-[40%] border h-fit border-[rgba(40,40,40,0.2)] rounded-2xl'>
                        
                        <h1 className='text-2xl text-[rgb(40,40,40)] font-semibold text-center pt-8 pb-4'>Want to cook:{wantCook.length}</h1>
                        <hr  />
                        <table className='text-center space-y-4 w-full mt-6'>
                            <tr>
                                <th className='px-4'></th>
                                <th className='px-8'>Name</th>
                                <th className='px-8'>Time</th>
                                <th className='px-8'>Calories</th>
                            </tr>
                            {
                                wantCook.map( (item,index) => {
                                    return(
                                        <tr className='bg-[rgba(40,40,40,0.03)]' key={item.recipe_id}>
                                            <td className='py-5 px-2'>{index + 1}</td>
                                            <td className='py-5 px-2'>{item.recipe_name}</td>
                                            <td className='py-5 px-2'>{item.preparing_time}</td>
                                            <td className='py-5 px-2'>{item.calories}</td>
                                            <td className='py-5 px-2'><button onClick={ () => handelPreparing (item)} className='text-base text-[rgb(21,11,43)] font-semibold py-2 px-4 bg-[rgb(11,229,138)] rounded-[50px]'>Preparing</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        <div className='pb-10 w-full'>
                            <h1 className='text-2xl text-[rgb(40,40,40)] font-semibold  pt-8 pb-4 text-center'>Currently cooking: 02</h1>
                            <hr />
                            <table className='text-center w-full space-y-4 mt-6'>
                                <tr>
                                    <th className='px-4'></th>
                                    <th className='px-8'>Name</th>
                                    <th className='px-8'>Time</th>
                                    <th className='px-8'>Calories</th>
                                </tr>
                                {
                                    cooking.map( (item ,index) => {
                                        return(
                                            <tr className='bg-[rgba(40,40,40,0.03)] w-full' key={item.recipe_id}>
                                                 <td className='py-5'>{index + 1}</td>
                                                 <td className='py-5'>{item.recipe_name}</td>
                                                 <td className='py-5'>{item.preparing_time}</td>
                                                 <td className='py-5'>{item.calories}</td>
                                            </tr>
                                        )
                                    } )
                                }
                            </table>
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