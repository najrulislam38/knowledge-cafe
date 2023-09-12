import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    
    // console.log(readingTime);
    return (
        <div className='md:w-1/3 '>
            <div>
                <p className='mb-6 text-2xl font-semibold text-purple-700 p-4 text-center border border-purple-700 rounded '>Spent time on read: {readingTime} min</p>
            </div>
            <div className="p-7 bg-gray-100 rounded-lg h-fit">
                <h2 className='text-2xl font-bold mb-5'>Bookmarked Blogs: {bookmarks.length}</h2>
                <div>
                    {
                    bookmarks.map(bookmark => <Bookmark 
                        key={bookmark.id} 
                        bookmark={bookmark}
                        ></Bookmark>) 
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;