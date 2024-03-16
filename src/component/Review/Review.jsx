
import PropTypes from 'prop-types';


const Review = ({review}) => {
    const {customer_img,customer_name,reviews} = review;
    return (
        <div className='p-6 border rounded-2xl text-center border-[rgba(40,40,40,0.2)] space-y-4'>
            <div className='flex justify-center'>
                <img className='w-28 h-28 rounded-full object-cover' src={customer_img} alt="" />
            </div>
            <div>
                <h1 className="text-xl text-[rgb(40,40,40)] font-semibold mb-3">{customer_name}</h1>
                    <div className="rating mb-3">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                <p className='text-lg font-normal text-[rgb(135,135,135)]'>{reviews}</p>
            </div>
        </div>
    );
};

Review.propTypes = {
    review:PropTypes.object.isRequired
};
export default Review;

