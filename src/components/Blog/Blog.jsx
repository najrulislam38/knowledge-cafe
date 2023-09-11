import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
    // console.log(blog);
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mt-10 md:pr-4'>
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
                    onClick={handleAddToBookmark}
                    className='ml-2 text-gray-700'
                    >
                    <FaBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl font-bold my-4"> {title}</h2>
            <div className='mb-10'>
                {
                    hashtags.map((hash, idx) => <span className='mr-2 text-gray-500 text-xl font-medium' key={idx}>#{hash}</span>)
                }
            </div>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;