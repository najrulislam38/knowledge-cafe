import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleAddReadingTime }) => {
    // console.log(blog);
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mt-7 md:pr-4 space-y-5'>
            <img src={cover} alt={`${title}'s the cover image`} className='w-full rounded-lg' />
            <div className='flex justify-between my-7'>
                <div className='flex items-center'>
                    <img src={author_img} alt="author image" className='w-14' />
                    <div className='ml-6'>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-xl font-medium text-gray-500'>{reading_time} min read</span>
                    <button 
                    onClick={() =>handleAddToBookmark(blog)}
                    className='ml-2 text-gray-700'
                    >
                    <FaBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl font-bold my-4"> {title}</h2>
            <div className=''>
                {
                    hashtags.map((hash, idx) => <span className='mr-2 text-gray-500 text-xl font-medium' key={idx}>#{hash}</span>)
                }
            </div>
            <button 
            onClick={() => handleAddReadingTime(reading_time)} 
            className='text-xl text-purple-700 font-medium underline'
            >Mark as read</button>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleAddReadingTime: PropTypes.func
}

export default Blog;