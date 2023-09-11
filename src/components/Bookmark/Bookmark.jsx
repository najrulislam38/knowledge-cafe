import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    // console.log(bookmark);
    const {title} = bookmark;
    return (
        <div className='bg-white p-4 rounded mb-4'>
            <h3 className='text-lg font-medium'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;