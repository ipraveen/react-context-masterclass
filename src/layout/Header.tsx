import Avatar from './Avatar';

export default function Header() {
    return (
        <header>
            <div className="container">
                <h1 className='logo'>Harry Potter Book Store</h1>
                <Avatar />
            </div>
        </header>
    );
}
