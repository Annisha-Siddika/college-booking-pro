import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const CollegeCards = ({ college }) => {
    const {image, name, rating, admission_date, research_count} = college;
    return (
        <div className="w-72 h-full p-4 my-4 bg-gray-200 rounded-lg">
            <h2 className="bg-white text-green-600 font-bold text-xl py-2 text-center rounded-t-lg">{name}</h2>
            <img src={image} alt="" className="rounded-b-lg shadow-lg" />
            <div className='py-2'>
                <h3>Admission Date: {admission_date}</h3>
                <p>Research: {research_count} times</p>
                <div className='flex'>Ratings: <Rating style={{maxWidth: 100}} value={rating} readOnly/></div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-green-600 text-white px-4 py-2 rounded-md'>Details</button>
            </div>
            
        </div>
    );
};

export default CollegeCards;