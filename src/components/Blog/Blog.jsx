import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    const { title } = blog;
    return (
        <div>
            <h2 className="text-4xl font-bold"> {title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;