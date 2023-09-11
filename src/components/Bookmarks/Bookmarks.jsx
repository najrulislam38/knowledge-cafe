import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks);
    return (
        <div className="md:w-1/3 p-7 bg-gray-100 rounded-lg h-fit">
            <h2 className='text-2xl font-bold mb-5'>Bookmarked Blogs: {bookmarks.length}</h2>
            <div>
                {
                   bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>) 
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;