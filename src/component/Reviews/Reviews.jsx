import { useEffect, useState } from "react";
import Review from "../Review/Review";


const Reviews = () => {

    const [reviews,setReviews] = useState([]);

    useEffect( () => {
        fetch('reviews.json')
        .then( res => res.json() )
        .then( data => setReviews(data))
    },[])

    return (
        <div>
            <div className="text-center my-28 space-y-4">
            <h1 className='text-4xl text-[rgb(21,11,43)] font-semibold'>Our Feedback</h1>
            <p className='text-lg text-[rgba(21,11,43,0.6)] font-medium'>From farm to table, we pride ourselves on serving dishes that not only tantalize your taste buds but also reflect our commitment to quality and sustainability. Indulge in a culinary journey where every bite tells a story.</p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
            {
                reviews.map( review => <Review key={review.id} review={review} ></Review> )
            }
        </div>
        </div>
    );
};

export default Reviews;