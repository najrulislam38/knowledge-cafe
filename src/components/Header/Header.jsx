import profile from './../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-24 '>
        <div className='flex md:justify-between items-center border-b-2 py-3'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
        </header>
    );
};

export default Header;